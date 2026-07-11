import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

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
  pagesInfoArr: PagesInfoInterface[];
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
    pagesInfoArr: [
      {
        title: "Model Development",
        description:
          "Setting up and calibrating a coupled hydrodynamic-morphodynamic Delft3D model for a Florida barrier island, driven by storm and hurricane wave conditions.",
        imgArr: ["/projects/barrier-island.jpg"],
      },
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
      "3D Physical Modelling for Breakwater Design - Lakbi Fishery Harbour, Oman",
    type: "Professional",
    category: ["Coastal Engineering", "Research"],
    shortDescription:
      "Constructed a 1:63.23 scale 3D physical model in a controlled basin to analyze the stability and performance of the designed breakwater under multiple return-period wave conditions.",
    techStack: [],
    startDate: new Date("2024-12-01"),
    endDate: new Date("2025-01-01"),
    companyLogoImg: "/projects/physical-modelling-3d.jpg",
    pagesInfoArr: [
      {
        title: "3D Basin Model Testing",
        description:
          "Basin-scale physical model of a breakwater section tested under multiple return-period wave conditions to assess rock displacement and structural integrity.",
        imgArr: ["/projects/physical-modelling-3d.jpg"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Associated with Lanka Hydraulic Institute, a 3D physical model was constructed to analyze the stability and performance of a specific section of the designed breakwater. The bathymetry and model was built at a 1:63.23 scale within a controlled basin environment to simulate real-world wave conditions.",
        "Comprehensive wave loading tests were conducted for multiple return periods: 1-Year, 5-Year, 10-Year, 50-Year, 100-Year, and an Overload Condition (High Water Level and Low Water Level). Waves were generated through two directions, 90E and 145SE. Post-test analysis focused on rock displacements, ensuring compliance with allowable damage levels for structural integrity. The findings from this study played a critical role in optimizing the breakwater design for enhanced durability and resilience against varying wave conditions.",
      ],
      bullets: [
        "Built a 1:63.23 scale 3D basin model to test breakwater stability and performance.",
        "Conducted wave loading tests for 1, 5, 10, 50, and 100-year return periods plus an overload condition, from two wave directions (90E and 145SE).",
        "Analyzed rock displacements against allowable damage levels to optimize the breakwater design.",
      ],
    },
  },
  {
    id: "lakbi-2d-physical-modelling",
    companyName:
      "2D Physical Modelling for Breakwater Design – Lakbi Fishery Harbour, Oman",
    type: "Professional",
    category: ["Coastal Engineering", "Research"],
    shortDescription:
      "Conducted a 1:31.83 scale 2D flume study to assess the stability and performance of a breakwater section using Core-Loc armour units and rock materials under multiple return-period wave conditions.",
    techStack: [],
    startDate: new Date("2024-10-01"),
    endDate: new Date("2024-11-01"),
    companyLogoImg: "/projects/physical-modelling-2d.jpg",
    pagesInfoArr: [
      {
        title: "2D Flume Model Testing",
        description:
          "Flume-scale physical model of a breakwater section tested under multiple return-period wave conditions using Core-Loc armour units and rock materials.",
        imgArr: ["/projects/physical-modelling-2d.jpg"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "As part of the Design and Build Services for the Development of the Existing Lakbi Fishery Harbour in Oman, a 2D physical modelling study was conducted to assess the stability and performance of a specific breakwater section. The breakwater section was scaled down to 1:31.83 and tested in a 0.8m-wide flume under various return periods, including 1-YRP, 5-YRP, 10-YRP, 50-YRP, 100-YRP, and an Overload condition, considering both high water level and low water level scenarios.",
        "The study utilized Core-Loc armour units and rock materials, with wave gauges strategically placed to measure wave heights. Rocking movements and structural damage were meticulously analyzed against allowable damage thresholds to ensure the breakwater's resilience under different wave conditions.",
      ],
      bullets: [
        "Scaled a breakwater section to 1:31.83 and tested it in a 0.8m-wide flume across six return-period and overload scenarios.",
        "Used Core-Loc armour units and rock materials, with wave gauges placed to measure wave heights.",
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
    pagesInfoArr: [
      {
        title: "Nearshore Survey",
        description:
          "Hydrographic survey of a 100m x 900m nearshore strip adjacent to the Reverse Osmosis Plant at Thalayadi, Sri Lanka.",
        imgArr: ["/projects/bathymetric-survey.jpg"],
      },
    ],
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
    companyLogoImg: "/projects/wind-loading-paper.jpg",
    pagesInfoArr: [
      {
        title: "Published Paper",
        description:
          "Numerical Investigation of the Effects of Boundary Walls on the Wind Loading of a Gable Roof, Low-Rise Building — published in Lecture Notes in Civil Engineering, Vol. 652 (Springer Nature).",
        imgArr: ["/projects/wind-loading-paper.jpg"],
      },
      {
        title: "CFD Simulation",
        description:
          "Simulated wind pressure distribution on gable-roof low-rise buildings using ANSYS Fluent to inform structural design loads.",
        imgArr: ["/projects/wind-loading-cfd.svg"],
      },
    ],
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
