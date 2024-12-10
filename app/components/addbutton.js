import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { FaDumbbell, FaWalking } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";

export default function AddButton() {
  return (
    <Popover>
      <PopoverTrigger>
        <FiPlus className="scale-125" />
      </PopoverTrigger>
      <PopoverContent className="w-52 flex flex-col bg-neutral-800 -translate-x-2 translate-y-4">
        <div
          className={`w-full flex p-2 items-center border-b-[1px] border-neutral-500`}
        >
          <div className="w-5/6">Create a routine</div>
          <div className="w-1/6 flex justify-end">
            <FaWalking />
          </div>
        </div>
        <div className="flex p-2 items-center">
          <div className="w-5/6">Create a workout</div>
          <div className="w-1/6 flex justify-end">
            <FaDumbbell />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
