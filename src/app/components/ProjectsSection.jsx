"use client";
import React, { useState } from 'react';
import { Link as ScrollLink } from "react-scroll";
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';

const projectsData = [
    {
      id: 1,
      title: "Flight Reservation Full Stack Web Application",
      description: "React, Spring Boot, MySQL",
      image: "/images/projects/1.jpg",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/tamikazi/Flight-Reservation-Web-App",
      previewUrl: "https://www.youtube.com/watch?v=MryozKskgeg"
    },
    {
      id: 2,
      title: "Multiclass Classification of Animal Images using CNN",
      description: "ResNet-18, Vgg-16 model architectures with IPython",
      image: "/images/projects/2.jpg",
      tag: ["All"],
      gitUrl: "https://github.com/B-Phan/ENEL_645_Project",
      previewUrl: "https://www.youtube.com/watch?v=ImTMXerBkvI"
    },
    {
      id: 3,
      title: "E-Commerce Full Stack Application",
      description: "Next.js, React.js, Tailwind CSS, PlanetScale, MySQL, PrismaDB", 
      image: "/images/projects/3.jpg",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/B-Phan/e-commerce-webapp",
      previewUrl: "/"
    },
    {
      id: 4,
      title: "Alberta Specialty Care Wait-Times Mobile Application",
      description: "React Native", 
      image: "/images/projects/4.png",
      tag: ["All", "Mobile"],
      gitUrl: "https://github.com/Brandonlac/alberta-specialty-care-wait-times/tree/main",
      previewUrl: "https://www.youtube.com/watch?v=Nu_xVqOGK54"
    },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) => 
    project.tag.includes(tag)
  );

  return (
    <section id="projects" className="text-white py-8 px-4 xl:py-16 xl:px-16">
      <>
        <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
          My Projects
        </h2>
        <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
          <ProjectTag 
            onClick={handleTagChange} 
            name="All" 
            isSelected={tag === "All"} 
          />
          <ProjectTag 
            onClick={handleTagChange} 
            name="Web" 
            isSelected={tag === "Web"} 
          />
          <ProjectTag 
            onClick={handleTagChange} 
            name="Mobile" 
            isSelected={tag === "Mobile"} 
          />
        </div>
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              tags={project}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          ))}
        </div>
      </>
    </section>
  );
};

export default ProjectsSection;
