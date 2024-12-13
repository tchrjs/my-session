"use client";

import { useState } from "react";
import { FiPlus } from "react-icons/fi";

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
    setSets([...sets, { name: "", reps: 0, time: 0 }]);
    onChange({ target: { name: "sets", value: sets } });
  };

  return (
    <div>
      <div className="w-full px-2 py-2 flex items-center">
        <div className="w-full">sets</div>
        <button
          type="button"
          className="w-full flex justify-end"
          onClick={createNewSet}
        >
          <FiPlus className="scale-125" />
        </button>
      </div>
      <div className="flex flex-col gap-1">
        {sets.map((set, i) => (
          <div
            key={i}
            className="bg-neutral-800 text-neutral-400 overflow-hidden"
          >
            <div className="w-full">
              <input
                type="text"
                className="p-2 w-full bg-transparent text-neutral-400 text-sm"
                placeholder={`set ${i + 1}`}
                name="name"
                onChange={(event) => handleChange(event, i)}
              />
            </div>
            {/* bodyweighted inputs */}
            <div className={`${type == "bodyweighted" ? "" : "hidden"}`}></div>
            {/* bodyweighted inputs */}
            <div className={`${type == "bodyweighted" ? "" : "hidden"}`}></div>
            {/* timed inputs */}
            <div className={`${type == "timed" ? "" : "hidden"}`}></div>
          </div>
        ))}
      </div>
    </div>
  );
}
