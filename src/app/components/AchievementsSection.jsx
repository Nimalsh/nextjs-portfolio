"use client";
import React from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const achievementsList = [
  {
    metric: "University Projects",
    value: "4",
  },
  {
    metric: "Industrial Project",
    value: "3",
  },
  {
    metric: "Years",
    value: "1",
  },
];

const AchievementsSection = () => {

};

export default AchievementsSection;
