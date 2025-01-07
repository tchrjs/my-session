import { cn } from "@/lib/utils";
import React from "react";

export const PageContent = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <main ref={ref} className={cn("mt-[57px] mb-24", className)} {...props}>
      {children}
    </main>
  )
);

PageContent.displayName = "PageContent";
