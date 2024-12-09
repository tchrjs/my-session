"use client";

import { useState } from "react";

// svgs
import { FiPlus } from "react-icons/fi";
import { LiaSearchSolid } from "react-icons/lia";
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

import { Button } from "@/components/ui/button";

export default function Page() {
  const [routines, setRoutines] = useState([
    { title: "Bro Split Workout" },
    { title: "Upper and Lower Workout" },
  ]);

  const [isDropDownActive, setDropDownActive] = useState(false);

  return (
    <div className="flex flex-col gap-4">
      {/* routine top bar */}
      <nav className="sticky top-0 w-full h-12 p-2 z-10 flex items-center justify-center">
        <div className="w-1/3 flex justify-start"></div>
        <div className="w-1/3 flex justify-center">Routines</div>
        <div className="w-1/3 flex justify-end">
          <FiPlus
            className="scale-125"
            onClick={() => {
              setDropDownActive(!isDropDownActive);
            }}
          />
        </div>
      </nav>
      {/* routine content */}
      <main className="w-full h-full flex flex-col gap-4">
        {/* search */}
        <div className="relative px-2">
          <input
            className="w-full px-8 py-1 rounded-lg bg-neutral-900"
            placeholder="Routines"
          />
          <div
            className="absolute inset-y-0 px-2
                    flex items-center 
                    pointer-events-none"
          >
            <LiaSearchSolid />
          </div>
        </div>
        {/* routines */}
        <div className="w-full h-full flex flex-col items-center gap-4 mt-4">
          {routines.map((routine, i) => (
            <div key={i} className="w-full p-3 bg-neutral-900">
              <Drawer direction="right">
                <DrawerTrigger className="w-full flex items-center">
                  <div className="w-5/6 text-neutral-400 flex justify-start">
                    {routine.title}
                  </div>
                  <div className="w-1/6 text-blue-400 flex justify-end">
                    <MdArrowForwardIos />
                  </div>
                </DrawerTrigger>
                <DrawerContent className="h-full">
                  <DrawerHeader>
                    <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                    <DrawerDescription>
                      This action cannot be undone.
                    </DrawerDescription>
                  </DrawerHeader>
                  <DrawerFooter>
                    <Button>Submit</Button>
                    <DrawerClose>
                      <Button variant="outline">Cancel</Button>
                    </DrawerClose>
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
