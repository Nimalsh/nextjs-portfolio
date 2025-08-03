"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "FitEats – Nutritious Food, Fast Delivery",
    description:
      "BMI analysis, calorie tracking, and meal plan generation with web & mobile support.",
    image: "/images/projects/1.jpg",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/Nimalsh/fitEats",
  },
  {
    id: 2,
    title: "EcoPlus – Waste Management Platform",
    description:
      "Designed a waste management platform to streamline online garbage collection, eco-credit system.",
    image: "/images/projects/2.jpeg",
    tag: ["All", "Web"],
    gitUrl:
      "https://github.com/Kaveesha-Weerakoon/EcoPlus-WasteManagement-System.git",
  },
  {
    id: 3,
    title: "Library Management System",
    description:
      "MERN stack app to manage books, user accounts, search, and borrowing processes.",
    image: "/images/projects/4.jpeg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/SDilhara19/RADProjectFinal",
  },
  {
    id: 5,
    title: "Portfolio",
    description:
      "Built a responsive portfolio website using Next.js and Tailwind CSS.",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Nimalsh/nextjs-portfolio",
  },
  // {
  //   id: 6,
  //   title: "UI Automation with Playwright (POM)",
  //   description:
  //     "Developed automation test scripts using Playwright with the Page Object Model (POM). Validated workflows of an e-commerce web app.",
  //   image: "/images/projects/playwright.png", // Make sure this image exists
  //   tag: ["All", "Testing"],
  //   gitUrl: "https://github.com/your-username/your-playwright-project",
  // },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
