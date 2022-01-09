import { useState } from "react";

//styles
import "./Projects.css";

//components
import MemoryGame from "../components/MemoryGame";
import ProjectsList from "../components/ProjectsList";
import { useTheme } from "../hooks/useTheme";
import { useFetch } from "../hooks/useFetch";

export default function Projects() {
  const { data: projects, isPending } = useFetch(
    "http://localhost:3000/projects"
  );

  const { mode } = useTheme();
  const [showGame, setShowGame] = useState(false);
  const [showProjects, setShowProjects] = useState(false);

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
        <h1 className={`question ${mode}`}>
          Want to play a game to see my projects?{" "}
        </h1>
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
