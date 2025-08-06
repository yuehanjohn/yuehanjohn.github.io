"use client";

import React, { useState, useEffect, useRef } from "react";

import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Image,
  Chip,
} from "@heroui/react";
import ReactPlayer from "react-player";
import { FaCircle } from "react-icons/fa6";
import Counter from "@/components/text/counter";
import { getLinesOfCodes, getDrankedCoffee } from "@/hooks/math";
import { Button } from "@heroui/button";
import ScrollVelocity from "@/components/container/Scrollvelocity";
import { ProgressiveBlur } from "@/components/effects/progressive-blur";
import { Cover } from "@/components/effects/cover";
import { ImageHero, Schedule } from "@/components/imageparallax/imagehero";
import { RiNextjsLine } from "react-icons/ri";
import FlipCard from "@/components/container/flipcard";
import HorizontalScrollCarousel from "@/components/horizontal-scroll-carousel";
import { SiOllama, SiLangchain, SiOpenai, SiN8N } from "react-icons/si";
import { FaPython, FaAws, FaGoogle } from "react-icons/fa";
import { TbApi } from "react-icons/tb";
import { VscAzure } from "react-icons/vsc";

export default function TestPage() {
  const videoContainerRef = useRef<HTMLDivElement>(null);

  const getCardPosition = (cardIndex: number) => {
    if (!videoContainerRef.current) return { top: 0 };

    const containerRect = videoContainerRef.current.getBoundingClientRect();
    const containerTop = scrollY + containerRect.top;
    const containerBottom = containerTop + containerRect.height;
    const viewportHeight = window.innerHeight;
    const viewportCenter = scrollY + viewportHeight / 2;

    // Calculate card container height (3 cards + 2 gaps of 1rem each = ~3 * 150px + 2 * 16px = 482px)
    const cardContainerHeight = 482;

    // Calculate card position based on scroll
    let cardTop = Math.max(
      containerTop,
      viewportCenter - cardContainerHeight / 2
    );
    cardTop = Math.min(cardTop, containerBottom - cardContainerHeight);

    return {
      top: cardTop - containerTop,
    };
  };

  return (
    <div className="">
      <div className="fixed top-0 left-0 w-full flex justify-between items-center h-24 z-50 px-16 overflow-hidden">
        <img
          src="/assets/logos/logo.png"
          alt="Logo"
          className="h-5 w-auto object-contain"
          style={{ aspectRatio: "auto" }}
        />
        <div className="hidden md:flex items-center gap-2 flex-row">
          <Button variant="light">About</Button>
          <Button variant="light">Blog</Button>
          <Button variant="light">Contact</Button>
        </div>
      </div>

      <section
        className="h-screen w-full flex items-center justify-center bg-primary text-white"
        // style={{ marginTop: "-64px" }}
      >
        <div
          ref={videoContainerRef}
          style={{
            position: "relative",
            width: "100vw",
            height: "100vh",
          }}
          className="overflow-hidden"
        >
          {/* Background Video */}

          <div
            style={{
              position: "fixed",
              inset: 0,
              width: "100vw",
              height: "100vh",
              overflow: "hidden",
              zIndex: 0,
              pointerEvents: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* This wrapper crops the player to fill the screen */}
            <div
              style={{
                position: "relative",
                width: "100vw",
                height: "100vh",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* The player itself always stays at 16:9 ratio */}
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "calc(max(100vw, 100vh * 16 / 9))",
                  height: "calc(max(100vh, 100vw * 9 / 16))",
                  aspectRatio: "16/9",
                  overflow: "hidden",
                }}
              >
                <ReactPlayer
                  src="https://youtu.be/DHJYJCazX8M"
                  playing
                  loop
                  controls={false}
                  muted
                  width="100%"
                  height="100%"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
          </div>

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
            {/* <span className="text-2xl font-bebas from-neutral-500">Hirable Ex-AI Founder</span> */}
            <span
              className="flex-none font-bebas m-0 p-0 text-2xl"
              style={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                lineHeight: 1,
                verticalAlign: "middle",
                fontFeatureSettings: "liga",
                maxWidth: "100%",
                // maxHeight: "calc(1em + 60px)",
                display: "inline-block",
                position: "relative",
                // Add a fade effect using a linear-gradient mask
              }}
            >
              Hirable Ex-AI Founder
              <span
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%) rotate(-10deg)",
                  width: "100%",
                  height: "10px",
                  background:
                    "linear-gradient(180deg, background 0%, transparent 100%)",
                  zIndex: 2,
                  pointerEvents: "none",
                  opacity: 1, // Controls overall fade strength
                  filter: "blur(2px)", // Controls softness of the fade
                  WebkitMaskImage: `
              linear-gradient(180deg, background 0%, transparent 100%),
              linear-gradient(to right, transparent 0%, background 20%, background 80%, transparent 100%)
            `,
                  maskImage: `
              linear-gradient(180deg, background 0%, transparent 100%),
              linear-gradient(to right, transparent 0%, background 20%, background 80%, transparent 100%)
            `,
                  maskComposite: "intersect",
                  WebkitMaskComposite: "source-in",
                }}
              />
            </span>
          </div>

          <div className="absolute bottom-0 left-0 w-full py-0 overflow-hidden">
            <ScrollVelocity
              marqueeMode={true}
              velocity={100}
              gap={48}
              pauseOnHover={false}
              className="logo-marquee"
              numCopies={8}
            >
              {[
                "bueno.svg",
                "boost.png",
                "turkuamk.png",
                "sinceai.png",
                "founderinstitute.png",
                "kaewtaart.png",
                "businessturku.png",
                "fucard.png",
              ].map((logo, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-center"
                  style={{ height: "100px", minWidth: "120px" }}
                >
                  <Image
                    alt="Company Logo"
                    src={`/assets/logos/worked/${logo}`}
                    className="object-contain rounded-none"
                    style={{ maxHeight: "20px", maxWidth: "100px" }}
                  />
                </div>
              ))}
            </ScrollVelocity>
            <ProgressiveBlur
              className="pointer-events-none absolute top-0 left-0 h-full w-[200px]"
              direction="left"
              blurIntensity={1}
              blurLayers={8}
            />
            <ProgressiveBlur
              className="pointer-events-none absolute top-0 right-0 h-full w-[200px]"
              direction="right"
              blurIntensity={1}
              blurLayers={8}
            />
          </div>
        </div>
      </section>
      <div
        style={{
          width: "100%",
          minHeight: "300px",
          zIndex: 40,
          background: "linear-gradient(to bottom, transparent, black)",
          position: "relative",
        }}
      >
        {/* Add content or leave empty for just the gradient */}
      </div>
      <section className="flex w-full min-h-screen bg-background relative z-10 justify-center items-center px-8 md:px-16">
        <div className="flex flex-col justify-center items-center w-full h-full gap-4 ">
          <p className="text-4xl l text-balance" style={{ lineHeight: 1.5 }}>
            <span className="text-base mr-16">I'm John</span>A resourceful,
            creative, and <Cover>lightning-fast</Cover> adaptive AI developer.
          </p>
        </div>
      </section>

      <section className="bg-background relative z-10">
        <ImageHero />
        <Schedule />
      </section>

      <section className="bg-background relative z-10">
        <div className="sticky font-bold text-3xl text-center top-0 z-20 w-full h-[100px] justify-center items-center content-center">
          <div>Capabilities</div>
        </div>
        <HorizontalScrollCarousel
          sectionHeight="1000vh"
          cards={[
            <Card
              className="w-full h-full overflow-hidden rounded-none bg-background"
              isHoverable
              key="card1"
              isFooterBlurred
            >
              <div
                className="left-0 top-0 h-full w-[30%] z-40"
                style={{
                  width: "30%",
                  height: "100vh",
                  zIndex: 40,
                  background: "linear-gradient(to left, transparent, black)",
                  position: "absolute",
                }}
              >
                {/* Add content or leave empty for just the gradient */}
              </div>
              <div
                className="right-0 top-0 h-full w-[30%] z-40"
                style={{
                  width: "30%",
                  height: "100vh",
                  zIndex: 40,
                  background: "linear-gradient(to right, transparent, black)",
                  position: "absolute",
                }}
              >
                {/* Add content or leave empty for just the gradient */}
              </div>
              <div
                className="left-0 top-0 h-[100%] w-[100%] z-40"
                style={{
                  zIndex: 40,
                  background:
                    "linear-gradient(-45deg, transparent 0%, black 100%)",
                  position: "absolute",
                }}
              >
                {/* Add content or leave empty for just the gradient */}
              </div>
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100vw",
                  height: "100vh",
                  overflow: "hidden",
                  zIndex: 0,
                  pointerEvents: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* This wrapper crops the player to fill the screen */}
                <div
                  style={{
                    position: "relative",
                    width: "100vw",
                    height: "100vh",
                    overflow: "hidden",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {/* The player itself always stays at 16:9 ratio */}
                  <div
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      width: "calc(max(100vw, 100vh * 16 / 9))",
                      height: "calc(max(100vh, 100vw * 9 / 16))",
                      aspectRatio: "16/9",
                      overflow: "hidden",
                    }}
                  >
                    <ReactPlayer
                      src="https://youtu.be/58Z4yYeWVsA"
                      playing
                      loop
                      controls={false}
                      muted
                      width="100%"
                      height="100%"
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 z-10"></div>
              {/* <CardFooter className="h-[30vh] justify-start items-start before:bg-white/10 border-white/20 border-1 overflow-hidden absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small z-50 p-16">
                <h1 className="text-5xl">Build AI agents systems</h1>
                <Button
                  size="lg"
                  variant="light"
                  startContent={<RiNextjsLine size={20} />}
                >
                  Next.js
                </Button>
              </CardFooter> */}
              <div className="absolute top-[20%] left-[10%] z-50 w-fit h-fit">
                <Card isBlurred>
                  <CardHeader>
                    <h1 className="text-5xl">Build AI agents systems</h1>
                  </CardHeader>
                </Card>
                <div className="flex flex-wrap gap-2 p-4 max-w-[500px]">
                  <Chip
                    size="lg"
                    color="primary"
                    variant="flat"
                    startContent={<SiOllama size={20} />}
                  >
                    Ollama
                  </Chip>
                  <Chip
                    size="lg"
                    color="primary"
                    variant="flat"
                    startContent={<FaPython size={20} />}
                  >
                    Python
                  </Chip>
                  <Chip
                    size="lg"
                    color="primary"
                    variant="flat"
                    startContent={<SiLangchain size={20} />}
                  >
                    LangChain
                  </Chip>
                  <Chip
                    size="lg"
                    color="primary"
                    variant="flat"
                    startContent={<SiOpenai size={20} />}
                  >
                    OpenAI
                  </Chip>
                  <Chip
                    size="lg"
                    color="primary"
                    variant="flat"
                    startContent={<SiN8N size={20} />}
                  >
                    n8n
                  </Chip>
                  <Chip
                    size="lg"
                    color="primary"
                    variant="flat"
                    startContent={<TbApi size={20} />}
                  >
                    API
                  </Chip>
                  <Chip
                    size="lg"
                    color="primary"
                    variant="flat"
                    startContent={<FaAws size={20} />}
                  >
                    AWS
                  </Chip>
                  <Chip
                    size="lg"
                    color="primary"
                    variant="flat"
                    startContent={<FaGoogle size={20} />}
                  >
                    Google
                  </Chip>
                  <Chip
                    size="lg"
                    color="primary"
                    variant="flat"
                    startContent={<VscAzure size={20} />}
                  >
                    Azure
                  </Chip>
                  <Chip size="lg" color="primary" variant="flat">
                    CrewAI
                  </Chip>
                  <Chip size="lg" color="primary" variant="flat">
                    MCP
                  </Chip>
                  <Chip size="lg" color="primary" variant="flat">
                    RAG
                  </Chip>
                  <Chip size="lg" color="primary" variant="flat">
                    NLP
                  </Chip>
                  <Chip size="lg" color="primary" variant="flat">
                    Data Science
                  </Chip>
                </div>
              </div>
            </Card>,
            <Card
              className="w-full h-full"
              isHoverable
              key="card1"
              isFooterBlurred
            >
              <div
                className="left-0 top-0 h-full w-[30%] z-40"
                style={{
                  width: "30%",
                  height: "100vh",
                  zIndex: 40,
                  background: "linear-gradient(to left, transparent, black)",
                  position: "absolute",
                }}
              >
                {/* Add content or leave empty for just the gradient */}
              </div>
              <div
                className="right-0 top-0 h-full w-[30%] z-40"
                style={{
                  width: "30%",
                  height: "100vh",
                  zIndex: 40,
                  background: "linear-gradient(to right, transparent, black)",
                  position: "absolute",
                }}
              >
                {/* Add content or leave empty for just the gradient */}
              </div>
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100vw",
                  height: "100vh",
                  overflow: "hidden",
                  zIndex: 0,
                  pointerEvents: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* This wrapper crops the player to fill the screen */}
                <div
                  style={{
                    position: "relative",
                    width: "100vw",
                    height: "100vh",
                    overflow: "hidden",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {/* The player itself always stays at 16:9 ratio */}
                  <div
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      width: "calc(max(100vw, 100vh * 16 / 9))",
                      height: "calc(max(100vh, 100vw * 9 / 16))",
                      aspectRatio: "16/9",
                      overflow: "hidden",
                    }}
                  >
                    <ReactPlayer
                      src="https://youtu.be/DHJYJCazX8M"
                      playing
                      loop
                      controls={false}
                      muted
                      width="100%"
                      height="100%"
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 z-10"></div>
              <CardFooter className="h-[30vh] justify-between items-start  bottom-0 overflow-hidden absolute z-50 p-16">
                <div>
                  <h1 className="text-5xl">Build Apps</h1>
                </div>
                <div>
                  <Button
                    size="lg"
                    variant="light"
                    startContent={<RiNextjsLine size={20} />}
                  >
                    Next.js
                  </Button>
                </div>
              </CardFooter>
            </Card>,
            <div
              key="card2"
              style={{
                width: "100vw",
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#e0e7ff",
              }}
            >
              <h2 className="text-3xl font-bold">Card 2</h2>
              <p className="ml-4">This is the second card's content.</p>
            </div>,
            <div
              key="card3"
              style={{
                width: "100vw",
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#ffe4e6",
              }}
            >
              <h2 className="text-3xl font-bold">Card 3</h2>
              <p className="ml-4">This is the third card's content.</p>
            </div>,
            <div
              key="card4"
              style={{
                width: "100vw",
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#f0fdf4",
              }}
            >
              <h2 className="text-3xl font-bold">Card 4</h2>
              <p className="ml-4">This is the fourth card's content.</p>
            </div>,
            <div
              key="card5"
              style={{
                width: "100vw",
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#fef9c3",
              }}
            >
              <h2 className="text-3xl font-bold">Card 5</h2>
              <p className="ml-4">This is the fifth card's content.</p>
            </div>,
          ]}
        />
      </section>

      <section>
        <Image
          isBlurred
          alt="HeroUI Album Cover"
          className="m-5"
          src="https://heroui.com/images/album-cover.png"
          width={240}
        />
      </section>
    </div>
  );
}
