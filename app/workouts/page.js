import AddButton from "../components/addbutton";

export default function Page() {
  return (
    <div>
      {/* top bar */}
      <nav className="sticky top-0 w-full h-12 p-4 z-10 flex items-center justify-center">
        <div className="w-1/3 flex justify-start"></div>
        <div className="w-1/3 flex justify-center">Workouts</div>
        <div className="w-1/3 flex justify-end">
          <AddButton />
        </div>
      </nav>
      <main></main>
    </div>
  );
}
