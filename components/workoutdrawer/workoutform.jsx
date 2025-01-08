"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

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
import { Button } from "../ui/button";

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
    <form
      id={props.id}
      onSubmit={handleFormSubmit}
      className="flex flex-col min-h-full overflow-y-auto"
    >
      <div className="flex flex-col flex-grow gap-4 px-4 p-2">
        <div>
          <div className="w-full px-2 py-1 text-sm">Name</div>
          <div className="relative">
            <Input name="name" onChange={handleChange} required={true} />
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

      <div className="border-t-[1px] min-h-24 mb-11 p-4">
        <Button
          form="workout-form"
          type="submit"
          variant="default"
          className="bg-blue-500 text-white w-full"
        >
          Create
        </Button>
      </div>
    </form>
  );
}
