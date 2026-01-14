import {
  SiAdobexd,
  SiPython,
  SiReact,
  SiAmazonaws,
  SiJavascript,
  SiTableau,
  SiDocker,
  SiMysql,
} from "react-icons/si";
import {
  FaBrain,
  FaChartBar,
  FaDatabase,
  FaCode,
  FaServer,
  FaRobot,
  FaMobileAlt,
  FaTools,
} from "react-icons/fa";

const data = [
  {
    id: 1,
    icon: SiPython,
    title: "Full Stack Web Development",
    skills: ["HTML", "CSS", "JavaScript", "React", "Django", "Rest APIs"], // [cite: 12]
  },
  {
    id: 2,
    icon: FaBrain,
    title: "Software Engineering & Programming",
    skills: [
      "Python",
      "Java",
      "C++",
      "OOP",
      "System Design",
      " Design Patterns",
      "Git",
      "GitHub",
    ], // [cite: 14]
  },
  {
    id: 3,
    icon: SiReact,
    title: "Algorithms & Data Structure",
    skills: [
      "Trees",
      "Graphs",
      "Heaps",
      "Sorting",
      "Recursion",
      "Dynamic Programming",
      "Problem Solving",
    ], // [cite: 16, 55]
  },
  {
    id: 4,
    icon: FaServer,
    title: "Machine Learning & AI",
    skills: [
      "Deep Learning",
      "Feature Engineering",
      "EDA",
      "Model Evaluation",
      "CNN",
      "RNN",
      "LSTM",
      "GANs",
      "Transfer Learning",
      "BERT",
      "GPT",
      " Autoencoders",
    ], // [cite: 16, 32, 41]
  },
  {
    id: 5,
    icon: SiPython,
    title: "Data Science & Analytics",
    skills: [
      "Power BI",
      "Statistical Testing",
      "Hypothesis Testing",
      " Regression Analysis",
      "  KPI Tracking",
      "SAP Tools",
    ], // [cite: 18, 92]
  },
  {
    id: 6,
    icon: FaChartBar,
    title: "Data Engineering",
    skills: [
      "SQL",
      "PostgreSQL",
      " MySQL",
      "Snowflake Schema",
      "Google BigQuery",
      "ETL",
    ], // [cite: 15, 17]
  },
];

export default data;
