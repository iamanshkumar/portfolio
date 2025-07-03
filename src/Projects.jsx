import React from 'react';

const Projects = ({ video, title, desc, demolink = null, sourceCode }) => {
  return (
    <div className='project-tab'>
      <video src={video} controls loop autoPlay muted width="320" height="240" />
      <h3>{title}</h3>
      <p>{desc}</p>
      <div className="links">
        {demolink && (
          <button>
            <img src="website.png" alt="Website" />
            <a href={demolink} target="_blank" rel="noopener noreferrer">Website</a>
          </button>
        )}

        {sourceCode && (
          <button>
            <img src="github.png" alt="Source Code" />
            <a href={sourceCode} target="_blank" rel="noopener noreferrer">Source</a>
          </button>
        )}
      </div>
    </div>
  );
};

export default Projects;
