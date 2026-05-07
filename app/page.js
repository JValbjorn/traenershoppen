"use client";
import { motion } from "motion/react";
import Image from "next/image";
import CTAButton from "@/components/CTAButton";
import Fan from "@/components/Fan";
import AnimatedImage from "@/components/AnimatedImage";

export default function Home() {
  return (
    <section className="relative">
      <div>
        <Fan />
        <Image
          src="/img/hero-soccer-ball.png"
          alt="Fodbold"
          width={150}
          height={100}
          className="absolute top-[5%] left-[10%]"
        />
        <Image
          src="/img/hero-soccer-ball.png"
          alt="Håndbold"
          width={150}
          height={100}
          className="absolute top-[2%] left-[50%] translate-x-[-50%]"
        />
        <Image
          src="/img/hero-soccer-ball.png"
          alt="Tøj"
          width={150}
          height={100}
          className="absolute top-[5%] right-[10%]"
        />
      </div>
      <main className="flex flex-1 w-full flex-col items-center justify-between pt-100 pb-32 px-16 font-sans bg-var(--light_gray) dark:var(--light-gray) sm:items-start">
        <section className="relative w-full flex flex-row items-center justify-center gap-40 text-center  sm:items-start sm:text-left ">
          <CTAButton
            text="Fodbold"
            onClick={() => console.log("Fodbold clicked")}
          />
          <CTAButton
            text="Håndbold"
            onClick={() => console.log("Håndbold clicked")}
          />
          <CTAButton text="Tøj" onClick={() => console.log("Tøj clicked")} />
        </section>
        <section className=" z-2 relative">
          {/* <AnimatedImage /> */}
          <Image
            src="/img/hero-soccer-ball.png"
            alt="Animated Soccer Ball"
            width={500}
            height={300}
            className="absolute "
          />
        </section>
      </main>
      <div className="flex flex-col flex-1 items-center justify-center bg-var(--light_gray) font-sans dark:bg-var(--light-gray) h-250 z-10"></div>
    </section>
  );
}
