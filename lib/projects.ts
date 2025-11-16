export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  shortDescription: string;
  image: string;
  technologies: string[];
  link: string;
  featured: boolean;
  details?: string;
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "gyaan-shaala",
    title: "Gyaan Shaala",
    shortDescription: "A comprehensive educational platform with payment integration",
    description:
      "Gyaan Shaala is a full-stack educational platform built with Node.js and Express that enables instructors to create and manage courses with integrated payment processing. The platform features JWT authentication, secure file uploads via Cloudinary, and Razorpay payment integration for monetization.",
    image: "/gyaan-shaala.png",
    technologies: ["Node.js", "Express", "MongoDB", "JWT", "Cloudinary", "Razorpay"],
    link: "https://github.com/Sharyupatil01/GyaanShaala",
    featured: true,
    details:
      "Built a scalable backend architecture for handling course management, user authentication, and payment processing. Implemented secure JWT-based authentication, file upload system, and integrated Razorpay for seamless payments.",
  },
  {
    id: "2",
    slug: "sentiment-analysis",
    title: "Sentiment Analysis - Movie Reviews",
    shortDescription: "NLP-powered sentiment classification for movie reviews",
    description:
      "A machine learning project leveraging Natural Language Processing and Logistic Regression to classify sentiment in movie reviews. This project demonstrates data preprocessing, feature extraction, and model evaluation techniques.",
    image: "/sentiment-analysis.png",
    technologies: ["Python", "NLP", "Logistic Regression", "Scikit-learn", "Pandas"],
    link: "https://github.com/Sharyupatil01/Sentiment-Analysis-Movie-Review",
    featured: true,
    details:
      "Implemented sentiment classification using Logistic Regression with TF-IDF vectorization. Achieved 85%+ accuracy on movie review dataset with proper train-test split and cross-validation.",
  },
  {
    id: "3",
    slug: "fin-pilot",
    title: "FinPilot",
    shortDescription: "AI-powered financial advisor using RAG and LLMs",
    description:
      "FinPilot is an intelligent financial advisory application that combines React frontend with FastAPI backend and leverages LangChain for Retrieval-Augmented Generation (RAG) to provide personalized financial guidance.",
    image: "/fin-pilot.png",
    technologies: ["React", "Tailwind CSS", "FastAPI", "LangChain", "AI/ML"],
    link: "https://github.com/Sharyupatil01/finpilot-frontend",
    featured: true,
    details:
      "Developed a full-stack financial advisory platform with AI-powered recommendations. Integrated LangChain for RAG capabilities, built responsive UI with React and Tailwind CSS, and created robust FastAPI backend.",
  },
];

export const getFeaturedProjects = (): Project[] => {
  return projects.filter((project) => project.featured);
};

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find((project) => project.slug === slug);
};
