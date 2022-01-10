import { BsGithub } from "react-icons/bs";
import { projectFirestore } from "../firebase/config";
import { useEffect, useState } from "react";

//styles
import "./ProjectsList.css";

export default function ProjectsList() {
  const [projects, setProjects] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);

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
    <div className="projects-list">
      {isPending && (
        <div class="loadingio-spinner-bean-eater-xdgb8rfp6y">
          <div class="ldio-nbh2upc6wh">
            Loading projects...
            <div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      )}

      {error && <div className="error">{error}</div>}

      {projects &&
        projects.map((project) => (
          <div key={project.id}>
            <div className="card-wrapper">
              <img src={project.image} className="images" />
              <div className="project-content">
                <a href={project.website} target="_blank" className="title">
                  {project.title}
                </a>
                <a href={project.github} target="_blank" className="github">
                  <BsGithub />
                </a>
                <p>{project.description}</p>
              </div>

              <br />
            </div>
          </div>
        ))}
    </div>
  );
}
