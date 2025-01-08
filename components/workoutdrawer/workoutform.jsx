"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { createClient } from "@/utils/supabase/client";
import WorkoutSets from "./workoutsets";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function WorkoutForm({ onFormSubmit = () => {}, ...props }) {
  const [hasType, setHasType] = useState(false);
  const [formData, setFormData] = useState({});
  const supabase = createClient();
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
    <form id={props.id} onSubmit={handleFormSubmit} className="overflow-y-auto">
      <div className="flex flex-col gap-4 px-4 p-2">
        <div>
          <div className="w-full px-2 py-1 text-sm">Name</div>
          <div className="relative">
            <Input
              name="name"
              onChange={handleChange}
              required={true}
              placeholder="Enter workout name"
              className="text-sm"
            />
          </div>
        </div>
        <div>
          <div className="w-full px-2 py-1 text-sm">Type</div>
          <Select
            onValueChange={(value) => {
              handleChange({
                target: { name: "type", value: value },
              });
              setHasType(value !== "");
            }}
            required={true}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="select workout type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="weighted">Weighted</SelectItem>
              <SelectItem value="bodyweighted">Body-Weighted</SelectItem>
              <SelectItem value="timed">Timed</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className={` ${hasType ? "" : "hidden"}`}>
          <WorkoutSets type={formData.type} onChange={handleChange} />
        </div>
      </div>
    </form>
  );
}
