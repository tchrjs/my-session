"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// svgs
import { BsFillClipboard2DataFill } from "react-icons/bs";
import { FaDumbbell, FaWalking } from "react-icons/fa";
import { RiCalendarTodoFill } from "react-icons/ri";

const PageLink = ({ ...props }) => (
  <Link href={props.href}>
    <div
      className={`flex flex-col justify-center items-center ${
        props.currentPath === props.href ? "text-purple-400" : ""
      }`}
    >
      <div>{props.icon}</div>
      <div className="text-xs">{props.title}</div>
    </div>
  </Link>
);

export default function BottomBar() {
  const currentPath = usePathname();

  return (
    <footer className="fixed bottom-0 w-full h-20 flex justify-center items-center p-4">
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
          href={"/summary"}
          icon={<BsFillClipboard2DataFill />}
          title="summary"
          currentPath={currentPath}
        />
      </div>
    </footer>
  );
}
