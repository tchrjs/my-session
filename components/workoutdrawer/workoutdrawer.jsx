"use client";

import { ChevronLeft, Plus } from "lucide-react";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
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
    <Drawer direction="right">
      <DrawerTrigger>
        <Plus className="w-4 h-4" />
      </DrawerTrigger>
      <DrawerContent className="h-full">
        <DrawerHeader className="h-11 flex items-center p-2 border-b-[1px]">
          <DrawerClose id="workout-drawer-close">
            <ChevronLeft />
          </DrawerClose>
          <DrawerTitle>Create new workout</DrawerTitle>
        </DrawerHeader>
        <WorkoutForm id="workout-form" onFormSubmit={handleFormSubmit} />
        <DrawerFooter className="border-t-[1px] h-24">
          <Button
            form="workout-form"
            type="submit"
            variant="default"
            className="bg-blue-500 text-white"
          >
            Create
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
