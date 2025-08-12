"use client";

import React, { useEffect, useState } from "react";
import ShinyText from "@/components/text/shinytext";
import { CircularProgress } from "@heroui/react";

export default function LoadingOverlay({ duration = 2000 }: { duration?: number }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), duration);
    return () => clearTimeout(timer);
  }, [duration]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 h-screen w-full z-[100] flex items-center justify-center bg-background gap-4">
      <CircularProgress />
      <ShinyText text="Loading..." disabled={false} speed={3} />
    </div>
  );
}
