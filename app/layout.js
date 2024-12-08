import BottomBar from "./components/bottombar";
import "./globals.css";

export const metadata = {
  title: "My Session",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={"antialiased"}>
        {children}
        <BottomBar />
      </body>
    </html>
  );
}
