export interface EducationInterface {
  id: string;
  degree: string;
  institution: string;
  location: string;
  dateLabel: string;
  status: "in-progress" | "completed";
  gpaLabel: string;
  honors?: string;
  coursework: string[];
}

export const education: EducationInterface[] = [
  {
    id: "unf-ms",
    degree: "Master of Science in Coastal and Port Engineering",
    institution: "University of North Florida",
    location: "Jacksonville, FL",
    dateLabel: "Expected May 2027",
    status: "in-progress",
    gpaLabel: "Current GPA: 4.00 / 4.00",
    coursework: [
      "Computational Fluid Mechanics",
      "Floating Structures",
      "Coastal Structures",
      "Numerical Modeling",
      "Aquatic Chemical Processes",
    ],
  },
  {
    id: "uom-bs",
    degree: "Bachelor of Science in Civil Engineering (Honors)",
    institution: "University of Moratuwa",
    location: "Colombo, Sri Lanka",
    dateLabel: "Jul 2024",
    status: "completed",
    gpaLabel: "Overall GPA: 3.45 / 4.00 (Second Class Upper Division)",
    honors:
      "Washington Accord Accredited · Final Semester GPA 3.97 / 4.00 (Dean's List)",
    coursework: [
      "Fluid Mechanics",
      "Hydraulic Engineering",
      "Hydraulic Design",
      "Coastal and Port Engineering",
      "Environmental Engineering",
      "Surveying",
      "Bridge Engineering",
      "Geotechnical Engineering",
      "Construction Planning and Cost Estimation",
      "Irrigation Engineering",
      "Applied Statistics",
    ],
  },
];
