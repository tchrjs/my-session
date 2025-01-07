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
import { Button } from "../ui/button";

export default function WorkoutDrawer() {
  const handleFormSubmit = async () => {
    document.getElementById("workout-drawer-close").click();
  };

  return (
    <Drawer direction="bottom">
      <DrawerTrigger>
        <Plus className="w-4 h-4" />
      </DrawerTrigger>
      <DrawerContent className="h-[90%] rounded-t-lg overflow-hidden">
        <DrawerHeader className="flex justify-between items-center border-b-[1px]">
          <DrawerClose id="workout-drawer-close" className="w-1/3">
            <X className="w-4 h-4" />
          </DrawerClose>
          <DrawerTitle className="w-1/3 flex justify-center">
            Workout
          </DrawerTitle>
          <Button
            type="submit"
            variant="Ghost"
            form="workout-form"
            className="w-1/3 flex justify-end text-blue-400 p-0"
          >
            Create
          </Button>
        </DrawerHeader>
        <WorkoutForm id="workout-form" onFormSubmit={handleFormSubmit} />
      </DrawerContent>
    </Drawer>
  );
}
