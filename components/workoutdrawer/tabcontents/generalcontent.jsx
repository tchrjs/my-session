import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { TabsContent } from "@/components/ui/tabs";
import { useState } from "react";

export default function GeneralContent({ value }) {
  return (
    <TabsContent value={value}>
      <div className="text-lg">General</div>
      <div className="text-sm text-foreground/60">
        Adjust general settings for this workout.
      </div>
      <Separator className="my-5" />
      <div className="flex flex-col gap-4">
        <WorkoutTypeInput />
        <RestInput />
      </div>
    </TabsContent>
  );
}

const WorkoutTypeInput = () => {
  const [selection, setSelection] = useState("weighted");

  return (
    <div className="flex flex-col">
      <label className="text-sm pb-1">Workout Type</label>
      <Select
        defaultValue="weighted"
        onValueChange={(value) => {
          setSelection(value);
        }}
      >
        <SelectTrigger className="w-full">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="weighted">Weighted</SelectItem>
          <SelectItem value="bodyweighted">Body-Weighted</SelectItem>
          <SelectItem value="timed">Timed</SelectItem>
        </SelectContent>
      </Select>
      <div className="text-xs text-foreground/60 pt-1">
        <p className={`${selection === "weighted" ? "" : "hidden"}`}>
          Total weight you used for this exercise.
        </p>
        <p className={`${selection === "bodyweighted" ? "" : "hidden"}`}>
          Result from weights + or - from your body-weight.
        </p>
        <p className={`${selection === "timed" ? "" : "hidden"}`}>
          Measure in time for how long exercise was performed.
        </p>
      </div>
    </div>
  );
};

const RestInput = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex border-[1px] rounded-md">
        <div className="w-5/6 flex flex-col justify-center items-start p-4">
          <div className="text-sm">Enable Rest</div>
          <div className="text-xs text-foreground/60">
            Adjust general settings for this workout.
          </div>
        </div>
        <div className="w-1/6 flex justify-center items-center">
          <Switch
            onCheckedChange={(checked) => {
              setChecked(checked);
            }}
          />
        </div>
      </div>
      <div
        className={`${checked ? "" : "opacity-0 -translate-y-2"} transition`}
      >
        <label className="text-sm pb-1">Rest Time</label>
        <Input
          name="name"
          required={true}
          defaultValue={0}
          className="text-sm"
        />
      </div>
    </div>
  );
};
