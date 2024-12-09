"use client";

import { useState } from "react";
import { LiaSearchSolid } from "react-icons/lia";
import WorkoutDrawer from "@/components/workoutdrawer/workoutdrawer";

export default function Page() {
  const [workouts, setWorkouts] = useState([
    { title: "Lat Pull Downs" },
    { title: "Assisted Pull-Ups" },
    { title: "Incline Dumbbell Curls" },
  ]);

  const [sets, setSets] = useState([
    { name: "Set 1" },
    { name: "Set 2" },
    { name: "Set 3" },
  ]);

  return (
    <div className="flex flex-col gap-4">
      {/* top bar */}
      <nav className="sticky top-0 w-full h-12 p-4 z-10 flex items-center justify-center">
        <div className="w-1/3 flex justify-start"></div>
        <div className="w-1/3 flex justify-center">Workouts</div>
        <div className="w-1/3 flex justify-end">
          <WorkoutDrawer sets={sets} />
        </div>
      </nav>
      {/* routine content */}
      <main className="w-full h-full flex flex-col gap-4">
        {/* search */}
        <div className="relative px-2 mb-4">
          <input
            className="w-full px-8 py-1 rounded-lg bg-neutral-900"
            placeholder="search"
          />
          <div className="absolute inset-y-0 px-2 flex items-center">
            <LiaSearchSolid />
          </div>
        </div>
        {/* workouts */}
        <div className="w-full h-full flex flex-col items-center gap-2">
          {workouts.map((workout, i) => (
            <div key={i} className="w-full ">
              <div className="w-full flex items-center bg-neutral-800 p-2">
                <div className="w-full flex justify-start">{workout.title}</div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
