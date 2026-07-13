import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ProjectInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  galleryImages?: string[];
}

export const Projects: ProjectInterface[] = [
  {
    id: "unf-delft3d-research",
    companyName: "Florida Barrier Island Hydro-Morphodynamic Modeling",
    type: "Professional",
    category: ["Coastal Engineering", "Numerical Modeling", "Research"],
    shortDescription:
      "Developing and calibrating a Delft3D numerical model to simulate hydro- and morphodynamic processes of a Florida barrier island under hurricane wave conditions, as part of ongoing Master's research at UNF.",
    techStack: ["Delft3D", "MATLAB", "Python"],
    startDate: new Date("2025-08-01"),
    endDate: new Date("2027-05-01"),
    companyLogoImg: "/projects/barrier-island.jpg",
    galleryImages: [
      "/projects/unf-delft3d-research/barrier_1.jpg",
      "/projects/unf-delft3d-research/barrier_2.jpg",
      "/projects/unf-delft3d-research/barrier_3.jpg",
      "/projects/unf-delft3d-research/barrier_4.png",
      "/projects/unf-delft3d-research/barrier_5.png",
    ],
    descriptionDetails: {
      paragraphs: [
        "As a Graduate Research Assistant at the University of North Florida, I develop and calibrate a Delft3D numerical model to simulate hydro- and morphodynamic processes of a Florida barrier island under hurricane wave conditions.",
        "MATLAB and Python are used throughout for model setup, data processing, and visualization of simulation results, supporting research on storm event impacts and climate change effects on coastal and estuarine systems.",
      ],
      bullets: [
        "Developed and calibrated a Delft3D numerical model for a Florida barrier island under hurricane wave conditions.",
        "Used MATLAB and Python for model setup, data processing, analysis, and visualization of simulation results.",
        "Presented ongoing research at the 2026 UF Water Institute Symposium; scheduled for presentation at ICCE 2026.",
      ],
    },
  },
  {
    id: "lakbi-3d-physical-modelling",
    companyName:
      "3D Physical Modelling of Breakwaters – Lakbi Fishery Harbour & Hadbin Fish Landing Center, Oman",
    type: "Professional",
    category: ["Coastal Engineering", "Research"],
    shortDescription:
      "3D physical models built within a 30m × 40m controlled wave basin to analyze the stability and performance of breakwater sections for the Lakbi Fishery Harbour and Hadbin Fish Landing Center in Oman, under multiple return-period wave conditions.",
    techStack: [],
    startDate: new Date("2024-12-01"),
    endDate: new Date("2025-01-01"),
    companyLogoImg: "/projects/physical-modelling-3d.jpg",
    galleryImages: Array.from(
      { length: 10 },
      (_, i) => `/projects/lakbi-3d-physical-modelling/3d_${101 + i}.jpg`
    ),
    descriptionDetails: {
      paragraphs: [
        "Associated with Lanka Hydraulic Institute, 3D physical models were constructed to analyze the stability and performance of specific breakwater sections for the Lakbi Fishery Harbour and Hadbin Fish Landing Center projects in Oman. Bathymetry and structures were built within a 30m × 40m controlled wave basin to simulate real-world wave conditions.",
        "Comprehensive wave loading tests were conducted for multiple return periods — 1-Year, 5-Year, 10-Year, 50-Year, 100-Year, and an Overload Condition (High Water Level and Low Water Level) — with waves generated from multiple directions. Post-test analysis focused on rock and armour unit displacements, ensuring compliance with allowable damage levels for structural integrity. Findings from these studies played a critical role in optimizing breakwater designs for enhanced durability and resilience against varying wave conditions.",
      ],
      bullets: [
        "Built 3D physical models within a 30m × 40m controlled wave basin for the Lakbi Fishery Harbour and Hadbin Fish Landing Center, Oman.",
        "Conducted wave loading tests across six return-period and overload scenarios, with waves generated from multiple directions.",
        "Analyzed rock and armour unit displacements against allowable damage levels to optimize breakwater designs.",
      ],
    },
  },
  {
    id: "lakbi-2d-physical-modelling",
    companyName:
      "2D Physical Modelling of Breakwaters – Lakbi, Hadbin & Haramel Fishery Harbours, Oman",
    type: "Professional",
    category: ["Coastal Engineering", "Research"],
    shortDescription:
      "2D flume studies assessing the stability and performance of breakwater sections for the Lakbi, Hadbin, and Haramel fishery harbours in Oman, using Core-Loc, Accropode, and rock armour units under multiple return-period wave conditions.",
    techStack: [],
    startDate: new Date("2024-10-01"),
    endDate: new Date("2024-11-01"),
    companyLogoImg: "/projects/physical-modelling-2d.jpg",
    galleryImages: Array.from(
      { length: 14 },
      (_, i) => `/projects/lakbi-2d-physical-modelling/photo_${i + 1}.jpg`
    ),
    descriptionDetails: {
      paragraphs: [
        "As part of Design and Build Services for the development of existing fishery harbours in Oman — Lakbi Fishery Harbour, Hadbin Fish Landing Center, and Haramel Fishery Harbour — 2D physical modelling studies were conducted to assess the stability and performance of specific breakwater sections. Sections were tested in a 0.8m-wide, 30m-long flume under various return periods, including 1-Year, 5-Year, 10-Year, 50-Year, 100-Year, and an Overload condition, considering both high and low water level scenarios.",
        "The studies utilized Core-Loc, Accropode armour units, and rock materials, with wave gauges strategically placed to measure wave heights. Rocking movements and structural damage were meticulously analyzed against allowable damage thresholds to ensure the breakwaters' resilience under design conditions.",
      ],
      bullets: [
        "Tested breakwater sections for three Oman fishery harbours in a 0.8m-wide, 30m-long flume across six return-period and overload scenarios.",
        "Used Core-Loc, Accropode armour units, and rock materials, with wave gauges placed to measure wave heights.",
        "Analyzed rocking movements and structural damage against allowable damage thresholds.",
      ],
    },
  },
  {
    id: "bathymetric-survey",
    companyName: "Bathymetric Survey - Thalayadi, Sri Lanka",
    type: "Professional",
    category: ["Coastal Engineering", "Environmental Engineering"],
    shortDescription:
      "Two-day nearshore bathymetric survey conducted by Lanka Hydraulic Institute for the Jaffna and Kilinochchi Water Supply and Sanitation Project.",
    techStack: [],
    startDate: new Date("2025-04-30"),
    endDate: new Date("2025-05-02"),
    companyLogoImg: "/projects/bathymetric-survey.jpg",
    galleryImages: Array.from(
      { length: 6 },
      (_, i) => `/projects/bathymetric-survey-gallery/photo_${i + 1}.jpg`
    ),
    descriptionDetails: {
      paragraphs: [
        "I took part in a two-day bathymetry survey from 30th April to 2nd May, conducted by Lanka Hydraulic Institute Ltd. The survey covered a 100m x 900m nearshore strip adjacent to the Reverse Osmosis Plant at Thalayadi, Sri Lanka, as part of the Jaffna and Kilinochchi Water Supply and Sanitation Project.",
        "Working alongside a dedicated survey team, we utilized a Single Beam Echo Sounder (600m max depth sensitivity) for depth measurements, a DGPS - TRIMBLE for accurate positioning of key points, SonarWiz software for data digitization and processing, and a Tide Pole, Auto level, and Surveying Staff for tide measurement and level transfer from benchmark.",
      ],
      bullets: [
        "Surveyed a 100m x 900m nearshore strip using a Single Beam Echo Sounder and DGPS - TRIMBLE positioning.",
        "Processed and digitized survey data using SonarWiz software.",
        "Measured tide levels and transferred levels from benchmark using a Tide Pole and Auto level.",
      ],
    },
  },
  {
    id: "wind-loading-cfd",
    companyName: "Wind Loading on Gable-Roof, Low-Rise Buildings (CFD Study)",
    type: "Personal",
    category: ["Structural Engineering", "Numerical Modeling", "Research"],
    shortDescription:
      "Numerical investigation of wind loading on gable-roof, low-rise buildings using ANSYS Fluent CFD simulations. Won the Best Scientific Paper award at the special session on protective structure designs, ICSBE 2024.",
    techStack: ["ANSYS Fluent"],
    startDate: new Date("2023-08-01"),
    endDate: new Date("2024-07-01"),
    companyLogoImg: "/projects/wind-loading-cfd-gallery/photo_2.jpg",
    galleryImages: Array.from(
      { length: 2 },
      (_, i) => `/projects/wind-loading-cfd-gallery/photo_${i + 1}.jpg`
    ),
    descriptionDetails: {
      paragraphs: [
        "This undergraduate research project investigated wind loading on gable-roof, low-rise buildings through CFD simulations in ANSYS Fluent.",
        "The work was recognized with the Best Scientific Paper award at the special session on protective structure designs, ICSBE 2024, and published in Lecture Notes in Civil Engineering, Vol. 652 (Springer Nature).",
      ],
      bullets: [
        "Conducted CFD simulations in ANSYS Fluent to investigate wind loading on gable-roof, low-rise buildings.",
        "Won the Best Scientific Paper award, special session on protective structure designs, ICSBE 2024 Conference.",
        "Published in Lecture Notes in Civil Engineering, Vol. 652 (Springer Nature), DOI: 10.1007/978-981-96-8301-7_21.",
      ],
    },
  },
];

export const featuredProjects = Projects.slice(0, 3);
