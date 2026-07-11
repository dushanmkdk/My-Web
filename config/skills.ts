import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: any;
}

export const skillsUnsorted: skillsInterface[] = [
  {
    name: "Delft3D",
    description:
      "Set up, calibrate, and run coupled hydro- and morphodynamic simulations for coastal and estuarine systems.",
    rating: 5,
    icon: Icons.delft3d,
  },
  {
    name: "ArcGIS Pro",
    description:
      "Analyze and visualize spatial and hydrographic survey data for coastal and infrastructure projects.",
    rating: 5,
    icon: Icons.arcgis,
  },
  {
    name: "HEC-HMS",
    description:
      "Model rainfall-runoff processes and flood hydrology for watershed and drainage studies.",
    rating: 5,
    icon: Icons.hechms,
  },
  {
    name: "AutoCAD",
    description:
      "Draft and detail civil engineering plans, sections, and construction drawings.",
    rating: 5,
    icon: Icons.autocad,
  },
  {
    name: "MATLAB",
    description:
      "Process, analyze, and visualize numerical model outputs and field and experimental data.",
    rating: 5,
    icon: Icons.matlab,
  },
  {
    name: "Microsoft Office",
    description:
      "Prepare technical reports, presentations, and project documentation.",
    rating: 5,
    icon: Icons.post,
  },
  {
    name: "MIKE",
    description:
      "Simulate wave propagation and harbor calmness for fishery harbor and port design projects.",
    rating: 3,
    icon: Icons.mike,
  },
  {
    name: "ANSYS Fluent",
    description:
      "Run CFD simulations, including wind loading studies on low-rise building structures.",
    rating: 4,
    icon: Icons.ansys,
  },
  {
    name: "Civil 3D",
    description:
      "Design site grading, roadways, and civil infrastructure with parametric 3D modeling.",
    rating: 4,
    icon: Icons.civil3d,
  },
  {
    name: "Python",
    description:
      "Automate model setup, data processing, and analysis workflows for research projects.",
    rating: 4,
    icon: Icons.python,
  },
  {
    name: "Revit",
    description:
      "Develop BIM models for building and infrastructure design coordination.",
    rating: 3,
    icon: Icons.revit,
  },
  {
    name: "Fortran",
    description:
      "Read and adapt legacy numerical modeling codebases used in engineering research.",
    rating: 3,
    icon: Icons.fortran,
  },
  {
    name: "Microsoft Project",
    description:
      "Plan and schedule construction and research project timelines.",
    rating: 3,
    icon: Icons.calendar,
  },
];

export const skills = skillsUnsorted
  .slice()
  .sort((a, b) => b.rating - a.rating);

export const featuredSkills = skills.slice(0, 6);
