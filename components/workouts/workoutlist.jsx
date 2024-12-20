"use client";

import React, { useEffect, useState } from "react";
import WorkoutItem from "./workoutitem";

export default function WorkoutList({ workouts }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) setLoading(false);
  }, []);

  return (
    <div className="flex flex-col items-center gap-2">
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
