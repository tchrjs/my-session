import Link from "next/link";

export default function BottomBar() {
  return (
    <footer className="fixed bottom-0 w-full h-20 flex justify-center items-center p-4">
      <div className="w-full h-full flex justify-around items-center">
        <Link href={"routines"}>routines</Link>
        <div>sessions</div>
        <div>summary</div>
      </div>
    </footer>
  );
}
