"use client";

import { Input } from "@/components/ui/input";
import { Separator } from "../ui/separator";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import GeneralContent from "./tabcontents/generalcontent";
import GoalsContent from "./tabcontents/goalscontent";
import AppearanceContent from "./tabcontents/appearancecontent";

export default function WorkoutForm({ onFormSubmit = () => {}, ...props }) {
  return (
    <form id={props.id} onSubmit={onFormSubmit} className="overflow-y-auto">
      <div className="flex flex-col gap-4 px-4">
        <div className="py-2">
          <label className="w-full pl-2 text-sm">Name</label>
          <Input
            name="name"
            required={true}
            placeholder="Enter workout name"
            className="text-sm"
          />
        </div>
        <Separator />
        <div className="w-full flex justify-start items-center">
          <Tabs defaultValue="general" className="w-full">
            <TabsList className="bg-transparent font-normal p-2 mb-4">
              <TabsTrigger value="general">General</TabsTrigger>
              <TabsTrigger value="goals">Goals</TabsTrigger>
              <TabsTrigger value="appearance">Appearance</TabsTrigger>
            </TabsList>
            <GeneralContent value="general" />
            <GoalsContent value="goals" />
            <AppearanceContent value="appearance" />
          </Tabs>
        </div>
      </div>
    </form>
  );
}
