"use client";

import { useState } from "react";
import { useRouter } from "next/router";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { supabase } from "@/utils/database/client";
import WorkoutSets from "./workoutsets";

export default function WorkoutForm({ onFormSubmit = () => {}, ...props }) {
  const [hasType, setHasType] = useState(false);
  const [formData, setFormData] = useState({});
  const router = useRouter();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    await supabase.from("workouts").insert([formData]).select();
    router.refresh();
    onFormSubmit();
  };

  return (
    <form
      id={props.id}
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
          onValueChange={(value) => {
            handleChange({ target: { name: "type", value: value } });
            setHasType(value !== "");
          }}
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
        <WorkoutSets type={formData.type} onChange={handleChange} />
      </div>
    </form>
  );
}
