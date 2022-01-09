import { useFetch } from "../hooks/useFetch";
import { BsGithub } from "react-icons/bs";

//styles
import "./ProjectsList.css";

export default function ProjectsList() {
  const {
    data: projects,
    isPending,
    error,
  } = useFetch("http://localhost:3000/projects");

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
