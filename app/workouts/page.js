"use client";

import { useEffect, useState } from "react";
import { LiaSearchSolid } from "react-icons/lia";

import WorkoutDrawer from "@/components/workoutdrawer/workoutdrawer";
import WorkoutItem from "@/components/workoutitem/workoutitem";
import { supabase } from "@/utils/database/client";

export default function Page() {
  const [workouts, setWorkouts] = useState([]);

  const handleWorkoutCreate = async (event) => {
    setWorkouts([...workouts, event]);
    await supabase.from("workouts").insert([event]).select();
  };

  const handleDelete = async (workout, index) => {
    setWorkouts((prevWorkouts) => prevWorkouts.filter((_, i) => i !== index));
    await supabase.from("workouts").delete().eq("name", workout.name);
  };

  useEffect(() => {
    const fetchData = async () => {
      const { data: workouts, error } = await supabase
        .from("workouts")
        .select("*");
      if (error) {
        console.error(error);
      } else {
        setWorkouts(workouts);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col gap-4">
      {/* top bar */}
      <nav className="sticky top-0 w-full h-12 p-4 z-10 flex items-center justify-center">
        <div className="w-1/3 flex justify-start"></div>
        <div className="w-1/3 flex justify-center">Workouts</div>
        <div className="w-1/3 flex justify-end">
          <WorkoutDrawer onWorkoutCreate={handleWorkoutCreate} />
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
            <WorkoutItem
              key={i}
              workout={workout}
              onDelete={() => handleDelete(workout, i)}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
