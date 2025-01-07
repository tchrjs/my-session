import { PageContent } from "@/components/pagecontent/pagecontent";
import TopNav from "@/components/topnav/topnav";
import WorkoutDrawer from "@/components/workoutdrawer/workoutdrawer";
import WorkoutList from "@/components/workouts/workoutlist";
import { createClient } from "@/utils/supabase/server";

export default async function Page() {
  // Retrieve data from database.
  const supabase = await createClient();
  const { data: workouts } = await supabase.from("workouts").select();

  return (
    <div className="">
      <TopNav>
        <div className="w-1/3 flex justify-start"></div>
        <div className="w-1/3 flex justify-center">Workouts</div>
        <div className="w-1/3 flex justify-end">
          <WorkoutDrawer />
        </div>
      </TopNav>
      <PageContent>
        <WorkoutList workouts={workouts} />
      </PageContent>
    </div>
  );
}
