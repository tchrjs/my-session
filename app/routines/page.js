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
import TopNav from "@/components/topnav/topnav";
import { PageContent } from "@/components/pagecontent/PageContent";

export default function Page() {
  const [routines, setRoutines] = useState([
    { title: "Bro Split" },
    { title: "Upper and Lower" },
  ]);

  return (
    <div>
      <TopNav>
        <div className="w-1/3 flex justify-start"></div>
        <div className="w-1/3 flex justify-center">Routines</div>
        <div className="w-1/3 flex justify-end"></div>
      </TopNav>
      <PageContent>
        <div className="w-full h-full flex flex-col items-center gap-4 p-4">
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
                <DrawerContent className="h-full bg-neutral-800">
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
      </PageContent>
    </div>
  );
}
