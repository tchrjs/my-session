"use client";

import WorkoutItem from "./workoutitem";
import { Input } from "../ui/input";

export default function WorkoutList({ workouts }) {
  return (
    <div>
      <div className="flex relative p-4">
        <Input
          type="search"
          placeholder="Search"
          id="workout-list-search"
          className="w-full"
        />
      </div>
      <div className="flex flex-col items-center gap-2">
        {workouts.map((workout, i) => (
          <WorkoutItem key={i} workout={workout} />
        ))}
      </div>
    </div>
  );
}
