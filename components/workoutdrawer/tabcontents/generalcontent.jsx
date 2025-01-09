import { Separator } from "@/components/ui/separator";
import { TabsContent } from "@/components/ui/tabs";

export default function GeneralContent({ value }) {
  return (
    <TabsContent value={value}>
      <div className="text-lg">General</div>
      <div className="text-sm text-foreground/60">
        Adjust general settings for this workout.
      </div>
      <Separator className="my-5" />
    </TabsContent>
  );
}
