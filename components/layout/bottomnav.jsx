"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// svgs
import { FaDumbbell, FaWalking, FaRegUserCircle } from "react-icons/fa";
import { RiCalendarTodoFill } from "react-icons/ri";

const PageLink = ({ ...props }) => (
  <Link href={props.href}>
    <div
      className={`flex flex-col justify-center items-center gap-1 ${
        props.currentPath === props.href ? "text-purple-400" : ""
      }`}
    >
      <div className="scale-125">{props.icon}</div>
      <div className="text-xs">{props.title}</div>
    </div>
  </Link>
);

export default function BottomNav() {
  const currentPath = usePathname();

  return (
    <nav className="fixed bottom-0 w-full h-24 flex justify-center items-center p-4 border-t-[1px] backdrop-blur-sm">
      <div className="w-full h-full flex justify-around items-start">
        <PageLink
          href={"/"}
          icon={<RiCalendarTodoFill />}
          title="sessions"
          currentPath={currentPath}
        />
        <PageLink
          href={"/routines"}
          icon={<FaWalking />}
          title="routines"
          currentPath={currentPath}
        />
        <PageLink
          href={"/workouts"}
          icon={<FaDumbbell />}
          title="workouts"
          currentPath={currentPath}
        />
        <PageLink
          href={"/profile"}
          icon={<FaRegUserCircle />}
          title="profile"
          currentPath={currentPath}
        />
      </div>
    </nav>
  );
}
