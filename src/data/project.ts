export type ProjectType =
  | "Full Stack"
  | "API Integration"
  | "Frontend"
  | "Backend";

export interface Project {
  title: string;
  type: ProjectType;
  tagline: string;
  description: string;
  image: string;
  stack: string[];
  liveUrl?: string;
  githubUrl?: string;
  impact: string;
}
export const projects: Project[] = [
  {
    title: "API Integration System",
    type: "API Integration",
    tagline: "Secure third-party API integration",
    description:
      "APIs with robust error handling, retries, and validation to ensure reliable transactions.",
    image: "/project-api.png",
    stack: ["React", "TypeScript", "REST APIs", "Node.js"],
    liveUrl: "https://vercel-sooty-alpha.vercel.app/",
    githubUrl: "#",
    impact:
      "Improved reliability of external integrations and reduced transaction failures.",
  },

  {
    title: "Advanced React Dashboard",
    type: "Frontend",
    tagline: "High-performance data-driven UI",
    description:
      "Built a complex React dashboard featuring reusable components, client-side caching, and optimized rendering.",
    image: "/project2.png",
    stack: ["React", "TypeScript", "Bootstrap", "Framer Motion"],
    liveUrl: "https://virtual-h.vercel.app/",
    githubUrl: "#",
    impact:
      "Delivered a responsive, intuitive interface with improved user engagement.",
  },

  {
    title: "Backend Service & Payment Processing",
    type: "Backend",
    tagline: "Scalable API service",
    description:
      "Developed a backend API service with authentication, validation, and structured error handling for production use.",
    image: "/project-backend.png",
    stack: ["Node.js", "TypeScript", "PostgreSQL", "REST"],
    liveUrl: "https://virtual-haven.vercel.app/",
    githubUrl: "#",
    impact: "Provided a stable foundation for frontend and mobile clients.",
  },
];
