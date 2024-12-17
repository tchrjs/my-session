"use client";

import { Separator } from "@/components/ui/separator";

import { FaEllipsisH } from "react-icons/fa";
import { FiChevronDown, FiEdit2, FiTrash2 } from "react-icons/fi";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

export default function WorkoutItem({ workout, onDelete = () => {} }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="w-full">
      <div className="w-full flex items-center px-4 py-2 bg-neutral-800">
        <div className="w-full flex justify-start">{workout.name}</div>
        <div className="flex gap-4">
          <button type="button" onClick={() => setIsExpanded(!isExpanded)}>
            <FiChevronDown
              className={`${
                isExpanded ? "-rotate-180" : ""
              } transition-transform scale-125`}
            />
          </button>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <FaEllipsisH />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-neutral-900">
              <DropdownMenuItem>
                <FiEdit2 />
                Edit
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={onDelete}>
                <FiTrash2 />
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
