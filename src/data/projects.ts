import otmsimg from "./../../public/image.png";
import apolloimg from "./../../public/Pastedimage.png";
import electionimg from "./../../public/ElectionImg.png";
import ashwinimg from "./../../public/AshwinAI.png";
import nextgenimg from "./../../public/nextgen_health.png";

export const projects = [
  {
    id: 1,
    title: "OTMS",
    description: "OTMS (Organ Transplant Management System) is a healthcare platform that streamlines organ donation, allocation, and transplant workflows by connecting hospitals, coordinators, and regulatory authorities. It enables efficient waiting-list management, organ matching, and real-time tracking.",
    image: otmsimg,
    tech: ["React.js", "TypeScript", "Material UI", "TailwindCSS"],
    year: "2024",
    categories: ["React", "Healthcare"],
  },
  {
    id: 2,
    title: "Apollo NCD",
    description: "Apollo NCD (Non-Communicable Disease) is a patient-care platform that tracks, monitors, and manages chronic illnesses like diabetes and hypertension. Built for medical providers, it consolidates digital health profiles and provides care workflows to improve outcomes.",
    image: apolloimg,
    tech: ["React.js", "TypeScript", "Redux", "TailwindCSS"],
    year: "2025",
    categories: ["React", "Healthcare"],
  },
  {
    id: 3,
    title: "Election Management",
    description: "A centralized election administration console designed to manage voter rosters, process candidates, configure polling districts, and display live election progress statistics via a secure, real-time web portal.",
    image: electionimg,
    tech: ["React.js", "TypeScript", "Redux", "TailwindCSS", "REST APIs"],
    year: "2025",
    categories: ["React"],
  },
  {
    id: 4,
    title: "ASHWINI AI",
    description: "An AI-powered healthcare assistant enabling digital doctor-patient video consultations, real-time clinical note transcriptions, appointment booking, and diagnostic suggestions via machine learning models.",
    image: ashwinimg,
    tech: ["React.js", "Redux", "TypeScript", "TailwindCSS", "WebSocket"],
    year: "2026",
    categories: ["React", "AI", "Healthcare"],
  }
];
