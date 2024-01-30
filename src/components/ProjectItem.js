import React from "react";

// ProjectItem component receives props which is name, about, and technologies.
function ProjectItem({ name, about, technologies }) {
  return (
  //Displaying the name of the project 
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
      {technologies.map((technology, props) => (
          <span key={props}>{technology}</span>
        ))}
      </div>
    </div>
  );
}

export default ProjectItem;