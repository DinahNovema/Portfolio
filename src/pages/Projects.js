import { useState, useEffect } from "react";
import { projectFirestore } from "../firebase/config";

//styles
import "./Projects.css";

//components
import MemoryGame from "../components/MemoryGame";
import ProjectsList from "../components/ProjectsList";
import { useTheme } from "../hooks/useTheme";

export default function Projects() {
  const [projects, setProjects] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);
  const { mode } = useTheme();
  const [showGame, setShowGame] = useState(false);
  const [showProjects, setShowProjects] = useState(false);

  useEffect(() => {
    setIsPending(true);
    const unsub = projectFirestore.collection("projects").onSnapshot(
      (snapshot) => {
        if (snapshot.empty) {
          setError("No projects to load");
          setIsPending(false);
        } else {
          let results = [];
          snapshot.docs.forEach((doc) => {
            results.push({ id: doc.id, ...doc.data() });
          });
          setProjects(results);
          setIsPending(false);
        }
      },
      (err) => {
        setError(err.message);
        setIsPending(false);
      }
    );
    return () => unsub();
  }, []);

  const handleClickYes = (button) => {
    if (button) {
      setShowGame(true);
    }
  };

  const handleClickNo = (button) => {
    if (button) {
      setShowProjects(true);
    }
  };

  return (
    <div className="projects">
      {!showGame && !showProjects && (
        <p className={`question ${mode}`}>
          Want to play a game to see my projects?
        </p>
      )}
      {!showGame && !showProjects && (
        <div className="btn-question-wrapper">
          <button className="btn-yes" onClick={handleClickYes}>
            Yes
          </button>
          <button className="btn-no" onClick={handleClickNo}>
            No
          </button>
        </div>
      )}
      {showGame && <MemoryGame />}
      {showProjects && <ProjectsList />}
    </div>
  );
}
