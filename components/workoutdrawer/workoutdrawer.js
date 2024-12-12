import { FiPlus } from "react-icons/fi";
import { CgClose } from "react-icons/cg";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";

export default function WorkoutDrawer({ ...props }) {
  return (
    <Drawer direction="bottom">
      <DrawerTrigger>
        <FiPlus className="scale-125" />
      </DrawerTrigger>
      <DrawerContent className="h-[90%] bg-neutral-900 rounded-t-lg overflow-hidden">
        <DrawerHeader className="flex w-full justify-between items-center bg-neutral-800">
          <DrawerClose className="w-1/3 flex justify-start">
            <CgClose />
          </DrawerClose>
          <DrawerTitle className="w-1/3 flex justify-center">
            Workout
          </DrawerTitle>
          <div className="w-1/3 flex justify-end text-blue-400">Create</div>
        </DrawerHeader>
        <form className="flex flex-col gap-4 p-4 pl-2">
          {/* input workout name */}
          <div>
            <div className="w-full px-2">name</div>
            <div className="relative">
              <input className="w-full px-2 py-2 rounded-lg bg-neutral-800 text-sm" />
            </div>
          </div>
          {/* notes area for workout */}
          <div>
            <div className="w-full px-2">notes</div>
            <Textarea className="rounded-lg bg-neutral-800 text-sm" />
          </div>
          <Separator />
          {/* sets */}
          <div>
            <div className="w-full px-2 pb-2 flex items-center">
              <div className="w-full">sets</div>
              <div className="w-full flex justify-end">
                <FiPlus className="scale-125" />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              {props.sets.map((set) => (
                <div className="bg-neutral-800 text-neutral-400 rounded-lg">
                  <input
                    type="text"
                    className="p-2 w-full bg-transparent text-neutral-400 text-sm"
                    placeholder={set.name}
                  />
                  <Separator className="bg-neutral-700" />
                  <div className="p-2"></div>
                </div>
              ))}
            </div>
          </div>
        </form>
      </DrawerContent>
    </Drawer>
  );
}
