"use client";
import { useNavigate } from "@/utils/navigate";
import { motion } from "motion/react";

import Image from "next/image";

//Components
import CTAButton from "@/components/CTAButton";
import Fan from "@/components/Fan";
import HomePageArch from "@/components/HomePageArch";
import HomePageImage from "@/components/HomePageImage";
import Parallellogram from "../components/Parallellogram";
import FadeInWrapper from "../components/FadeInWrapper";
import BestsellerList from "../components/BestsellerList";

export default function Home() {
  const navigate = useNavigate();

  return (
    <main className="relative overflow-hidden flex flex-col pb-[10vh]">
      <Fan />
      <section className="grid grid-cols-7 grid-rows-5 gap-5 mt-10 justify-items-center h-auto">
        <motion.div
          className="col-start-2 row-start-2 row-span-2 z-4 self-center"
          initial={{ opacity: 0, translateY: 50, translateX: 100 }}
          animate={{ opacity: 1, translateY: 0, translateX: 0 }}
          transition={{ delay: 0.7, duration: 0.3, ease: "easeInOut" }}
        >
          <Image
            src="/img/hero-soccer-ball.png"
            alt="Fodbold"
            width={150}
            height={150}
          />
        </motion.div>
        <motion.div
          className="col-start-4 row-start-1 row-span-2 z-4 self-center"
          initial={{ opacity: 0, translateY: 100 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ delay: 0.7, duration: 0.3, ease: "easeInOut" }}
        >
          <Image
            src="/img/handball.png"
            alt="Håndbold"
            width={190}
            height={190}
          />
        </motion.div>
        <motion.div
          className="col-start-6 row-start-2 row-span-2 z-4 self-center"
          initial={{ opacity: 0, translateY: 50, translateX: -100 }}
          animate={{ opacity: 1, translateY: 0, translateX: 0 }}
          transition={{ delay: 0.7, duration: 0.3, ease: "easeInOut" }}
        >
          <Image src="/img/shirt.png" alt="Tøj" width={250} height={250} />
        </motion.div>
        <FadeInWrapper
          className="z-5 col-start-2 xl:row-start-5 md:row-start-4 h-2/3"
          delay={0.9}
          duration={0.3}
        >
          <CTAButton text="Fodbold" path="/fodbold" />
        </FadeInWrapper>

        <FadeInWrapper
          className="z-5 col-start-4 xl:row-start-5 md:row-start-4 h-2/3"
          delay={0.9}
          duration={0.3}
        >
          <CTAButton text="Håndbold" path="/haandbold" />
        </FadeInWrapper>

        <FadeInWrapper
          className="z-5 col-start-6 xl:row-start-5 md:row-start-4 h-2/3"
          delay={0.9}
          duration={0.3}
        >
          <CTAButton text="Tøj" path="toej" />
        </FadeInWrapper>

        <motion.div
          className="relative w-full col-span-5 col-start-2 row-start-4 grid grid-cols-3 gap-60 lg:gap-50 text-center h-2/3 z-3"
          initial={{ opacity: 0, translateY: 50 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ delay: 0.9, duration: 0.3, ease: "easeInOut" }}
        ></motion.div>
      </section>
      <section className="relative grid grid-cols-3 grid-auto-rows 2xl:gap-55 xl:gap-50 lg:gap-30 md:gap-20 w-full items-center justify-between pb-32 px-16 font-sans bg-var(--light_gray) sm:items-start 2xl:-mt-5 xl:-mt-35 lg:-mt-25 md:-mt-20">
        <FadeInWrapper
          className="col-span-3 xl:h-220 lg:h-190 md:h-130 z-2 relative flex"
          amount={0.5}
          duration={0.5}
        >
          <HomePageArch />
          <HomePageImage />
        </FadeInWrapper>
        <FadeInWrapper
          className="col-span-2 col-start-2 flex flex-col w-full"
          amount={0.4}
          duration={0.5}
        >
          <h2 className="text-4xl">POPULÆRE KATEGORIER</h2>
          <div className="flex flex-row justify-around w-full">
            <Parallellogram
              text="Fodbolde"
              path="/produkter/fodbold/fodboldudstyr/bolde"
            />
            <Parallellogram
              text="Fodbolde"
              path="/produkter/fodbold/fodboldudstyr/bolde"
            />
            <Parallellogram
              text="Fodbolde"
              path="/produkter/fodbold/fodboldudstyr/bolde"
            />
            <Parallellogram
              text="Fodbolde"
              path="/produkter/fodbold/fodboldudstyr/bolde"
            />
            <Parallellogram
              text="Fodbolde"
              path="/produkter/fodbold/fodboldudstyr/bolde"
            />
          </div>
        </FadeInWrapper>
        <FadeInWrapper
          className="flex flex-col w-full col-span-2 col-start-1 mt-40"
          amount={0.4}
          duration={0.5}
        >
          <h2 className="text-4xl">BESTSELLERS</h2>
          <BestsellerList />
        </FadeInWrapper>
      </section>
    </main>
  );
}
