"use client";

import React, { useState, useEffect } from "react";
import LoadingOverlay from "@/components/LoadingOverlay";

export default function LoaderWrapper({ children }: { children: React.ReactNode }) {
  const [showOverlay, setShowOverlay] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setShowOverlay(false), 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {showOverlay && <LoadingOverlay duration={2000} />}
      {children}
    </>
  );
}
