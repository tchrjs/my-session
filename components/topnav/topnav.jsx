export default function TopNav({ children }) {
  return (
    <nav className="sticky top-0 w-full h-12 p-4 z-10 flex items-center justify-center">
      {children}
    </nav>
  );
}
