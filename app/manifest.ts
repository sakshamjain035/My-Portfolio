import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Saksham Jain — AI Digital Marketing & Growth Architect",
    short_name: "Saksham Jain",
    description:
      "Official portfolio of Saksham Jain. Specializing in AI-driven Digital Marketing, Predictive Campaign Optimization, Programmatic Lead Generation, and Interactive WebGL Brand Experiences.",
    start_url: "/",
    display: "standalone",
    background_color: "#050711",
    theme_color: "#06b6d4",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
