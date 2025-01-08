"use client";

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import WorkoutForm from "./workoutform";
import { ChevronLeft, Plus } from "lucide-react";
import { useState } from "react";

export default function WorkoutDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <Drawer direction="right" dismissible={false} open={open}>
      <DrawerTrigger>
        <Plus className="w-4 h-4" onClick={() => setOpen(true)} />
      </DrawerTrigger>
      <DrawerContent className="h-full">
        <DrawerHeader className="h-11 flex items-center p-4 border-b-[1px]">
          <ChevronLeft onClick={() => setOpen(false)} />
          <DrawerTitle>Create new workout</DrawerTitle>
        </DrawerHeader>
        <WorkoutForm onFormSubmit={() => setOpen(true)} />
      </DrawerContent>
    </Drawer>
  );
}
