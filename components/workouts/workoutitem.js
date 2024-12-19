"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";

import { useState } from "react";
import { ChevronDown, Edit2, Ellipsis, Trash2 } from "lucide-react";
import { supabase } from "@/utils/database/client";

export default function WorkoutItem({ className, style, workout }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleDelete = async () => {
    await supabase.from("workouts").delete().eq("name", workout.name);
  };

  return (
    <div className={className} style={style}>
      <div className="w-full flex items-center px-4 py-2 bg-neutral-800">
        <div className="w-full flex justify-start">{workout.name}</div>
        <div className="flex gap-2">
          <button type="button" onClick={() => setIsExpanded(!isExpanded)}>
            <ChevronDown
              className={`${
                isExpanded ? "-rotate-180" : ""
              } transition-transform w-5 h-5`}
            />
          </button>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Ellipsis className="w-5 h-5" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-neutral-900">
              <DropdownMenuItem>
                <Edit2 />
                Edit
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleDelete}>
                <Trash2 />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <Separator className="border-b-[1px] border-neutral-700" />
      <div
        className={`w-full flex px-4 p-2 bg-neutral-800 text-neutral-400 text-sm ${
          isExpanded ? "hidden" : ""
        }`}
      >
        {`${workout.type} ${
          workout.sets && workout.sets.length !== 0
            ? "- " + workout.sets.length + " sets"
            : ""
        }`}
      </div>
      <div
        className={`w-full flex flex-col px-4 p-2 bg-neutral-800 text-neutral-300 text-md ${
          isExpanded ? "" : "hidden"
        }`}
      >
        {workout.sets
          ? workout.sets.map((set, i) => (
              <div key={i} className="w-full flex">
                <div className="w-1/2">
                  {"set " + i + " - "}
                  {workout.type === "timed"
                    ? set.time / 1000 + " sec"
                    : set.reps + " reps"}
                </div>
              </div>
            ))
          : "no sets"}
      </div>
    </div>
  );
}
