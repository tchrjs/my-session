"use client";

import { useState } from "react";

// svgs
import { MdArrowForwardIos } from "react-icons/md";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export default function Page() {
  const [routines, setRoutines] = useState([
    { title: "Bro Split" },
    { title: "Upper and Lower" },
  ]);

  return (
    <div className="flex flex-col gap-4">
      {/* top bar */}
      <nav className="sticky top-0 w-full h-12 p-4 z-10 flex items-center justify-center">
        <div className="w-1/3 flex justify-start"></div>
        <div className="w-1/3 flex justify-center">Routines</div>
        <div className="w-1/3 flex justify-end"></div>
      </nav>
      {/* routine content */}
      <main className="w-full h-full flex flex-col gap-4">
        {/* routines */}
        <div className="w-full h-full flex flex-col items-center gap-4 px-4">
          {routines.map((routine, i) => (
            <div key={i} className="w-full">
              <Drawer direction="right">
                <DrawerTrigger className="w-full flex items-center bg-neutral-800 rounded-lg p-4">
                  <div className="w-5/6 flex justify-start">
                    {routine.title}
                  </div>
                  <div className="w-1/6 text-blue-400 flex justify-end">
                    <MdArrowForwardIos />
                  </div>
                </DrawerTrigger>
                <DrawerContent className="h-full">
                  <DrawerHeader>
                    <DrawerTitle>{routine.title}</DrawerTitle>
                    <DrawerDescription></DrawerDescription>
                  </DrawerHeader>
                  <DrawerFooter>
                    <DrawerClose></DrawerClose>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
