import { ReactLenis } from "lenis/dist/lenis-react";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import { SiSpacex } from "react-icons/si";
import { FiArrowRight, FiMapPin } from "react-icons/fi";
import { useRef } from "react";
import { Card, CardBody, CardHeader, Image } from "@heroui/react";
import Counter from "@/components/text/counter";
import { getLinesOfCodes, getDrankedCoffee } from "@/hooks/math";
import { FaCircle } from "react-icons/fa6";

const SECTION_HEIGHT = 1500;

export const ImageHero = () => {
  return (
    <div
      style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
      className="relative w-full"
    >
      <CenterImage />

      <ParallaxImages />

      <div className="absolute bottom-0 left-0 right-0 h-96  from-zinc-950/0 to-zinc-950" />
    </div>
  );
};
const CenterImage = () => {
  // Get the current scroll position (vertical)
  const { scrollY } = useScroll();

  // Calculate when the 3rd section (ParallaxImages) is in view
  // Each section is roughly SECTION_HEIGHT tall, so trigger at 2 * SECTION_HEIGHT
  const triggerStart = 1.5 * SECTION_HEIGHT;
  const triggerEnd = triggerStart + 1500;

  // Map scroll position to polygon clip path coordinates
  const clip1 = useTransform(scrollY, [triggerStart, triggerEnd], [25, 0]);
  const clip2 = useTransform(scrollY, [triggerStart, triggerEnd], [75, 100]);

  // Create a dynamic CSS clip-path polygon string
  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

  // Animate background image size (zoom out effect)
  const backgroundSize = useTransform(
    scrollY,
    [triggerStart, triggerEnd + 500],
    ["170%", "100%"]
  );
  // Animate opacity (fade out effect)
  const opacity = useTransform(scrollY, [triggerEnd, triggerEnd + 500], [1, 0]);

  return (
    // Render a sticky, full-screen div with animated styles
    <motion.div
      className="sticky top-0 h-screen w-full"
      style={{
        clipPath,
        backgroundSize,
        opacity,
        backgroundImage: "url(/assets/images/speechtest.png)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
};
//

const ParallaxImages = () => {
  return (
    <div className="mx-auto max-w-5xl px-4 pt-[200px]">
      <ParallaxImg alt="Written code" start={-200} end={200} className="w-1/3">
        <Card className=" shadow-lg bg-background/30" isBlurred>
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
      </ParallaxImg>
      <ParallaxImg
        src="assets/images/award.jpg"
        alt="An example of a space launch"
        start={200}
        end={-250}
        className="mx-auto w-2/3"
      />

      <ParallaxImg
        alt="Written code"
        start={-200}
        end={200}
        className="ml-auto w-1/3"
      >
        <Card className=" shadow-lg bg-background/30" isBlurred>
          <CardHeader className="gap-2">
            <FaCircle className="text-accent" />

            <h3 className="text-xl font-bold">Written code</h3>
          </CardHeader>
          <CardBody className="pt-0">
            <span className="text-4xl font-bold text-foreground gap-2">
              <Counter targetValue={getLinesOfCodes()} />+
              <span className="ml-1">Lines</span>
            </span>
          </CardBody>
        </Card>
      </ParallaxImg>

      <ParallaxImg
        alt="Written code"
        start={0}
        end={-500}
        className="ml-24 w-5/12"
      >
        <Card className=" shadow-lg bg-background/30" isBlurred>
          <CardHeader className="gap-2">
            {" "}
            <FaCircle className="text-accent" />
            <h3 className="text-xl font-bold">Consumed Coffee</h3>
          </CardHeader>
          <CardBody className="pt-0">
            <span className="text-4xl font-bold text-foreground gap-2">
              <Counter targetValue={getDrankedCoffee()} />+
              <span className="ml-1">Cups</span>
            </span>
          </CardBody>
        </Card>
      </ParallaxImg>
    </div>
  );
};

const ParallaxImg = ({
  className,
  alt,
  src,
  start,
  end,
  children,
}: {
  className?: string;
  alt?: string;
  src?: string;
  start: number;
  end: number;
  children?: React.ReactNode;
}) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    // @ts-ignore
    offset: [`${start}px end`, `end ${end * -1}px`],
  });

  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);

  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  return (
    <motion.div className={className} ref={ref} style={{ transform, opacity }}>
      {children ? children : src ? <img src={src} alt={alt} /> : null}
    </motion.div>
  );
};

export const Schedule = () => {
  return (
    <section id="launch-schedule" className="mx-auto max-w-5xl px-4 py-48">
      <motion.h1
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="mb-20 text-4xl font-black uppercase"
      >
        <div className="mt-20">
          <span
            className="flex-none font-bebas m-0 p-0"
            style={{
              fontSize: "min(64px, 20vw)",
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
                top: "60%",
                transform: "translate(-50%, -50%) rotate(-10deg)",
                width: "100%",
                height: "20px",
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
      </motion.h1>
      <ScheduleItem title="NG-21" date="Dec 9th" location="Florida" />
      <ScheduleItem title="Starlink" date="Dec 20th" location="Texas" />
      <ScheduleItem title="Starlink" date="Jan 13th" location="Florida" />
      <ScheduleItem title="Turksat 6A" date="Feb 22nd" location="Florida" />
      <ScheduleItem title="NROL-186" date="Mar 1st" location="California" />
      <ScheduleItem title="GOES-U" date="Mar 8th" location="California" />
      <ScheduleItem title="ASTRA 1P" date="Apr 8th" location="Texas" />
    </section>
  );
};

const ScheduleItem = ({
  title,
  date,
  location,
}: {
  title: string;
  date: string;
  location: string;
}) => {
  return (
    <motion.div
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      className="mb-9 flex items-center justify-between border-b border-zinc-800 px-3 pb-9"
    >
      <div>
        <p className="mb-1.5 text-xl ">{title}</p>
        <p className="text-sm uppercase text-zinc-500">{date}</p>
      </div>
      <div className="flex items-center gap-1.5 text-end text-sm uppercase text-zinc-500">
        <p>{location}</p>
        <FiMapPin />
      </div>
    </motion.div>
  );
};
