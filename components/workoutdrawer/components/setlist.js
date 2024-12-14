"use client";

import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

export default function SetList({ type, onChange = () => {} }) {
  const [sets, setSets] = useState([]);

  const handleChange = (event, index) => {
    const { name, value } = event.target;
    let newSets = [...sets];
    newSets[index][name] = value;
    setSets(newSets);
    onChange({ target: { name: "sets", value: sets } });
  };

  const createNewSet = () => {
    let newSet = { name: "", reps: 10, time: 1000 };
    if (sets.length > 0) Object.assign(newSet, sets[sets.length - 1]);
    setSets([...sets, newSet]);
    onChange({ target: { name: "sets", value: sets } });
  };

  const updateSetReps = (value, i) => {
    handleChange({ target: { name: "reps", value: value } }, i);
  };

  return (
    <div>
      <div className="w-full px-2 py-1 flex items-center">
        <div className="w-full">sets</div>
        <div className="w-full flex justify-end">
          <button type="button" onClick={createNewSet}>
            <FiPlus className="scale-125" />
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        {sets.map((set, i) => (
          <div
            key={i}
            className="bg-neutral-800 overflow-hidden rounded-lg gap-2"
          >
            <div className="w-full ">
              <input
                type="text"
                className="w-full bg-transparent text-foreground text-md p-2"
                placeholder={`set ${i + 1}`}
                name="name"
                onChange={(event) => handleChange(event, i)}
              />
            </div>
            <Separator className="border-b-[1px] border-neutral-700" />

            {/* weighted inputs */}
            <div className={`w-full ${type == "weighted" ? "" : "hidden"}`}>
              <div className="w-full flex p-2">
                <div className="w-4/6">Reps</div>
                <div className="w-2/6 flex justify-between items-center">
                  <button
                    type="button"
                    onClick={() =>
                      updateSetReps(set.reps - 1 < 1 ? 1 : set.reps - 1, i)
                    }
                  >
                    <FiMinus />
                  </button>
                  <div>{set.reps}</div>
                  <button
                    type="button"
                    onClick={() => updateSetReps(set.reps + 1, i)}
                  >
                    <FiPlus />
                  </button>
                </div>
              </div>
            </div>
            {/* bodyweighted inputs */}
            <div className={`${type == "bodyweighted" ? "" : "hidden"}`}>
              <div className="w-full flex p-2">
                <div className="w-4/6">Reps</div>
                <div className="w-2/6 flex justify-between items-center">
                  <button
                    type="button"
                    onClick={() =>
                      updateSetReps(set.reps - 1 < 1 ? 1 : set.reps - 1, i)
                    }
                  >
                    <FiMinus />
                  </button>
                  <div>{set.reps}</div>
                  <button
                    type="button"
                    onClick={() => updateSetReps(set.reps + 1, i)}
                  >
                    <FiPlus />
                  </button>
                </div>
              </div>
            </div>
            {/* timed inputs */}
            <div className={`${type == "timed" ? "" : "hidden"}`}>
              <div className="w-full flex p-2">
                <div className="w-4/6">Time</div>
                <div className="w-2/6 flex justify-between items-center"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
