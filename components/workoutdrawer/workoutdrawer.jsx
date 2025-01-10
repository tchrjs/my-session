"use client";

import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import WorkoutForm from "./components/workoutform";
import { ChevronLeft, Plus } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";

export default function WorkoutDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <Drawer direction="right" dismissible={false} open={open}>
      <DrawerTrigger>
        <Plus className="w-4 h-4" onClick={() => setOpen(true)} />
      </DrawerTrigger>
      <DrawerContent className="h-full">
        <DrawerHeader className="h-12 flex items-center p-4 border-b-[1px]">
          <ChevronLeft onClick={() => setOpen(false)} />
          <DrawerTitle>Create new workout</DrawerTitle>
        </DrawerHeader>
        <WorkoutForm id="workout-form" onFormSubmit={() => setOpen(false)} />
        <DrawerFooter className="border-t-[1px] p-4 min-h-24">
          <Button
            form="workout-form"
            type="submit"
            variant="default"
            className="bg-blue-500 text-white w-full"
          >
            Create
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
