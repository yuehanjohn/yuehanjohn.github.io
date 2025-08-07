"use client";

import React, { useState, useEffect, useRef } from "react";

import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Image,
  Chip,
  User,
  Tabs,
  Tab,
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
import FlipCard from "@/components/container/flipcard";
import HorizontalScrollCarousel from "@/components/horizontal-scroll-carousel";
import { RiNextjsLine } from "react-icons/ri";
import {
  SiOllama,
  SiGooglegemini,
  SiPerplexity,
  SiLangchain,
  SiOpenai,
  SiN8N,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiKeras,
  SiHuggingface,
  SiApachespark,
  SiTypescript,
  SiJavascript,
  SiFlutter,
  SiReact,
  SiAndroidstudio,
  SiGithub,
  SiTailwindcss,
  SiNextui,
  SiVercel,
  SiFigma,
  SiSupabase,
  SiMongodb,
  SiPostgresql,
  SiStripe,
  SiDocker,
  SiAuth0,
  SiFirebase,
  SiAwsamplify,
  SiAwslambda,
  SiJupyter,
  SiCanva,
  SiBlender,
} from "react-icons/si";
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

              <div className="absolute top-[20%] left-[10%] z-50 w-fit h-fit">
                <Card isBlurred>
                  <CardHeader className="flex flex-col items-start gap-2 max-w-[500px]">
                    <h1 className="text-5xl">AI agents</h1>
                    <p className="text-lg">
                      Build and deploy custom AI agents for automation, data
                      analysis, and decision-making. Integrate LLMs, APIs, and
                      cloud services into your products.
                    </p>
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
                    Google Cloud
                  </Chip>
                  <Chip
                    size="lg"
                    color="primary"
                    variant="flat"
                    startContent={<VscAzure size={20} />}
                  >
                    Azure
                  </Chip>
                  <Chip
                    size="lg"
                    color="primary"
                    variant="flat"
                    startContent={<SiGooglegemini size={20} />}
                  >
                    Gemini
                  </Chip>
                  <Chip
                    size="lg"
                    color="primary"
                    variant="flat"
                    startContent={<SiPerplexity size={20} />}
                  >
                    Perplexity
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
              className="w-full h-full overflow-hidden rounded-none bg-background"
              isHoverable
              key="card2"
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
              <div className="absolute top-[20%] left-[10%] z-50 w-fit h-fit">
                <Card isBlurred>
                  <CardHeader className="flex flex-col items-start gap-2 max-w-[500px]">
                    <h1 className="text-5xl">Machine Learnings</h1>
                    <p className="text-lg">
                      From image recognition, voice processing, text pattern
                      analysis, to a wide range of machine learning
                      applications. Skilled in deep learning, neural networks,
                      and building intelligent systems for complex data tasks.
                    </p>
                  </CardHeader>
                </Card>
                <div className="flex flex-wrap gap-2 p-4 max-w-[500px]">
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
                    Google Cloud
                  </Chip>
                  <Chip
                    size="lg"
                    color="primary"
                    variant="flat"
                    startContent={<VscAzure size={20} />}
                  >
                    Azure
                  </Chip>
                  <Chip
                    size="lg"
                    color="primary"
                    variant="flat"
                    startContent={<SiJupyter size={20} />}
                  >
                    Jupyter Notebook
                  </Chip>
                  <Chip
                    size="lg"
                    color="primary"
                    variant="flat"
                    startContent={<SiTensorflow size={20} />}
                  >
                    TensorFlow
                  </Chip>
                  <Chip
                    size="lg"
                    color="primary"
                    variant="flat"
                    startContent={<SiPytorch size={20} />}
                  >
                    PyTorch
                  </Chip>
                  <Chip
                    size="lg"
                    color="primary"
                    variant="flat"
                    startContent={<SiScikitlearn size={20} />}
                  >
                    scikit-learn
                  </Chip>
                  <Chip
                    size="lg"
                    color="primary"
                    variant="flat"
                    startContent={<SiKeras size={20} />}
                  >
                    Keras
                  </Chip>
                  <Chip
                    size="lg"
                    color="primary"
                    variant="flat"
                    startContent={<SiHuggingface size={20} />}
                  >
                    Hugging Face
                  </Chip>
                  <Chip
                    size="lg"
                    color="primary"
                    variant="flat"
                    startContent={<SiApachespark size={20} />}
                  >
                    Apache Spark
                  </Chip>
                </div>
              </div>
            </Card>,
            <Card
              className="w-full h-full overflow-hidden rounded-none bg-background"
              isHoverable
              key="card3"
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
              <div className="absolute top-[20%] left-[10%] z-50 w-fit h-fit">
                <Card isBlurred>
                  <CardHeader className="flex flex-col items-start gap-2 max-w-[500px]">
                    <h1 className="text-5xl">Apps</h1>
                    <p className="text-lg">
                      Webapp, mobile app, desktop app, or even a simple
                      command-line tool. I can build it all. From concept to
                      deployment, I ensure a smooth and efficient development
                      process.
                    </p>
                  </CardHeader>
                </Card>
                <div className="flex flex-wrap gap-2 p-4 max-w-[500px]">
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
                    startContent={<RiNextjsLine size={20} />}
                  >
                    Next.js
                  </Chip>
                  <Chip
                    size="lg"
                    color="primary"
                    variant="flat"
                    startContent={<SiTypescript size={20} />}
                  >
                    TypeScript
                  </Chip>
                  <Chip
                    size="lg"
                    color="primary"
                    variant="flat"
                    startContent={<SiJavascript size={20} />}
                  >
                    JavaScript
                  </Chip>
                  <Chip
                    size="lg"
                    color="primary"
                    variant="flat"
                    startContent={<SiFlutter size={20} />}
                  >
                    Flutter
                  </Chip>
                  <Chip
                    size="lg"
                    color="primary"
                    variant="flat"
                    startContent={<SiReact size={20} />}
                  >
                    React
                  </Chip>
                  <Chip
                    size="lg"
                    color="primary"
                    variant="flat"
                    startContent={<SiAndroidstudio size={20} />}
                  >
                    Android Studio
                  </Chip>
                  <Chip
                    size="lg"
                    color="primary"
                    variant="flat"
                    startContent={<SiFirebase size={20} />}
                  >
                    Firebase
                  </Chip>
                  <Chip
                    size="lg"
                    color="primary"
                    variant="flat"
                    startContent={<SiAwsamplify size={20} />}
                  >
                    AWS Amplify
                  </Chip>
                  <Chip
                    size="lg"
                    color="primary"
                    variant="flat"
                    startContent={<SiAwslambda size={20} />}
                  >
                    AWS Lambda
                  </Chip>
                  <Chip
                    size="lg"
                    color="primary"
                    variant="flat"
                    startContent={<SiGithub size={20} />}
                  >
                    GitHub
                  </Chip>
                  <Chip
                    size="lg"
                    color="primary"
                    variant="flat"
                    startContent={<SiTailwindcss size={20} />}
                  >
                    Tailwind CSS
                  </Chip>
                  <Chip
                    size="lg"
                    color="primary"
                    variant="flat"
                    startContent={<SiNextui size={20} />}
                  >
                    Hero UI
                  </Chip>
                  <Chip
                    size="lg"
                    color="primary"
                    variant="flat"
                    startContent={<SiVercel size={20} />}
                  >
                    Vercel
                  </Chip>
                  <Chip
                    size="lg"
                    color="primary"
                    variant="flat"
                    startContent={<SiFigma size={20} />}
                  >
                    Figma
                  </Chip>
                  <Chip
                    size="lg"
                    color="primary"
                    variant="flat"
                    startContent={<SiSupabase size={20} />}
                  >
                    Supabase
                  </Chip>
                  <Chip
                    size="lg"
                    color="primary"
                    variant="flat"
                    startContent={<SiMongodb size={20} />}
                  >
                    MongoDB
                  </Chip>
                  <Chip
                    size="lg"
                    color="primary"
                    variant="flat"
                    startContent={<SiPostgresql size={20} />}
                  >
                    PostgreSQL
                  </Chip>
                  <Chip
                    size="lg"
                    color="primary"
                    variant="flat"
                    startContent={<SiStripe size={20} />}
                  >
                    Stripe
                  </Chip>
                  <Chip
                    size="lg"
                    color="primary"
                    variant="flat"
                    startContent={<SiDocker size={20} />}
                  >
                    Docker
                  </Chip>
                  <Chip
                    size="lg"
                    color="primary"
                    variant="flat"
                    startContent={<SiAuth0 size={20} />}
                  >
                    Auth0
                  </Chip>
                </div>
              </div>
            </Card>,
            <Card
              className="w-full h-full overflow-hidden rounded-none bg-background"
              isHoverable
              key="card4"
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
              />
              <div
                className="right-0 top-0 h-full w-[30%] z-40"
                style={{
                  width: "30%",
                  height: "100vh",
                  zIndex: 40,
                  background: "linear-gradient(to right, transparent, black)",
                  position: "absolute",
                }}
              />
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
              <div className="absolute top-[20%] left-[10%] z-50 w-fit h-fit">
                <Card isBlurred>
                  <CardHeader className="flex flex-col items-start gap-2 max-w-[500px]">
                    <h1 className="text-5xl">Design & Branding</h1>
                    <p className="text-lg">
                      From UI/UX design to branding, I create visually appealing
                      and user-friendly designs. My design process focuses on
                      enhancing user experience and meeting business goals.
                    </p>
                  </CardHeader>
                </Card>
                <div className="flex flex-wrap gap-2 p-4 max-w-[500px]">
                  <Chip
                    size="lg"
                    color="primary"
                    variant="flat"
                    startContent={<SiFigma size={20} />}
                  >
                    Figma
                  </Chip>
                  <Chip
                    size="lg"
                    color="primary"
                    variant="flat"
                    startContent={<SiCanva size={20} />}
                  >
                    Canva
                  </Chip>
                  <Chip
                    size="lg"
                    color="primary"
                    variant="flat"
                    startContent={<SiBlender size={20} />}
                  >
                    Blender
                  </Chip>
                  <Chip
                    size="lg"
                    color="primary"
                    variant="flat"
                    startContent={<SiOpenai size={20} />}
                  >
                    Sora
                  </Chip>
                  <Chip
                    size="lg"
                    color="primary"
                    variant="flat"
                    startContent={<FaGoogle size={20} />}
                  >
                    Veo3
                  </Chip>
                </div>
              </div>
            </Card>,
            <Card
              className="w-full h-full overflow-hidden rounded-none bg-background"
              isHoverable
              key="card5"
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
              />
              <div
                className="right-0 top-0 h-full w-[30%] z-40"
                style={{
                  width: "30%",
                  height: "100vh",
                  zIndex: 40,
                  background: "linear-gradient(to right, transparent, black)",
                  position: "absolute",
                }}
              />
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
              <div className="absolute top-[20%] left-[10%] z-50 w-fit h-fit">
                <Card isBlurred>
                  <CardHeader className="flex flex-col items-start gap-2 max-w-[500px]">
                    <h1 className="text-5xl">Softskills</h1>
                    <p className="text-lg">
                      Managed team from 3 to 50+ people, I can and had lead a
                      team through complex projects, ensuring effective
                      communication, and fostering a collaborative environment.
                    </p>
                  </CardHeader>
                </Card>
                <div className="flex flex-wrap gap-2 p-4 max-w-[500px]">
                  <Chip size="lg" color="primary" variant="flat">
                    Entrepreneurship
                  </Chip>
                  <Chip size="lg" color="primary" variant="flat">
                    Leadership
                  </Chip>
                  <Chip size="lg" color="primary" variant="flat">
                    Team Management
                  </Chip>
                  <Chip size="lg" color="primary" variant="flat">
                    Communication
                  </Chip>
                  <Chip size="lg" color="primary" variant="flat">
                    Problem Solving
                  </Chip>
                  <Chip size="lg" color="primary" variant="flat">
                    Adaptability
                  </Chip>
                  <Chip size="lg" color="primary" variant="flat">
                    Time Management
                  </Chip>
                  <Chip size="lg" color="primary" variant="flat">
                    Stress Management
                  </Chip>
                  <Chip size="lg" color="primary" variant="flat">
                    Conflict Resolution
                  </Chip>
                  <Chip size="lg" color="primary" variant="flat">
                    Decision Making
                  </Chip>
                  <Chip size="lg" color="primary" variant="flat">
                    Critical Thinking
                  </Chip>
                  <Chip size="lg" color="primary" variant="flat">
                    Creativity
                  </Chip>
                </div>
              </div>
            </Card>,
          ]}
        />
      </section>

      <section className="flex w-full min-h-screen bg-background relative z-10 justify-center items-center px-8 md:px-16">
        <div className="flex flex-col justify-center items-center content-center w-full h-full gap-4 ">
          <p className="text-4xl max-w-[1280px]" style={{ lineHeight: 1.5 }}>
            <span className="text-base mr-16">Most importantly, I'm</span>A{" "}
            <Cover>fast</Cover> learner, and a problem solver, capable of
            tackling complex challenges, so you can take a break, and let me do
            the heavy lifting.
          </p>
        </div>
      </section>

      <section className="flex flex-col w-full h-screen bg-background relative z-0 justify-center items-center px-8 md:px-16">
        <div className="sticky font-bold text-3xl text-center top-0 z-20 w-full h-[100px] justify-center items-center content-center">
          <div>People say</div>
        </div>{" "}
        <Card className="w-full h-[80%] overflow-hidden" key="card4" isBlurred>
          <div
            className="left-0 top-0 h-full w-[30%] z-40"
            style={{
              width: "30%",
              height: "100vh",
              zIndex: 40,
              background: "linear-gradient(to left, transparent, black)",
              position: "absolute",
            }}
          />
          <div
            className="right-0 top-0 h-full w-[30%] z-40"
            style={{
              width: "30%",
              height: "100vh",
              zIndex: 40,
              background: "linear-gradient(to right, transparent, black)",
              position: "absolute",
            }}
          />
          <Image
            alt="Woman listing to music"
            height="100%"
            width="100%"
            className="z-0 w-full h-full object-cover"
            src="/assets/images/dev.jpg"
          />

          <div className="absolute top-[20%] left-[5%] z-50 w-fit h-fit">
            <Card className="max-w-[600px] bg-transparent shadow-none">
              <CardHeader className="flex flex-col items-start">
                <h1 className="text-5xl font-bold">
                  “ John is an exceptional developer—fast, creative, and always
                  delivers beyond expectations. Highly recommended! ”
                </h1>
              </CardHeader>
              <CardBody>
                <div className="flex flex-row gap-2 text-2xl">
                  <span>John Smith</span>
                  <span className="text-foreground/40">
                    CEO of Tech Innovations
                  </span>
                </div>
              </CardBody>
            </Card>
          </div>
          <CardFooter className="absolute bottom-0 left-0 w-full bg-transparent m-16 z-50">
            <Tabs
              aria-label="Options"
              classNames={{
                tabList: "gap-6 w-full",
                cursor: "w-full bg-background/20 backdrop-blur-md ",
                tab: "max-w-fit px-0 h-fit bg-transparent backdrop-blur-md",
                tabContent: "group-data-[selected=true]:opacity-100",
              }}
              variant="light"
              color="primary"
            >
              <Tab
                key="photos"
                title={
                  <div className="bg-transparent p-4">
                    <User
                      avatarProps={{
                        src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
                      }}
                      description="Product Designer"
                      name="Jane Doe"
                    />
                  </div>
                }
              />
              <Tab
                key="gfs"
                title={
                  <div className="bg-transparent p-4">
                    <User
                      avatarProps={{
                        src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
                      }}
                      description="Product Designer"
                      name="Jane Doe"
                    />
                  </div>
                }
              />
              <Tab
                key="asd"
                title={
                  <div className="bg-transparent p-4">
                    <User
                      avatarProps={{
                        src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
                      }}
                      description="Product Designer"
                      name="Jane Doe"
                    />
                  </div>
                }
              />
            </Tabs>
          </CardFooter>
        </Card>
      </section>
    </div>
  );
}
