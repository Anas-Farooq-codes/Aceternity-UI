"use client";
import React from "react";
import { LayoutGrid } from "./Ui/LayoutGrid";

export function LayoutGridDemo() {
  return (
    <section id="gallery" className="h-screen py-20 w-full">
      <div>
      <h1 className='heading text-white mb-16'>Tech
      <span className='text-purple'> Domains</span>
      </h1>
      </div>
      <LayoutGrid cards={cards} />
    </section>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
      Robotics Engineering
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Robotics Engineering blends mechanical, electrical, and software engineering to design and develop robots that perform complex tasks. It enables the creation of intelligent machines that enhance productivity and safety in various industries.


      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Backend Development Excellence
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        
Backend Development focuses on building robust server-side applications that efficiently manage data and ensure secure communication. It involves mastery of server technologies and database management to deliver seamless user experiences.
      </p>
    </div>
  );
};

const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
      Integrated Circuit Design 
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      It involves the process of designing integrated circuits for various applications, including digital, analog, and mixed-signal circuits.
      </p>
    </div>
  );
};

const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Mastering Git & Version Control
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Understand how to efficiently manage code and collaborate with others using Git, GitHub, and other version control tools.
      </p>
    </div>
  );
};

const SkeletonFive = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        JavaScript Frameworks Power
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Explore popular JavaScript frameworks like React, Vue, and Angular to build dynamic, feature-rich web applications.
      </p>
    </div>
  );
};

const SkeletonSix = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
      Microchip Design
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Chip development is essential for powering modern technology, driving innovations in computing performance and energy efficiency. As devices evolve, advanced chips will enable the next wave of technological breakthroughs.
      </p>
    </div>
  );
};

const SkeletonSeven = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Responsive Design Mastery
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Design websites that adapt beautifully to any device, ensuring a great user experience across screens of all sizes.
      </p>
    </div>
  );
};

const SkeletonEight = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
      Game Development 
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Game development combines storytelling, art, and technology to create immersive experiences. It transforms imaginative ideas into interactive worlds that engage and entertain players.
      </p>
    </div>
  );
};

const SkeletonNine = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
      VR and AR Development
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
     

      VR and AR development revolutionizes how we interact with digital content by blending the physical and virtual worlds. These technologies create immersive experiences that enhance gaming, education, and more.
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-1",
    thumbnail: "/project-1.jpg",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: "/project-2.jpg",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: "/project-3.jpg",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-1",
    thumbnail: "/project-4.jpg",
  },
  {
    id: 5,
    content: <SkeletonFive />,
    className: "md:col-span-1",
    thumbnail: "/project-7.jpg",
  },
  {
    id: 6,
    content: <SkeletonSix />,
    className: "md:col-span-1",
    thumbnail: "/project-6.jpg",
  },
  {
    id: 7,
    content: <SkeletonSeven />,
    className: "md:col-span-1",
    thumbnail: "/project-5.jpg",
  },
  {
    id: 8,
    content: <SkeletonEight />,
    className: "md:col-span-1",
    thumbnail: "/project-8.jpg",
  },
  {
    id: 9,
    content: <SkeletonNine />,
    className: "md:col-span-1",
    thumbnail: "/project-9.jpg",
  },
];

export default LayoutGridDemo;