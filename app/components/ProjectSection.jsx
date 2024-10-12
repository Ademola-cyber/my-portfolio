import React from "react";
import ProjectCard from "./ProjectCard";

const projectData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Project 1 Description",
    image: "/1.png",
    tag: ["All", "web"],
  },

  {
    id: 2,
    title: "Photography Portfolio Website",
    description: "Project 2 Description",
    image: "/2.png",
    tag: ["All", "web"],
  },

  {
    id: 3,
    title: "E-commerce Application",
    description: "Project 3 Description",
    image: "/3.png",
    tag: ["All", "web"],
  },

  {
    id: 4,
    title: "Food Ordering Application",
    description: "Project 4 Description",
    image: "/4.png",
    tag: ["All", "Mobile"],
  },

  {
    id: 5,
    title: "React Firebase Template",
    description: "Authentication and CRUD operations",
    image: "/5.png",
    tag: ["All", "web"],
  },

  {
    id: 6,
    title: "Full-stack Roadmap",
    description: "Project 5 Description",
    image: "/6.png",
    tag: ["All", "web"],
  },
];

const ProjectSection = () => {
  return (
    <>
      <h2>My Projects</h2>
      <div className="">
        {projectData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            tags={project}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectSection;
