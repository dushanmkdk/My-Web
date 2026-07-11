export interface contributionsInterface {
  repo: string;
  contibutionDescription: string;
  repoOwner: string;
  link: string;
  image?: string;
}

export const contributionsUnsorted: contributionsInterface[] = [
  {
    repo: "Numerical Investigation of Wind Loading on Gable-Roof, Low-Rise Buildings",
    contibutionDescription:
      "Peer-reviewed publication on CFD-based wind loading analysis using ANSYS Fluent. Awarded Best Scientific Paper, special session on protective structure designs, ICSBE 2024.",
    repoOwner: "Springer Nature — Lecture Notes in Civil Engineering, Vol. 652",
    link: "https://doi.org/10.1007/978-981-96-8301-7_21",
    image: "/contributions/wind-loading-paper.jpg",
  },
  {
    repo: "ICCE26 - 39th International Conference on Coastal Engineering (ICCE 2026)",
    contibutionDescription:
      "Oral abstract presentation of ongoing Master's research on hydro- and morphodynamic modeling of a Florida barrier island under hurricane wave conditions.",
    repoOwner: "Oral Abstract Presentation",
    link: "https://www.linkedin.com/posts/dushan-kavishka_icce2026-coastalengineering-delft3d-ugcPost-7464017782301585409-uKFt/?utm_source=share&utm_medium=member_desktop&rcm=ACoAADdXRNABJE4F03JxNOA7RXWua0SSJH_Rtd0",
    image: "/contributions/icce2026.jpg",
  },
  {
    repo: "UF Water Institute Symposium 2026",
    contibutionDescription:
      "Oral abstract presentation on storm event analysis and climate change impacts on coastal and estuarine systems.",
    repoOwner: "Oral Abstract Presentation",
    link: "https://www.linkedin.com/posts/dushan-kavishka_ufwis26-uf-coastal-ugcPost-7432647522281488385-gqso/?utm_source=share&utm_medium=member_desktop&rcm=ACoAADdXRNABJE4F03JxNOA7RXWua0SSJH_Rtd0",
    image: "/contributions/uf-water-symposium.jpg",
  },
];

export const featuredContributions: contributionsInterface[] =
  contributionsUnsorted.slice(0, 3);
