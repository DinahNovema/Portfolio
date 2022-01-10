import { useTheme } from "../hooks/useTheme";
import { FaLinkedinIn, FaReact } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoJavascript } from "react-icons/io";
import { FaCss3Alt } from "react-icons/fa";

//styles
import "./About.css";

export default function About() {
  const { mode } = useTheme();
  return (
    <div>
      <h1 className={`title-about ${mode}`}>
        Originally, Industrial Engineer - Freshly new Frontend Developer
      </h1>
      <p className={`about-me ${mode}`}>
        After years of working in various fields, such as Innovation, Marketing
        and recently in QA, I've decided to embrace the tech world, and learn
        Frontend Development. I've recently completed the 3 months Frontend
        Development program at ITC (Israel Tech Challenge) and I keep up with my
        skills and projects with online courses (such as Udemy).
        <br /> I like to keep my code organized, clean and easy to read. I'm
        detail oriented, quick and self learner. <br />
      </p>
      <h2 className={`skills ${mode}`}>
        Skills: HTML5, CSS3, JavaScript, ReactJS
      </h2>
      <div className="icons-skills">
        <AiFillHtml5 className={`icon ${mode}`} />
        <FaCss3Alt className={`icon ${mode}`} />
        <IoLogoJavascript className={`icon ${mode}`} />
        <FaReact className={`icon ${mode}`} />
      </div>
      <h2 className={`find-me ${mode}`}>Find me on:</h2>
      <div className="social-media">
        <a href="https://www.linkedin.com/in/dinah-novema/" target="_blank">
          <FaLinkedinIn className={`linkedin ${mode}`} />
        </a>
        <a href="https://github.com/DinahNovema" target="_blank">
          <BsGithub className={`github-about ${mode}`} />
        </a>
      </div>
    </div>
  );
}
