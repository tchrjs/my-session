import { Separator } from "@/components/ui/separator";
import { TabsContent } from "@/components/ui/tabs";

export default function GoalsContent({ value }) {
  return (
    <TabsContent value={value}>
      <div className="text-lg">Goals</div>
      <div className="text-sm text-foreground/60">
        Adjust the goals for this workout.
      </div>
      <Separator className="my-5" />
    </TabsContent>
  );
}
