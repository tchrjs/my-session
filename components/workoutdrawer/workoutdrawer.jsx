"use client";

import { Plus, X } from "lucide-react";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import WorkoutForm from "./workoutform";

export default function WorkoutDrawer() {
  const handleFormSubmit = async () => {
    document.getElementById("workout-drawer-close").click();
  };

  return (
    <Drawer direction="bottom">
      <DrawerTrigger>
        <Plus className="w-4 h-4" />
      </DrawerTrigger>
      <DrawerContent className="h-[90%] rounded-t-lg overflow-hidden bg-neutral-900 ">
        <DrawerHeader className="flex justify-between items-center bg-neutral-800">
          <DrawerClose id="workout-drawer-close" className="w-1/3">
            <X className="w-4 h-4" />
          </DrawerClose>
          <DrawerTitle className="w-1/3 flex justify-center">
            Workout
          </DrawerTitle>
          <button
            type="submit"
            form="workout-form"
            className="w-1/3 flex justify-end text-blue-400"
          >
            Create
          </button>
        </DrawerHeader>
        <WorkoutForm id="workout-form" onFormSubmit={handleFormSubmit} />
      </DrawerContent>
    </Drawer>
  );
}
