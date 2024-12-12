export default function manifest() {
  return {
    name: "My Session",
    short_name: "My Session",
    display: "standalone",
    background_color: "#212121",
    theme_color: "#f7f7f7",
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
