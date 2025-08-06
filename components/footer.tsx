"use client";

import { Card, CardBody } from "@heroui/react";
import React from "react";
import { FaChevronRight } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaRegCalendarPlus, FaWhatsapp } from "react-icons/fa";

const Footer: React.FC = () => (
  <footer className="min-h-screen justify-between items-center">
    <div className="flex flex-col lg:flex-row lg:flex-nowrap flex-wrap p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
      <div className="flex flex-1 flex-col">
        <div className="mb-8 sm:mb-12 md:mb-16 lg:mb-24 xl:mb-32 gap-2 sm:gap-3 md:gap-4 flex flex-col">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl leading-tight">
            Get in touch. Fast.
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-foreground">
            hirable Ex-AI Founder
          </p>
        </div>
        <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8 md:mb-10 lg:mb-12">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
            Consulting latest AI strategy
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg">
            Architecture decisions, tool selection, and implementation{" "}
            <br className="hidden sm:block" />
            roadmaps based on real development experience.
          </p>
        </div>
        <div className="flex flex-col gap-2 sm:gap-3 md:gap-4">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
            AI Training for professionals
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg">
            Training programs to help sales, marketing, C-level & board.
          </p>
        </div>
      </div>
      
      <div className="flex flex-1 flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-6">
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16 gap-4 sm:gap-6 md:gap-8 flex flex-col">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight">
            Get in touch,
            <br />
            however works for you
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
            Let's not waste any time.
          </p>
        </div>
        
        <Card isHoverable className="w-full">
          <CardBody className="flex flex-col p-3 sm:p-4 md:p-5 lg:p-6">
            <h2 className="text-sm sm:text-base md:text-lg">Email</h2>
            <div className="flex flex-row justify-between items-center gap-2">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl break-all sm:break-normal">
                yuehan.dai.john@gmail.com
              </p>
              <FaChevronRight className="text-xs sm:text-sm md:text-base text-foreground flex-shrink-0" />
            </div>
          </CardBody>
        </Card>
        
        <Card isHoverable className="w-full">
          <CardBody className="flex flex-col p-3 sm:p-4 md:p-5 lg:p-6">
            <h2 className="text-sm sm:text-base md:text-lg">Talk now</h2>
            <div className="flex flex-row justify-between items-center gap-2">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
                +358 040 3633 893
              </p>
              <FaChevronRight className="text-xs sm:text-sm md:text-base text-foreground flex-shrink-0" />
            </div>
          </CardBody>
        </Card>
        
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <Card className="flex-1 min-w-0" isHoverable>
            <CardBody className="p-3 sm:p-4 md:p-5 lg:p-6 flex flex-row gap-2 justify-center items-center">
              <h2 className="text-sm sm:text-base md:text-lg lg:text-xl text-center">Book a call</h2>
            </CardBody>
          </Card>
          
          <div className="flex flex-col xs:flex-row gap-2 sm:gap-3 md:gap-4 flex-[2] min-w-0">
            <Card className="flex-1 min-w-0" isHoverable>
              <CardBody className="p-2 sm:p-3 md:p-4 lg:p-5 flex flex-row gap-1 sm:gap-2 justify-center items-center">
                <h2 className="text-xs sm:text-sm md:text-base lg:text-lg text-center">LinkedIn</h2>
              </CardBody>
            </Card>
            <Card className="flex-1 min-w-0" isHoverable>
              <CardBody className="p-2 sm:p-3 md:p-4 lg:p-5 flex flex-row gap-1 sm:gap-2 justify-center items-center">
                <h2 className="text-xs sm:text-sm md:text-base lg:text-lg text-center">WhatsApp</h2>
              </CardBody>
            </Card>
            <Card className="flex-1 min-w-0" isHoverable>
              <CardBody className="p-2 sm:p-3 md:p-4 lg:p-5 flex flex-row gap-1 sm:gap-2 justify-center items-center">
                <h2 className="text-xs sm:text-sm md:text-base lg:text-lg text-center">Telegram</h2>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </div>
    
    <div className="px-4 sm:px-6 md:px-8 py-4 border-t border-gray-200 dark:border-gray-700">
      <p className="text-xs sm:text-sm md:text-base text-center text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} Your Website Name. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
