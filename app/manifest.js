export default function manifest() {
  return {
    name: "My Session",
    short_name: "My Session",
    display: "standalone",
    background_color: "bg-background",
    theme_color: "text-foreground",
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
