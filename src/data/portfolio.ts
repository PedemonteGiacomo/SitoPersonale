// Portfolio data - single source of truth for all content
export interface Experience {
  company: string;
  position: string;
  location: string;
  period: string;
  description: string;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  location: string;
  grade?: string;
}

export interface Project {
  title: string;
  description: string;
  link: string;
  githubLink?: string;
  chromeStoreLink?: string;
  tags: string[];
}

export interface Social {
  github: string;
  linkedin: string;
  email: string;
  phone?: string;
}

export interface PortfolioData {
  name: string;
  location: string;
  headline: string;
  experience: Experience[];
  education: Education[];
  toolbox: {
    languages: string[];
    markup: string[];
    frameworks: string[];
    platforms: string[];
  };
  projects: Project[];
  social: Social;
}

export const portfolioData: PortfolioData = {
  name: "Giacomo Pedemonte",
  location: "Genova, Italy",
  headline: "Cloud & Platform Software Engineer • Cloud/DevOps • Medical Imaging • Accessibility/AI",
  
  experience: [
    {
      company: "Esaote",
      position: "Cloud & Platform Software Engineer",
      location: "Genova, Italy",
      period: "Started Apr 3, 2024",
      description: "cloud-native platforms for advanced medical imaging; DevOps, observability, scalable architectures."
    },
    {
      company: "Ericsson",
      position: "Internship / Software Engineering",
      location: "Genova, Italy",
      period: "2 weeks",
      description: "short immersion in professional workflows and engineering practices (2 weeks)."
    }
  ],

  education: [
    {
      institution: "Università degli Studi di Genova",
      degree: "Master Degree in Software Engineering",
      period: "Sep 2022 – Dec 2024",
      location: "Genova, Italy",
      grade: "110/110 cum laude"
    },
    {
      institution: "Università degli Studi di Genova", 
      degree: "Bachelor Degree in Computer Science",
      period: "Sep 2019 – Sep 2022",
      location: "Genova, Italy",
      grade: "110/110"
    }
  ],

  toolbox: {
    languages: ["PHP", "TypeScript", "SQL", "Python", "Java", "JavaScript"],
    markup: ["HTML", "CSS", "XML", "Markdown", "JSON", "Sass"],
    frameworks: [".NET", "React", "Angular", "Vue.js", "Django", "Spring"],
    platforms: ["Docker", "Kubernetes", "AWS", "Azure"]
  },

  projects: [
    {
      title: "Distributed Computing on Distributed System",
      description: "Simulation and analysis of distributed computing systems with queueing theory",
      link: "https://github.com/PedemonteGiacomo/DistributedComputingProject",
      githubLink: "https://github.com/PedemonteGiacomo/DistributedComputingProject",
      tags: ["distributed systems", "simulation", "queueing"]
    },
    {
      title: "Parking Simulation System - IoT (Smart Parking)",
      description: "IoT-based smart parking system with computer vision and Arduino integration",
      link: "https://github.com/PedemonteGiacomo/SmartParking",
      githubLink: "https://github.com/PedemonteGiacomo/SmartParking",
      tags: ["iot", "computer vision", "arduino", "python"]
    },
    {
      title: "DevOps Project: Multi-Node Deployment & Automation",
      description: "Automated deployment and orchestration across multiple nodes using modern DevOps practices",
      link: "https://github.com/PedemonteGiacomo/VirtualizationAndCloudComputing",
      githubLink: "https://github.com/PedemonteGiacomo/VirtualizationAndCloudComputing",
      tags: ["devops", "automation", "ansible"]
    },
    {
      title: "Book Recommendation System",
      description: "Machine learning-powered book recommendation system with collaborative filtering",
      link: "https://github.com/PedemonteGiacomo/BookRecommendationSystem",
      githubLink: "https://github.com/PedemonteGiacomo/BookRecommendationSystem",
      tags: ["ml", "recommender", "data"]
    },
    {
      title: "AccessAI / ALTernAtIve (Chrome extension)",
      description: "Chrome extension for AI-powered accessibility improvements",
      link: "https://chromewebstore.google.com/detail/alternative/ichlflnjccjdghdlhgpdgeneikcbciac",
      githubLink: "https://github.com/PedemonteGiacomo/AccessAI/tree/master",
      chromeStoreLink: "https://chromewebstore.google.com/detail/alternative/ichlflnjccjdghdlhgpdgeneikcbciac",
      tags: ["accessibility", "ai", "browser-extension"]
    }
  ],

  social: {
    github: "https://github.com/PedemonteGiacomo",
    linkedin: "https://www.linkedin.com/in/giacomo-pedemonte-3983a6236/",
    email: "giacomopedemonte@libero.it",
    phone: "+393467939050"
  }
};

// Helper functions for filtering and searching
export const getUniqueProjectTags = () => {
  const allTags = portfolioData.projects.flatMap(project => project.tags);
  return [...new Set(allTags)].sort();
};

export const filterProjectsByTag = (tag: string) => {
  return portfolioData.projects.filter(project => 
    project.tags.includes(tag)
  );
};

export const searchProjects = (query: string) => {
  const lowercaseQuery = query.toLowerCase();
  return portfolioData.projects.filter(project =>
    project.title.toLowerCase().includes(lowercaseQuery) ||
    project.description.toLowerCase().includes(lowercaseQuery) ||
    project.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
};