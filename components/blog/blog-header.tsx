"use client";

import React from "react";

export default function BlogHeader() {
  return (
    <header className="text-center mb-12 sm:mb-14 md:mb-16 pt-6 sm:pt-8 md:pt-12">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-5 md:mb-6 text-foreground">
        Blog
      </h1>
      <p className="text-base sm:text-lg md:text-xl text-foreground-600 max-w-2xl mx-auto px-4">
        Thoughts, insights, and stories about technology, development, and innovation.
      </p>
    </header>
  );
}
