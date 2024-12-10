import BottomBar from "./components/bottombar";
import "./globals.css";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  // metadataBase: new URL(defaultUrl),
  title: "my session",
  description: "Generated by create next app",
  icons: {
    apple: [{ url: "/favicon/apple-touch-icon.png" }],
  },
  appleTouchIcon: "/favicon/apple-touch-icon.png",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
  },
};

export const viewport = {
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={"antialiased dark"}>
        {children}
        <BottomBar />
      </body>
    </html>
  );
}
