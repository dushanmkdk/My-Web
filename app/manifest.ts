import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Dushan Kavishka | Coastal & Civil Engineer",
    short_name: "Dushan Kavishka",
    description:
      "Dushan Kavishka - Graduate Research Assistant in Coastal and Port Engineering at the University of North Florida.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "64x64",
        type: "image/png",
      },
      {
        src: "/favicon.ico",
        sizes: "64x64",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    categories: [
      "portfolio",
      "civil engineering",
      "coastal engineering",
      "research",
      "engineering",
    ],
    lang: "en",
    dir: "ltr",
    scope: "/",
  };
}
