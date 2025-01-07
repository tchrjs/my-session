"use client";

import React, { useEffect, useState } from "react";
import WorkoutItem from "./workoutitem";
import { Input } from "../ui/input";

export default function WorkoutList({ workouts }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) setLoading(false);
  }, [loading]);

  return (
    <div className={`${loading ? "opacity-0" : ""} transition-opacity`}>
      <div className="flex relative mx-2 my-4">
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
