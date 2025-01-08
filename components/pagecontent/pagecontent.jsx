"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export function PageContent({ ...props }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) setLoading(false);
  }, [loading]);

  return (
    <main
      className={`${cn("mt-10 mb-24", props.className)} ${
        loading ? "opacity-0" : ""
      } transition-opacity`}
      {...props}
    >
      {props.children}
    </main>
  );
}
