import { useState, useEffect } from "react";
import { projectFirestore } from "../firebase/config";

//styles
import "./Projects.css";

//components
import ProjectsList from "../components/ProjectsList";
import { useTheme } from "../hooks/useTheme";

export default function Projects() {
  const [projects, setProjects] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);
  const { mode } = useTheme();

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

  return (
    <div className="projects">
      {projects && (
        <h1 className={`my-projects ${mode}`}>Some of my projects</h1>
      )}
      <ProjectsList />
    </div>
  );
}
