import { Separator } from "@/components/ui/separator";
import { TabsContent } from "@/components/ui/tabs";

export default function AppearanceContent({ value }) {
  return (
    <TabsContent value={value}>
      <div className="text-lg">Appearance</div>
      <div className="text-sm text-foreground/60">
        Adjust the appearance of this workout.
      </div>
      <Separator className="my-5" />
    </TabsContent>
  );
}
