import React from "react";
import Projects from "./Projects";

const App = () => {
  return (
    <div className="main">
      <div className="intro">
        <div className="left">
          <img className="pfp" src="ansh.jpeg" alt="ansh" />
        </div>
        <div className="right">
          <h3>Hey there! I am</h3>
          <h1>Ansh Kumar</h1>
          <h5>Full Stack Developer</h5>
        </div>
      </div>

      <div className="about">
        A web developer skilled in building scalabe web applications using{" "}
        <button>
          {" "}
          <img src="reactjs.png" alt="" />
          React
        </button>{" "}
        <button>
          {" "}
          <img src="nodejs.png" alt="" />
          NodeJS
        </button>{" "}
        and{" "}
        <button>
          {" "}
          <img src="express.png" alt="" />
          ExpressJs
        </button>
        . Comfortable with{" "}
        <button>
          {" "}
          <img src="java.png" alt="" />
          Java
        </button>{" "}
        particularly for solving basic problems involving loops, arrays, and
        strings. Experienced with{" "}
        <button>
          <img src="git.png" alt="" />
          Git
        </button>{" "}
        /{" "}
        <button>
          <img src="github.png" alt="" />
          Github
        </button>{" "}
        and modern development workflows.
        <div className="resume">
          <button>
            <a href="ansh-resume.pdf" download>
              Resume
            </a>
          </button>
        </div>
      </div>

      <div className="skills">
        <button>
          <img src="html.png" alt="" />
          HTML
        </button>
        <button>
          <img src="css.png" alt="" />
          CSS
        </button>
        <button>
          <img src="js.png" alt="" />
          JS
        </button>
        <button>
          <img src="express.png" alt="" />
          Express
        </button>
        <button>
          <img src="reactjs.png" alt="" />
          ReactJS
        </button>
        <button>
          <img src="tailwind.png" alt="" />
          Tailwind
        </button>
        <button>
          <img src="java.png" alt="" />
          Java
        </button>
        <button>
          <img src="python.png" alt="" />
          Python
        </button>
        <button>
          <img src="git.png" alt="" />
          Git
        </button>
        <button>
          <img src="github.png" alt="" />
          Github
        </button>
      </div>

      <div className="projects">
        <h2>Projects</h2>
        <hr />
        <div className="tiles">
          <Projects
          video="codetune.mp4" 
          title="CodeTune"
          desc="Build an AI based code reviewer using that React , NodeJS , ExpressJS and Google Gemini API to review the code in real time"
          demolink="https://codetune-frontend.onrender.com/"
          sourceCode="https://github.com/iamanshkumar/CodeTune"
          />

          <Projects
          video="cleancut.mp4" 
          title="CleanCut"
          desc="A web-based background removal bot using the remove.bg API to automate image background removal."
          sourceCode="https://github.com/iamanshkumar/CleanCut-Bot"
          />
        </div>
      </div>

      <div className="contact">
        <h2>Socials</h2>
        <hr />
        <h4><a href="https://github.com/iamanshkumar" target="_blank"><img src="github-white.png" alt="" />@iamanshkumar</a></h4>
        <h4><a href="https://www.linkedin.com/in/anshkumar46/" target="_blank"><img src="linkedin.png" alt="" />Ansh Kumar</a></h4>
        <h4><a href="https://x.com/iamanshkumar" target="_blank"><img src="x.png" alt="" />@iamanshkumar</a></h4>
        <h4><a href="ansh-resume.pdf" download><img src="resume.png" alt="" />Resume</a></h4>
        <h4><a href="mailto:anshagroia@gmail.com"><img src="mail.png" alt="" />anshagroia@gmail.com</a></h4>
      </div>
    </div>
  );
};

export default App;
