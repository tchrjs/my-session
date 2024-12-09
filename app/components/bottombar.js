"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// svgs
import { BsFillClipboard2DataFill } from "react-icons/bs";
import { FaWalking } from "react-icons/fa";
import { RiCalendarTodoFill } from "react-icons/ri";

export default function BottomBar() {
  const currentPath = usePathname(); // Get the current route

  return (
    <footer className="fixed bottom-0 w-full h-16 flex justify-center items-center p-4">
      <div className="w-full h-full flex justify-around items-center">
        <Link href={"/"}>
          <div
            className={`flex flex-col justify-center items-center gap-2 ${
              currentPath === "/" ? "text-green-400" : "text-gray-400"
            }`}
          >
            <BsFillClipboard2DataFill className="scale-125" />
            <div className="text-xs">summary</div>
          </div>
        </Link>
        <Link href={"/routines"}>
          <div
            className={`flex flex-col justify-center items-center gap-2 ${
              currentPath === "/routines" ? "text-green-400" : "text-gray-400"
            }`}
          >
            <FaWalking className="scale-125" />
            <div className="text-xs">routines</div>
          </div>
        </Link>
        <Link href={"/sessions"}>
          <div
            className={`flex flex-col justify-center items-center gap-2 ${
              currentPath === "/sessions" ? "text-green-400" : "text-gray-400"
            }`}
          >
            <RiCalendarTodoFill className="scale-125" />
            <div className="text-xs">sessions</div>
          </div>
        </Link>
      </div>
    </footer>
  );
}
