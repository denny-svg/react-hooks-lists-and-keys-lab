import React from "react";
import ProjectItem from "./ProjectItem";
// ProjectList component receives  prop named projects and it maps through the projects arrary
function ProjectList({ projects }) {
  const props = projects.map((project) => (
    <ProjectItem key={project.id} name={project.name} about={project.about}   technologies={project.technologies}
    /> 
  ));

  // Returning the JSX structure of ProjectList component.
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{props}</div>
    </div>
  );
}

export default ProjectList;