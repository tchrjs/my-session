import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "@/tailwind.config";

const fullConfig = resolveConfig(tailwindConfig);

export default function manifest() {
  const bg_color = fullConfig.theme.colors.background;

  return {
    name: "My Session",
    short_name: "My Session",
    display: "standalone",
    background_color: bg_color,
    theme_color: bg_color,
    icons: [
      {
        src: "/favicon/web-app-manifest-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/favicon/web-app-manifest-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
