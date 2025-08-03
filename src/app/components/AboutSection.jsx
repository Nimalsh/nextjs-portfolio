"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "QA Skills",
    id: "qa-skills",
   content: (
  <ul className="list-disc pl-2">
    <li>Manual Testing – UI, Functional, Regression, Smoke, and Sanity</li>
    <li>Automation Testing – Playwright, Selenium</li>
    <li>Performance Testing – Apache JMeter</li>
    <li>API Testing – Postman</li>
    <li>Test Case Design – TestLink</li>
    <li>Bug Tracking – Jira</li>
    <li>Frameworks & Tools – TestNG, JUnit, Maven, Git</li>
    <li>CI/CD – Basic experience with Jenkins & Git integration</li>
  </ul>
)

  },
  {
    title: "Development Skills",
    id: "dev-skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Languages: Java, JavaScript, Python, C/C++, PHP</li>
        <li>Frontend: HTML, CSS, React, TailwindCSS</li>
        <li>Backend: Spring Boot, Node.js </li>
        <li>Databases: MySQL, MongoDB</li>
        <li>Version Control: GitHub</li>
        <li>Tools: VS Code, IntelliJ, DBeaver</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>BSc in Computer Science – UCSC (2022–2025)</li>
        <li>G.C.E A/L – Sujatha Vidyalaya, Matara (2020)</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>ISTQB Certified Tester Foundation Level (2025)</li>
        <li>AWS Educate: Introduction to Cloud 101</li>
        <li>AI Foundations: Machine Learning – LinkedIn</li>
        <li>Learning Java 11 – LinkedIn Learning</li>
        <li>Learning Python – LinkedIn Learning</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("qa-skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} alt="About Image" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a Software Quality Engineer with a passion for ensuring high-quality,
            reliable, and user-friendly software products. I have experience working with
            manual and automated testing tools such as Selenium, Playwright, JMeter,
            Postman, and TestLink, and I’m skilled in using Git, Jira, and CI/CD pipelines
            for efficient QA processes. I am a fast learner who is always eager to explore
            new testing strategies and technologies. I enjoy collaborating with
            cross-functional teams to identify issues early and deliver robust software
            solutions.
          </p>
          <div className="flex flex-row justify-start mt-8 flex-wrap gap-2">
            <TabButton
              selectTab={() => handleTabChange("qa-skills")}
              active={tab === "qa-skills"}
            >
              QA Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("dev-skills")}
              active={tab === "dev-skills"}
            >
              Dev Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
