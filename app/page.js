"use client";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";
import Image from "next/image";
import CTAButton from "@/components/CTAButton";
import Fan from "@/components/Fan";
import HomePageArch from "@/components/HomePageArch";
import HomePageImage from "@/components/HomePageImage";
import Parallellogram from "../components/Parallellogram";
import FadeInWrapper from "../components/FadeInWrapper";

export default function Home() {
  const router = useRouter();

  return (
    <main className="relative overflow-hidden flex flex-col pb-[10vh]">
      <Fan />
      <section className="flex justify-center 2xl:mt-[50vh] xl:mt-[42vh] lg:mt-[35vh] md:mt-[25vh]">
        <motion.div
          className="absolute top-[9%] left-[10%] w-1/10"
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
          className="absolute top-[5%] left-[50%] w-1/8 translate-x-[-50%]"
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
          className="absolute top-[7%] right-[10%] w-1/6"
          initial={{ opacity: 0, translateY: 50, translateX: -100 }}
          animate={{ opacity: 1, translateY: 0, translateX: 0 }}
          transition={{ delay: 0.7, duration: 0.3, ease: "easeInOut" }}
        >
          <Image
            src="/img/shirt.png"
            alt="Tøj"
            width={250}
            height={250}
          />
        </motion.div>

        <motion.div
          className="relative w-2/3 flex md:flex-row flex-col items-center justify-around shrink text-center z-3"
          initial={{ opacity: 0, translateY: 50 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ delay: 0.9, duration: 0.3, ease: "easeInOut" }}
        >
          <CTAButton text="Fodbold" path="/fodbold" />
          <CTAButton
            text="Håndbold"
           path="/haandbold"
          />
          <CTAButton text="Tøj" path="toej" />
        </motion.div>
      </section>
      <section className="relative grid grid-cols-3 grid-auto-rows gap-55 w-full items-center justify-between -mt-20 pb-32 px-16 font-sans bg-var(--light_gray) sm:items-start">
        <FadeInWrapper
          className="col-span-3 h-220 z-2 relative flex"
          amount={0.5}
        >
          <HomePageArch />
          <HomePageImage />
        </FadeInWrapper>
        <FadeInWrapper
          className="col-span-2 col-start-2 flex flex-col w-full"
          amount={0.4}
        >
          <h2 className="text-4xl">POPULÆRE KATEGORIER</h2>
          <div className="flex flex-row justify-around w-full">
            <Parallellogram
              text="Fodbolde"
              onClick={() => router.push("/fodbold/bolde")}
            />
            <Parallellogram
              text="Fodbolde"
              onClick={() => router.push("/fodbold/bolde")}
            />{" "}
            <Parallellogram
              text="Fodbolde"
              onClick={() => router.push("/fodbold/bolde")}
            />{" "}
            <Parallellogram
              text="Fodbolde"
              onClick={() => router.push("/fodbold/bolde")}
            />{" "}
            <Parallellogram
              text="Fodbolde"
              onClick={() => router.push("/fodbold/bolde")}
            />
          </div>
        </FadeInWrapper>
        <FadeInWrapper
          className="flex flex-col w-full col-span-2 col-start-1 mt-40"
          amount={0.4}
        >
          <h2 className="text-4xl">BESTSELLERS</h2>
          <div className="flex flex-row justify-between w-full mt-10">
            <div className="bg-light-green w-25 h-10"></div>
            <div className="bg-light-green w-25 h-10"></div>
            <div className="bg-light-green w-25 h-10"></div>
            <div className="bg-light-green w-25 h-10"></div>
          </div>
        </FadeInWrapper>
      </section>
    </main>
  );
}
