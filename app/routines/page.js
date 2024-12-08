"use client";

import { useState } from "react";

export default function Page() {
  const [routines, setRoutines] = useState([
    { title: "Chest and Triceps", notes: "" },
    { title: "Back and Biceps", notes: "" },
    { title: "Legs", notes: "" },
    { title: "Abs", notes: "" },
  ]);

  return (
    <main className="w-full h-full px-4 py-8 flex flex-col gap-4">
      <div className="w-full text-xl">Routines</div>
      <div className="w-full h-full px-2 flex flex-col gap-4">
        {routines.map((routine, i) => (
          <div
            key={i}
            className="w-full flex flex-col bg-neutral-900 rounded-xl"
          >
            <div className="h-10 border-b-[0.5px] p-2 border-neutral-700">
              {routine.title}
            </div>
            <div className="h-24 p-2">
              <a className="text-neutral-600">notes</a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
