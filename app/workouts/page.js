import { Search } from "lucide-react";
import TopNav from "@/components/topnav/topnav";
import WorkoutDrawer from "@/components/workoutdrawer/workoutdrawer";
import WorkoutList from "@/components/workouts/workoutlist";
import { supabase } from "@/utils/database/client";

export default async function Page() {
  // Retrieve data from database.
  const { data: workouts } = await supabase.from("workouts").select();

  return (
    <main className="">
      <TopNav>
        <div className="w-1/3 flex justify-start"></div>
        <div className="w-1/3 flex justify-center">Workouts</div>
        <div className="w-1/3 flex justify-end">
          <WorkoutDrawer />
        </div>
      </TopNav>
      <div>
        <div className="relative m-4">
          <input
            className="w-full px-8 py-1 rounded-lg bg-neutral-900"
            placeholder="search"
          />
          <div className="absolute inset-y-0 px-2 flex items-center">
            <Search className="w-4 h-4 text-neutral-400" />
          </div>
        </div>
        <WorkoutList workouts={workouts} />
      </div>
    </main>
  );
}
