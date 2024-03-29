import { FaReact,FaSass } from "react-icons/fa";
import { SiTailwindcss, SiFirebase, SiMongodb } from "react-icons/si";

const projects1 = [
  {
    id: 1,
    title: "Tutoral.org",
    name: "tutoral",
    link:"https://www.tutoral.org",
    desc: "An online tutoring site aimed to connect parents and clients to in-home tutors in many subjects.",
    techUsed: [
      {
        id: 1,
        icon: <FaReact />,
        name: "React",
      },
      {
        id: 2,
        icon: <SiTailwindcss />,
        name: "Tailwind CSS",
      },
      {
        id: 3,
        icon: <SiFirebase />,
        name: "Firebase",
      },
    ],
  },
  {
    id: 2,
    title: "hiremepls",
    name: "hiremepls",
    link:"https://hiremepls-rsb9.onrender.com/",
    desc: "A forum where users can share and answer interview questions.",
    techUsed: [
      {
        id: 1,
        icon: <FaReact />,
        name: "React",
      },
      {
        id: 2,
        icon: <FaSass />,
        name: "Sass CSS",
      },
      {
        id: 3,
        icon:<SiMongodb/>,
        name: "MongoDB",
      },
      {
        id: 4,
        name: "Express.js",
      },
    ],
  },
];

export const projects = projects1;
