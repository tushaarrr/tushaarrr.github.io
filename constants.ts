import { ExperienceItem, ProjectItem, SkillCategory, EducationItem } from './types';

export const SOCIAL_LINKS = {
  email: "tusharsharma25214@gmail.com",
  linkedin: "https://linkedin.com/in/tusharshandilya0421",
  portfolio: "https://tusharml.vercel.app/"
};

export const EDUCATION_DATA: EducationItem[] = [
  {
    institution: "Douglas College",
    degree: "Post-Baccalaureate Degree in Computer Information Systems (Data Analytics)",
    period: "2023 - 2025",
    location: "New Westminster, Canada"
  },
  {
    institution: "Jaipur Engineering College and Research Center University",
    degree: "Bachelor of Computer Application",
    period: "2019 - 2022",
    location: "Jaipur, India"
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: "cerebramha",
    company: "Cerebramha (AI-Powered Medical Diagnostic Tool)",
    role: "Co-Founder – Data Scientist",
    period: "03/2025 – Present",
    location: "Jaipur, India",
    description: [
      "Co-founded healthcare analytics startup (Pvt Ltd, pre-seed): Building cognitive health assessment platform combining data analytics and machine learning. Leading technical development and collaborating with healthcare advisors.",
      "Performed medical data analysis and modeling: Conducted exploratory analysis on medical imaging and clinical data, performed feature engineering and statistical analysis to identify health patterns.",
      "Built ML models and explainability features: Developed experimental models achieving 78% validation accuracy during internal testing. Created visualization dashboards for stakeholder demonstrations and investor presentations.",
      "Selected for Campus Fund’s national startup program: Recognized among top student-led startups nationwide based on problem-solution fit and execution approach."
    ],
    techStack: ["Machine Learning", "Python", "Medical Imaging", "Data Analytics", "Statistical Analysis"]
  },
  {
    id: "moldavite",
    company: "Moldavite Business Booster",
    role: "Data Analytics & Science",
    period: "06/2025 – Present",
    location: "Vancouver, Canada",
    description: [
      "Built automated competitor data collection pipeline: Developed web scraping workflows using Python, Playwright, and APIs to extract promotional data from 12+ competitor websites, processing 500+ weekly data points.",
      "Performed data cleaning and competitive analytics: Applied data validation and LLM-based extraction to standardize datasets, conducted SQL-based pricing analysis, delivering insights to support pricing strategy.",
      "Created automated business intelligence reporting: Built scheduled pipelines using N8N, SerpAPI, and OCR to generate weekly competitor intelligence reports and dashboards for business stakeholders."
    ],
    techStack: ["Python", "SQL", "Playwright", "OpenAI API", "N8N", "SerpAPI", "GCP"]
  },
  {
    id: "celebal",
    company: "Celebal Technologies",
    role: "Data Science Intern",
    period: "06/2025 – 08/2025",
    location: "Jaipur, India",
    description: [
      "Conducted data analysis on business datasets: Performed exploratory analysis and data quality assessments on 6+ datasets (10K-100K records), improving completeness from 82% to 94% through systematic cleaning.",
      "Built RAG-based chatbot system: Developed RAG pipeline using Python, OpenAI embeddings, and vector search, implementing semantic retrieval with improved response relevance.",
      "Evaluated performance and documented AI workflows: Performed A/B testing on retrieval strategies, documented agentic AI patterns using LangChain for technical recommendations."
    ],
    techStack: ["Python", "SQL", "RAG", "OpenAI API", "LangChain", "Vector Search"]
  }
];

export const PROJECT_DATA: ProjectItem[] = [
  {
    id: "voice-agent",
    title: "AI Conversational Intelligence System",
    tech: ["Python", "Twilio", "GPT-4o", "SpaCy", "Whisper STT"],
    description: [
      "Built a real-time voice agent using Python, Twilio Media Streams and GPT-4o, handling 300 simulated calls.",
      "Developed intent detection with spaCy and keyword scoring across 8 categories.",
      "Implemented sentiment-aware routing using Whisper STT and lightweight NLP pipelines."
    ],
    stats: "300+ Calls Handled"
  },
  {
    id: "firesight",
    title: "FireSight",
    tech: ["Python", "FastAPI", "XGBoost", "Next.js", "OpenAI"],
    description: [
      "Built a wildfire classifier on global data (1982–2014) achieving 71% accuracy.",
      "Integrated chatbot + live news using OpenAI and GNews APIs.",
      "Designed a dynamic dashboard with maps, charts, and real-time prediction flow."
    ],
    stats: "71% Accuracy"
  },
  {
    id: "hospitality-analytics",
    title: "Hospitality Revenue and Booking Analysis",
    tech: ["Power BI", "DAX", "MS Excel"],
    description: [
      "Analyzed 132,000+ bookings representing $1.69 billion in total revenue.",
      "Designed dynamic dashboards and KPIs, providing actionable insights for business and financial decision-making.",
      "Tracked 70.1% revenue realization, identifying key platforms and business bookings generating over $0.5 billion."
    ],
    stats: "$1.69B Revenue",
    link: "https://github.com/tushaarrr/Hospitality-Analytics"
  }
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    category: "AI & Machine Learning",
    skills: [
      { name: "TensorFlow", icon: "tensorflow" },
      { name: "OpenAI", icon: "openai" },
      { name: "Hugging Face", icon: "huggingface" },
      { name: "LangChain", icon: "langchain" },
      { name: "Scikit-learn", icon: "scikitlearn" },
      { name: "Pandas", icon: "pandas" },
      { name: "NumPy", icon: "numpy" },
      { name: "Keras", icon: "keras" },
      { name: "Python", icon: "python" }
    ]
  },
  {
    category: "Data Analytics & BI",
    skills: [
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "Google Cloud", icon: "googlecloud" },
      { name: "N8N", icon: "n8n" },
      { name: "Power BI", icon: "powerbi" },
      { name: "Tableau", icon: "tableau" },
      { name: "Playwright", icon: "playwright" }
    ]
  },
  {
    category: "Tools & Frameworks",
    skills: [
      { name: "Cursor", icon: "cursor" },
      { name: "Lovable", icon: "https://avatars.githubusercontent.com/u/155395764?s=200&v=4" },
      { name: "FastAPI", icon: "fastapi" },
      { name: "Next.js", icon: "nextdotjs" },
      { name: "React", icon: "react" },
      { name: "Tailwind", icon: "tailwindcss" },
      { name: "Git", icon: "git" }
    ]
  }
];