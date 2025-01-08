export default function TopNav({ children }) {
  return (
    <nav className="overflow-hidden fixed top-0 w-full px-4 py-2 z-10 flex items-center justify-center border-b-[1px]">
      {children}
    </nav>
  );
}
