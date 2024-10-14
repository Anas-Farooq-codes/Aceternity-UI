"use client";
import React from "react";
import { AnimatedTooltip } from "./Ui/AnimatedToolTIp";
const people = [
    {
      id: 1,
      name: "Ethan Jameson",
      designation: "Marketing Director at Tech Innovators",
      image: "/stack-1.png",
    },
    {
      id: 2,
      name: "James Carter",
      designation: "CEO of StartUp Solutions",
      image: "/stack-3.png",
    },
    {
      id: 3,
      name: "Emily Johnson",
      designation: "Founder of Creative Agency",
      image: "/stack-2.png",
    },
    {
      id: 4,
      name: "David Brown",
      designation: "Operations Manager at Global Ventures",
      image: "/stack-5.png",
    },
    {
      id: 5,
      name: "Laura Stevens",
      designation: "Product Manager at Innovate Labs",
      image: "/stack-4.png",
    },
    {
      id: 6,
      name: "Jessica Parker",
      designation: "Head of Marketing at Creative Minds",
      image: "/stack-6.png",
    },
  ]

export function ToolTip() {
  return (
    <div className="flex flex-row items-center justify-center m-[3.5rem] w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
