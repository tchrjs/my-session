"use client";

import WorkoutItem from "./workoutitem";
import React, { useEffect, useState } from "react";

export default function WorkoutList({ initialWorkouts }) {
  const [workouts, setWorkouts] = useState(initialWorkouts);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) setLoading(false);
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center gap-2">
      {workouts.map((workout, i) => (
        <WorkoutItem
          key={i}
          workout={workout}
          style={{ transitionDelay: `${i * 0.1}s` }}
          className={`w-full transition-opacity-transform duration-500
            ${loading ? "opacity-0 -translate-y-2" : "opacity-100"} `}
        />
      ))}
    </div>
  );
}
