"use client";

import React from "react";
import { Cover } from "@/components/effects/cover";

import HeroSection from "@/components/landing/HeroSection";
import IntroSection from "@/components/landing/IntroSection";
import CapabilitiesSection from "@/components/landing/CapabilitiesSection";

import PeopleSaySection from "@/components/PeopleSaySection";
import { useSmoothSectionPauseScroll } from "@/hooks/useSmoothSectionPauseScroll";
import { ImageHero, Work } from "@/components/imageparallax/imagehero";

export default function TestPage() {
  useSmoothSectionPauseScroll({
    pauseDuration: 500,
    sectionSelector: ".section",
  });
  return (
    <div>
      <section className="section">
        <HeroSection />
      </section>
      <div
        style={{
          width: "100%",
          minHeight: "300px",
          zIndex: 40,
          background: "linear-gradient(to bottom, transparent, black)",
          position: "relative",
        }}
      />
      <section className="section">
        <IntroSection />
      </section>
      <section className="section z-10 bg-background relative">
        <ImageHero />
      </section>
      {/* <section className="section z-10 bg-background relative">
        <Work />
      </section> */}
      <section className="section">
        <CapabilitiesSection />
      </section>
      <section className="section flex w-full min-h-screen bg-background relative z-10 justify-center items-center px-8 md:px-16">
        <div className="flex flex-col justify-center items-center content-center w-full h-full gap-4 ">
          <p
            className="text-2xl md:text-3xl lg:text-4xl max-w-full md:max-w-[900px] lg:max-w-[1280px]"
            style={{ lineHeight: 1.5 }}
          >
            <span className="text-sm md:text-base mr-4 md:mr-16">
              Most importantly, I'm
            </span>
            A <Cover>fast</Cover> learner, and a problem solver, capable of
            tackling complex challenges, so you can take a break, and let me do
            the heavy lifting.
          </p>
        </div>
      </section>
      <section className="section hidden md:flex">
        <PeopleSaySection />
      </section>
    </div>
  );
}
