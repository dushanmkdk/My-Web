export interface ExtracurricularInterface {
  id: string;
  category: string;
  icon: "trophy" | "users";
  bullets: string[];
  images: string[];
}

export const extracurricular: ExtracurricularInterface[] = [
  {
    id: "sports",
    category: "Achievements in Sports",
    icon: "trophy",
    bullets: [
      "Asian under 12 Karate Silver Medalist in Kata category (2010).",
      "Sri Lankan under 12 Karate Champion in Kumite category (2009).",
      "Karate Black Belt – 1st Dan Grade.",
    ],
    images: [
      "/extracurricular/extra_5.jpg",
      "/extracurricular/extra_6.jpg",
      "/extracurricular/extra_7.jpg",
    ],
  },
  {
    id: "leadership",
    category: "Management and Leadership Skills",
    icon: "users",
    bullets: [
      "Director Board Member of Rotaract Club of Alumni of University of Moratuwa, Sri Lanka (Term 2023/24).",
      "Demonstrated ability to handle multiple projects efficiently while working collaboratively to meet deadlines.",
    ],
    images: [
      "/extracurricular/extra_1.jpg",
      "/extracurricular/extra_2.jpg",
      "/extracurricular/extra_3.jpg",
      "/extracurricular/extra_4.jpg",
    ],
  },
];
