import project1 from "../assets/s9.png";
import project2 from "../assets/s6.png";
import project3 from "../assets/s8.png";
import project4 from "../assets/s10.png";
import project5 from "../assets/s5.png";
import project6 from "../assets/s7.png";
import personImage from "../assets/team.jpg";

import {
  RiHtml5Line,
  RiCss3Line,
  RiJavascriptLine,
  RiReactjsLine,
  RiNodeTree,
} from "@remixicon/react";
import {
  RiDatabaseLine,
  RiCodeSSlashLine,
  RiGitBranchLine,
} from "@remixicon/react";

export const NAVIGATION_LINKS = [
  { label: "Gallery", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Domain", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const PROFILE = {
  name: "CYBERCRAFT 2k24",
  role: "8HR NATIONAL-LEVEL HACKATHON ",
  subheading:
    "Is Organised by the Dept. of CSE-Cyber Security in order to celebrate the National COMPUTER SECURITY DAY ",
};

export const PROJECTS = [
  {
    id: 1,
    title: "ACS college of Engineering",
    description:
      "ACS College of Engineering, an institution of academic excellence was established in the year 2009 with a cherished desire to serve the cause of humanity through education. This college is affiliated to VTU and has been approved by the All India Council of Technical Education, New Delhi.",
    imgSrc: project1,
  },
  {
    id: 2,
    title: "Hacker Team",
    description:
      "It is a set of students from Cyber security Dept. working on real-time projects. Develop new products and services , and improve existing ones , to help organization growth . ",
    imgSrc: project2,
  },
  {
    id: 3,
    title: "Fashion Team",
    description:
      "Style is one everlasting aspects that never changes in the quick-paced , continuously evolving world of fashion . It's the one thing that unites generations of people, it endures beyond fads and makes the lasting impression. ",
    imgSrc: project3,
  },
  {
    id: 4,
    title: "Football Team",
    description: "We learned all about LIFE with a ball at our feet",
    imgSrc: project4,
  },
  {
    id: 5,
    title: "Dance Team",
    description:
      "When you dance , your purpose is not to get to a certain place on the floor . It's the art to enjoy each and every step along the way .",
    imgSrc: project5,
  },
  {
    id: 6,
    title: "Kabbadi Team",
    description: "Be STRONGER than your EXCUSES",
    imgSrc: project6,
  },
];

export const SKILLS = [
  {
    name: "HTML5",
    icon: <RiHtml5Line className="text-orange-600" />,
  },
  {
    name: "CSS3",
    icon: <RiCss3Line className="text-blue-500" />,
  },
  {
    name: "JavaScript",
    icon: <RiJavascriptLine className="text-yellow-500" />,
  },
  {
    name: "React",
    icon: <RiReactjsLine className="text-blue-400" />,
  },
  {
    name: "Node.js",
    icon: <RiNodeTree className="text-green-500" />,
  },
  {
    name: "MongoDB",
    icon: <RiDatabaseLine className="text-green-600" />,
  },
  {
    name: "Tailwind CSS",
    icon: <RiCodeSSlashLine className="text-teal-400" />,
  },
  {
    name: "GraphQL",
    icon: <RiGitBranchLine className="text-pink-400" />,
  },
];

export const EXPERIENCES = [
  {
    yearRange: "- - - - -",
    role: "ACS College Of Engineering",
    description:
      "ACS College of Engineering, an institution of academic excellence was established in the year 2009 with a cherished desire to serve the cause of humanity through education. This college is affiliated to VTU and has been approved by the All India Council of Technical Education, New Delhi .",
  },
  {
    yearRange: "- - - - -",
    role: "Dept. Of CSE-Cyber Security",
    description:
      "Department of CSE-Cyber Security was started in the year 2022 . Cybersecurity students should possess a strong understanding of network protocols, operating systems, cryptography, security principles like confidentiality, integrity, and availability, as well as practical skills in areas like vulnerability scanning, penetration testing, incident response, malware analysis, scripting languages (like Python), and strong analytical and problem-solving abilities to identify and mitigate cyber threats effectively .",
  },
  {
    yearRange: "- - - - -",
    role: "Research & Development Club",
    description:
      "To stimulate practitioners and students to access research and to be educated consumers of scientific literature. To assist faculty in conducting research and develop their competencies in research methodologies.",
  },
  {
    yearRange: "- - - - -",
    role: "Cyber Craft 2 0 2 4",
    description:
      "Cyber craft Hackathon is a nationwide initiative to provide students a platform to solve some of pressing problems we face in our daily lives, and thus inculcate a culture of product innovation and a mindset of problem solving . The students would also have the opportunity to work on challenges faced within the private sector organizations and create world class solutions for some of the top companies in the world , thus helping the private sector hire the best minds from across the nation .",
  },
];

export const EDUCATION = [
  {
    id: 1,
    institution: "E-Commerce",
  },
  {
    id: 2,
    institution: "MERN Full Stack",
  },
  {
    id: 3,
    institution: "Web Development with AI",
  },
];

export const TESTIMONIAL = {
  name: "--",
  title: "HAPPY HACKING",
  quote:
    "The world can never own a man who has nothing .It was a greate experience taking part in Cyber-Craft team . We have planned so many up-coming EVENTs with the support of our Cyber Security Department HOD. Dr. Anitha S Ma'am . Who is our backbone to do great things and the freedom to discover our intrest  has made a remarkable change to our future .  ",
  image: personImage,
};
