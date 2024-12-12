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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "../ui/input";

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
              <Input className="w-full bg-neutral-800 text-sm" />
            </div>
          </div>
          {/* input workout type */}
          <div>
            <div className="w-full px-2">type</div>
            <Select>
              <SelectTrigger className="w-full bg-neutral-800">
                <SelectValue placeholder="select workout type" />
              </SelectTrigger>
              <SelectContent className=" ">
                <SelectItem value="weighted">Weighted</SelectItem>
                <SelectItem value="bodyweighted">Body Weighted</SelectItem>
                <SelectItem value="timed">Timed</SelectItem>
              </SelectContent>
            </Select>
          </div>
          {/* sets */}
          <div>
            <Separator />
            <div className="w-full px-2 py-2 flex items-center">
              <div className="w-full">sets</div>
              <div className="w-full flex justify-end">
                <FiPlus className="scale-125" />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              {props.sets.map((set, i) => (
                <div key={i} className="bg-neutral-800 text-neutral-400">
                  <input
                    type="text"
                    className="p-2 w-full bg-transparent text-neutral-400 text-sm"
                    placeholder={set.name}
                  />
                </div>
              ))}
            </div>
          </div>
          {/* notes area for workout */}
          <div>
            <Separator />
            <div className="w-full px-2">notes</div>
            <Textarea className="rounded-lg bg-neutral-800 text-sm" />
          </div>
        </form>
      </DrawerContent>
    </Drawer>
  );
}
