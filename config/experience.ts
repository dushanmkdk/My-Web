import { ValidSkills } from "./constants";

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
  coverImage?: string;
  coverImagePosition?: string;
  images?: string[];
}

export const experiences: ExperienceInterface[] = [
  {
    id: "unf-gra",
    position: "Graduate Research Assistant",
    company: "University of North Florida",
    location: "Jacksonville, FL",
    startDate: new Date("2025-08-01"),
    endDate: "Present",
    description: [
      "Develop and calibrate a Delft3D numerical model to simulate hydro- and morphodynamic processes of a Florida barrier island under hurricane wave conditions.",
      "Utilize MATLAB and Python for model setup, data processing, analysis, and visualization of simulation results.",
    ],
    achievements: [
      "Developed and calibrated a Delft3D numerical model to simulate hydro- and morphodynamic processes of a Florida barrier island under hurricane wave conditions.",
      "Utilized MATLAB and Python for model setup, data processing, analysis, and visualization of simulation results.",
      "Presented ongoing research at the 2026 UF Water Institute Symposium and ICCE 2026.",
    ],
    skills: ["Delft3D", "MATLAB", "Python"],
    companyUrl: "https://www.unf.edu",
    coverImage: "/experience/research-assistantship.jpg",
  },
  {
    id: "lhi",
    position: "Research Engineer (Coastal and Water Resources)",
    company: "Lanka Hydraulic Institute Ltd (LHI)",
    location: "Colombo, Sri Lanka",
    startDate: new Date("2024-10-01"),
    endDate: new Date("2025-08-01"),
    description: [
      "Contributed to three major fishery harbor development projects in Oman (Lakbi, Hadbin, Haramel), performing 2D flume and 3D basin physical modeling tests.",
      "Conducted numerical simulations using MIKE to evaluate wave propagation and harbor calmness.",
      "Assisted in geotechnical investigations and hydrographic surveys for port and coastal infrastructure projects, including ASYAD Drydock at Duqm Port.",
    ],
    achievements: [
      "Contributed to three major fishery harbor development projects in Oman (Lakbi, Hadbin, Haramel), performing 2D flume and 3D basin physical modeling tests.",
      "Conducted numerical simulations using MIKE to evaluate wave propagation and harbor calmness.",
      "Assisted in geotechnical investigations and hydrographic surveys for port and coastal infrastructure projects, including ASYAD Drydock at Duqm Port.",
      "Prepared detailed technical reports and presented findings during client coordination meetings.",
    ],
    skills: ["MIKE", "AutoCAD", "ArcGIS Pro"],
    coverImage: "/experience/lanka.jpg",
    images: [
      "/experience/lhi-basin-model.jpg",
      "/experience/lhi-data-monitoring.jpg",
    ],
  },
  {
    id: "maga",
    position: "Civil Engineering Intern",
    company: "Maga Engineering (Pvt) Ltd",
    location: "Colombo, Sri Lanka",
    startDate: new Date("2023-01-01"),
    endDate: new Date("2023-05-01"),
    description: [
      "Developed strong technical skills in project planning, site inspection, and construction methodologies while developing proficiency in AutoCAD, Civil3D, Revit, and Microsoft Project.",
      "Effectively supervised workers to ensure on-site safety, productivity, and compliance with client requirements.",
    ],
    achievements: [
      "Developed strong technical skills in project planning, site inspection, and construction methodologies while developing proficiency in AutoCAD, Civil3D, Revit, and Microsoft Project.",
      "Effectively supervised workers to ensure on-site safety, productivity, and compliance with client requirements.",
    ],
    skills: ["AutoCAD", "Civil 3D", "Revit"],
    coverImage: "/experience/maga-site.jpg",
    coverImagePosition: "center 30%",
  },
];
