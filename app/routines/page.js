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

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Button } from "@/components/ui/button";
import { FaDumbbell, FaWalking } from "react-icons/fa";

export default function Page() {
  const [routines, setRoutines] = useState([
    { title: "Bro Split Workout" },
    { title: "Upper and Lower Workout" },
  ]);

  const [isDropDownActive, setDropDownActive] = useState(false);

  return (
    <div className="flex flex-col gap-4">
      {/* routine top bar */}
      <nav className="sticky top-0 w-full h-12 p-4 z-10 flex items-center justify-center">
        <div className="w-1/3 flex justify-start"></div>
        <div className="w-1/3 flex justify-center">Routines</div>
        <div className="w-1/3 flex justify-end">
          <Popover>
            <PopoverTrigger>
              <FiPlus className="scale-125" />
            </PopoverTrigger>
            <PopoverContent className="w-52 flex flex-col bg-neutral-800 -translate-x-2 translate-y-4">
              <div
                className={`w-full flex p-2 items-center opacity-50 hover:opacity-100 border-b-[1px] border-neutral-500`}
              >
                <div className="w-5/6">Create a routine</div>
                <div className="w-1/6 flex justify-end">
                  <FaWalking />
                </div>
              </div>
              <div className="flex p-2 items-center opacity-50 hover:opacity-100">
                <div className="w-5/6">Create a workout</div>
                <div className="w-1/6 flex justify-end">
                  <FaDumbbell />
                </div>
              </div>
            </PopoverContent>
          </Popover>
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
