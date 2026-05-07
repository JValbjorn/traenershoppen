"use client";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import CTAButton from "@/components/CTAButton";
import Fan from "@/components/Fan";
import HomePageArch from "@/components/HomePageArch";
import AnimatedImage from "@/components/AnimatedImage";

export default function Home() {
  const router = useRouter();

  return (
    <main className="relative overflow-hidden">
      <section>
        <Fan />
        <Image
          src="/img/hero-soccer-ball.png"
          alt="Fodbold"
          width={150}
          height={150}
          className="absolute top-[5%] left-[10%] w-1/10"
        />
        <Image
          src="/img/hero-soccer-ball.png"
          alt="Håndbold"
          width={150}
          height={150}
          className="absolute top-[2%] left-[50%] w-1/10 translate-x-[-50%]"
        />
        <Image
          src="/img/hero-soccer-ball.png"
          alt="Tøj"
          width={150}
          height={150}
          className="absolute top-[5%] right-[10%] w-1/10"
        />
        <div className="relative w-full flex md:flex-row flex-col 2xl:mt-[45vh] xl:mt-[40vh] lg:mt-[30vh] md:mt-[23vh] items-center justify-around shrink text-center">
          <CTAButton text="Fodbold" onClick={() => router.push("/fodbold")}/>
          <CTAButton
            text="Håndbold"
            onClick={() => router.push("/haandbold")}
          />
          <CTAButton text="Tøj" onClick={() => router.push("/toej")} />
        </div>
      </section>
      <section className="relative flex flex-1 w-full flex-col items-center justify-between pb-32 px-16 font-sans bg-var(--light_gray) sm:items-start">
        <section className="w-full h-250 z-2 relative">
          <div>
            <HomePageArch />
          </div>
          {/* <AnimatedImage /> */}
          <Image
            src="/img/hero-soccer-ball.png"
            alt="Animated Soccer Ball"
            width={800}
            height={800}
            className="absolute top-[20%] right-[-15%] w-1/2 2xl:top-[22%] xl:top-[20%] lg:top-[10%] md:top-[0%]"
          />
        </section>
      </section>
      <div className="flex flex-col flex-1 items-center justify-center bg-var(--light_gray) font-sans dark:bg-var(--light-gray) h-250 z-10"></div>
    </main>
  );
}
