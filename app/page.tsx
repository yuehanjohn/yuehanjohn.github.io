"use client";
import React, { useState, useEffect, useRef } from "react";
import { Button } from "@heroui/button";
import ReactPlayer from "react-player";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/react";
import { FaCircle } from "react-icons/fa6";
import Counter from "@/components/text/counter";
import { getLinesOfCodes, getDrankedCoffee } from "@/hooks/math";
import { ProgressiveBlur } from "@/components/effects/progressive-blur";
import { Image } from "@heroui/react";
import Marquee from "@/components/container/marquee";
import ScrollVelocity from "@/components/container/Scrollvelocity";
import { ImageHero,Schedule } from "@/components/imageparallax/imagehero";

const TestPage: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const videoContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <div>
      <div
        className="flex flex-row justify-between w-full items-center gap-4"
        style={{ display: "flex", alignItems: "center" }}
      >
        <span
          className="flex-none font-bebas m-0 p-0"
          style={{
            fontSize: "min(300px, 20vw)",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            marginTop: "-20px",
            marginBottom: "-48px",
            padding: 0,
            lineHeight: 1,
            letterSpacing: 0,
            verticalAlign: "middle",
            fontFeatureSettings: "liga",
            maxWidth: "100%",
            maxHeight: "calc(1em + 60px)",
            display: "inline-block",
            position: "relative",
            // Add a fade effect using a linear-gradient mask
          }}
        >
          Yuehan John
          <span
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%) rotate(-10deg)",
              width: "100%",
              height: "50px",
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
        <div className="flex flex-col items-center w-full justify-center">
          <div className="flex flex-col items-start gap-4">
            <p className="text-4xl font-nunito text-left">
              Hirable Ex-AI Founder
            </p>
            <Button>Hire now</Button>
          </div>
        </div>
      </div>
      <div
        ref={videoContainerRef}
        style={{
          position: "relative",
          width: "100%",
          paddingTop: "56.25%" /* 16:9 aspect ratio */,
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
            pointerEvents: "none",
            objectFit: "cover",
          }}
        />

        {/* Overlay Cards */}
        <div
          className="absolute flex flex-col gap-4 m-8"
          style={{
            ...getCardPosition(0),
            width: "350px",
            zIndex: 10,
          }}
        >
          <Card className=" shadow-lg" isBlurred>
            <CardHeader className="gap-2">
              <FaCircle className="text-primary" />
              <h3 className="text-xl font-bold">Written code</h3>
            </CardHeader>
            <CardBody className="pt-0">
              <span className="text-4xl font-bold text-foreground gap-2">
                <Counter targetValue={getLinesOfCodes()} />+
                <span className="ml-1">Lines</span>
              </span>
            </CardBody>
          </Card>

          <Card className=" shadow-lg" isBlurred>
            <CardHeader className="gap-2">
              <FaCircle className="text-accent" />
              <h3 className="text-xl font-bold">Contributed project</h3>
            </CardHeader>
            <CardBody className="pt-0">
              <span className="text-4xl font-bold text-foreground gap-2">
                <Counter targetValue={20} />+<span className="ml-1"></span>
              </span>
            </CardBody>
          </Card>
          <Card className=" shadow-lg" isBlurred>
            <CardHeader className="gap-2">
              <FaCircle className="text-secondary" />
              <h3 className="text-xl font-bold">Consumed Coffee</h3>
            </CardHeader>
            <CardBody className="pt-0">
              <span className="text-4xl font-bold text-foreground gap-2">
                <Counter targetValue={getDrankedCoffee()} />+
                <span className="ml-1">Cups</span>
              </span>
            </CardBody>
          </Card>
        </div>
      </div>

      <div className="relative h-38 py-8 w-full overflow-hidden">
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
              style={{ height: "80px", minWidth: "120px" }}
            >
              <Image
                alt="Company Logo"
                src={`/assets/logos/worked/${logo}`}
                className="object-contain rounded-none"
                style={{ maxHeight: "64px", maxWidth: "100px" }}
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

      {/* Works */}
      <div>
        {/* <div className="mt-20">
          <span
            className="flex-none font-bebas m-0 p-0"
            style={{
              fontSize: "min(128px, 20vw)",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              // marginTop: "-20px",
              // marginBottom: "-48px",
              padding: 0,
              lineHeight: 1,
              letterSpacing: 0,
              verticalAlign: "middle",
              fontFeatureSettings: "liga",
              maxWidth: "100%",
              // maxHeight: "calc(1em + 60px)",
              display: "inline-block",
              position: "relative",
              // Add a fade effect using a linear-gradient mask
            }}
          >
            Works
            <span
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%) rotate(-10deg)",
                width: "100%",
                height: "50px",
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
        </div> */}
        
        <ImageHero />
        <Schedule />
      </div>

      <div className="mt-20">
        <span
          className="flex-none font-bebas m-0 p-0"
          style={{
            fontSize: "min(128px, 20vw)",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            // marginTop: "-20px",
            // marginBottom: "-48px",
            padding: 0,
            lineHeight: 1,
            letterSpacing: 0,
            verticalAlign: "middle",
            fontFeatureSettings: "liga",
            maxWidth: "100%",
            // maxHeight: "calc(1em + 60px)",
            display: "inline-block",
            position: "relative",
            // Add a fade effect using a linear-gradient mask
          }}
        >
          Capabilities
          <span
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%) rotate(-10deg)",
              width: "100%",
              height: "50px",
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

      <div className="mt-20">
        <span
          className="flex-none font-bebas m-0 p-0"
          style={{
            fontSize: "min(128px, 20vw)",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            // marginTop: "-20px",
            // marginBottom: "-48px",
            padding: 0,
            lineHeight: 1,
            letterSpacing: 0,
            verticalAlign: "middle",
            fontFeatureSettings: "liga",
            maxWidth: "100%",
            // maxHeight: "calc(1em + 60px)",
            display: "inline-block",
            position: "relative",
            // Add a fade effect using a linear-gradient mask
          }}
        >
          Contact
          <span
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%) rotate(-10deg)",
              width: "100%",
              height: "50px",
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
    </div>
  );
};

export default TestPage;
