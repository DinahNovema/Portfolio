import { useTheme } from "../hooks/useTheme";
import { FaLinkedinIn, FaReact } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoJavascript } from "react-icons/io";
import { FaCss3Alt } from "react-icons/fa";
import { Document, Page } from "react-pdf";
import { useState } from "react";
import { pdfjs } from "react-pdf";
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.entry";
import Dinah from "../assets/Dinah.pdf";

//styles
import "./About.css";

pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;

export default function About() {
  const { mode } = useTheme();
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [showPDF, setShowPDF] = useState(false);
  const [isCloseButton, setIsCloseButton] = useState(false);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const handleClick = () => {
    setShowPDF(true);
  };
  const handleClickClose = () => {
    setIsCloseButton(true);
    setShowPDF(false);
  };

  return (
    <div>
      <h1 className={`title-about ${mode}`}>
        Originally, Industrial Engineer - Freshly new Frontend Developer
      </h1>
      <p className={`about-me ${mode}`}>
        After years of working in various fields, such as Innovation, Marketing
        and recently in QA,
        <br /> I've decided to embrace the tech world, and learn Frontend
        Development. I've recently
        <br /> completed the 3 months Frontend Development program at ITC
        (Israel Tech Challenge)
        <br /> and I keep up with my skills and projects with online courses
        (such as Udemy).
        <br /> I like to keep my code organized, clean and easy to read. I'm
        detail oriented, quick and self learner. <br />
      </p>

      <button className="button-pdf" onClick={handleClick}>
        Check my CV
        {showPDF && (
          <Document
            className="pdf"
            file={Dinah}
            onLoadSuccess={onDocumentLoadSuccess}
          >
            <Page pageNumber={pageNumber}></Page>
          </Document>
        )}
      </button>
      {showPDF && (
        <button className="button-close" onClick={handleClickClose}>
          X
        </button>
      )}
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
