export default function TopNav({ children }) {
  return (
    <nav className="overflow-hidden fixed top-0 w-full px-4 h-12 z-10 flex items-center justify-center border-b-[1px]">
      {children}
    </nav>
  );
}
