"use client";

import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { CgClose } from "react-icons/cg";

import { Input } from "../ui/input";
import SetList from "./components/setlist";
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
  const [formData, setFormData] = useState({});

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
    document.getElementById("workout-drawer-close").click();
  };

  const handleDrawerClose = () => {
    setHasType(false);
    setFormData({
      name: "",
      type: "",
      sets: [],
    });
  };

  return (
    <Drawer direction="bottom" onClose={handleDrawerClose}>
      <DrawerTrigger>
        <FiPlus className="scale-125" />
      </DrawerTrigger>
      <DrawerContent className="h-[90%] bg-neutral-900 rounded-t-lg overflow-hidden">
        <DrawerHeader className="flex w-full justify-between items-center bg-neutral-800">
          <DrawerClose
            id="workout-drawer-close"
            className="w-1/3 flex justify-start"
          >
            <CgClose />
          </DrawerClose>
          <DrawerTitle className="w-1/3 flex justify-center">
            Workout
          </DrawerTitle>
          <button
            type="submit"
            form="workout-form"
            className="w-1/3 flex justify-end text-blue-400"
          >
            Create
          </button>
        </DrawerHeader>
        {/* form content */}
        <form
          id="workout-form"
          onSubmit={handleFormSubmit}
          className="overflow-y-auto flex flex-col gap-2 py-2 px-2"
        >
          {/* input workout name */}
          <div>
            <div className="w-full px-2 py-1">name</div>
            <div className="relative">
              <Input
                className="w-full bg-neutral-800 text-sm"
                name="name"
                onChange={handleChange}
                required={true}
              />
            </div>
          </div>
          {/* input workout type */}
          <div>
            <div className="w-full px-2 py-1">type</div>
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
          <div className="pt-4 flex justify-center items-center">
            <Separator />
          </div>
          {/* input workout sets and reps or time */}
          <div className={`relative ${hasType ? "" : "hidden"}`}>
            <SetList type={formData.type} onChange={handleChange} />
          </div>
        </form>
      </DrawerContent>
    </Drawer>
  );
}
