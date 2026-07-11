import { ValidPages } from "./constants";

type PagesConfig = {
  [key in ValidPages]: {
    title: string;
    description: string;
    metadata: {
      title: string;
      description: string;
    };
    // featuredDescription: string;
  };
};

export const pagesConfig: PagesConfig = {
  home: {
    title: "Home",
    description: "Welcome to my portfolio website.",
    metadata: {
      title: "Home",
      description: "Dushan Kavishka's portfolio website.",
    },
  },
  skills: {
    title: "Skills",
    description:
      "Key engineering software, numerical modeling, and analysis skills.",
    metadata: {
      title: "Skills",
      description:
        "Dushan Kavishka's key skills in coastal, civil, and numerical engineering.",
    },
  },
  projects: {
    title: "Projects",
    description: "Research and academic engineering projects.",
    metadata: {
      title: "Projects",
      description:
        "Dushan Kavishka's research and academic projects in coastal and civil engineering.",
    },
  },
  contact: {
    title: "Contact",
    description: "Let's connect and explore collaborations.",
    metadata: {
      title: "Contact",
      description: "Contact Dushan Kavishka.",
    },
  },
  contributions: {
    title: "Contributions",
    description: "Publications, conference presentations, and awards.",
    metadata: {
      title: "Contributions",
      description:
        "Dushan Kavishka's publications, conference presentations, and academic contributions.",
    },
  },
  resume: {
    title: "Resume",
    description: "Dushan Kavishka's resume.",
    metadata: {
      title: "Resume",
      description: "Dushan Kavishka's resume.",
    },
  },
  blogs: {
    title: "Blogs",
    description: "Notes and write-ups.",
    metadata: {
      title: "Blogs",
      description: "Dushan Kavishka's blog.",
    },
  },
  experience: {
    title: "Experience",
    description: "Professional journey and career timeline.",
    metadata: {
      title: "Experience",
      description:
        "Dushan Kavishka's professional journey and experience timeline.",
    },
  },
};
