"use client";

import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { CgClose } from "react-icons/cg";

import { Input } from "../ui/input";
import { Separator } from "@/components/ui/separator";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function WorkoutDrawer({ onWorkoutCreate = () => {} }) {
  const [hasType, setHasType] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    type: "",
  });
  const [sets, setSets] = useState([
    { name: "set 1" },
    { name: "set 2" },
    { name: "set 3" },
  ]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    if (name === "type") setHasType(value !== "");
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onWorkoutCreate(formData);
    document.getElementById("workoutdrawerclose").click();
  };

  const handleDrawerClose = () => {
    setHasType(false);
    setFormData({
      name: "",
      type: "",
    });
  };

  return (
    <Drawer direction="bottom" onClose={handleDrawerClose}>
      <DrawerTrigger>
        <FiPlus className="scale-125" />
      </DrawerTrigger>
      <DrawerContent className="h-[90%] bg-neutral-900 rounded-t-lg overflow-hidden">
        <form onSubmit={handleFormSubmit} on>
          <DrawerHeader className="flex w-full justify-between items-center bg-neutral-800">
            <DrawerClose
              id="workoutdrawerclose"
              className="w-1/3 flex justify-start"
            >
              <CgClose />
            </DrawerClose>
            <DrawerTitle className="w-1/3 flex justify-center">
              Workout
            </DrawerTitle>
            <button
              type="submit"
              className="w-1/3 flex justify-end text-blue-400"
            >
              Create
            </button>
          </DrawerHeader>

          {/* input workout name */}
          <div className="flex flex-col gap-4 p-4 pl-2 overflow-y-scroll">
            <div>
              <div className="w-full px-2">name</div>
              <div className="relative">
                <Input
                  className="w-full bg-neutral-800 text-sm"
                  name="name"
                  onChange={handleChange}
                />
              </div>
            </div>
            {/* input workout type */}
            <div>
              <div className="w-full px-2">type</div>
              <Select
                onValueChange={(value) =>
                  handleChange({ target: { name: "type", value: value } })
                }
                required={true}
              >
                <SelectTrigger className="w-full bg-neutral-800">
                  <SelectValue placeholder="select workout type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="weighted">weighted</SelectItem>
                  <SelectItem value="bodyweighted">body-weighted</SelectItem>
                  <SelectItem value="timed">timed</SelectItem>
                </SelectContent>
              </Select>
            </div>
            {/* sets */}
            <div className={`${hasType ? "" : "hidden"}`}>
              <Separator />
              <div className="w-full px-2 py-2 flex items-center">
                <div className="w-full">sets</div>
                <div className="w-full flex justify-end">
                  <FiPlus className="scale-125" />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                {sets.map((set, i) => (
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
          </div>
        </form>
      </DrawerContent>
    </Drawer>
  );
}
