"use client";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";
import Image from "next/image";
import CTAButton from "@/components/CTAButton";
import Fan from "@/components/Fan";
import HomePageArch from "@/components/HomePageArch";
import HomePageImage from "@/components/HomePageImage";
import Parallellogram from "../components/Parallellogram";

export default function Home() {
  const router = useRouter();

  return (
    <main className="relative overflow-hidden flex flex-col">
      <div className="absolute 2xl:top-[-26%] xl:top-[-24%] lg:top-[-21%] md:top-[-18%] md:flex z-0 w-[120vw] left-[-10vw] h-auto hidden">
        <Fan />
      </div>
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
          className="absolute top-[5%] left-[50%] w-1/10 translate-x-[-50%]"
          initial={{ opacity: 0, translateY: 100}}
          animate={{ opacity: 1, translateY: 0}}
          transition={{ delay: 0.7, duration: 0.3, ease: "easeInOut" }}
        >
          <Image
            src="/img/hero-soccer-ball.png"
            alt="Håndbold"
            width={150}
            height={150}
          />
        </motion.div>
        <motion.div
          className="absolute top-[9%] right-[10%] w-1/10"
          initial={{ opacity: 0, translateY: 50, translateX: -100 }}
          animate={{ opacity: 1, translateY: 0, translateX: 0 }}
          transition={{ delay: 0.7, duration: 0.3, ease: "easeInOut" }}
        >
          <Image
            src="/img/hero-soccer-ball.png"
            alt="Tøj"
            width={150}
            height={150}
          />
        </motion.div>

        <motion.div
          className="relative w-2/3 flex md:flex-row flex-col items-center justify-around shrink text-center"
          initial={{ opacity: 0, translateY: 50 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ delay: 1, duration: 0.5, ease: "easeInOut" }}
        >
          <CTAButton text="Fodbold" onClick={() => router.push("/fodbold")} />
          <CTAButton
            text="Håndbold"
            onClick={() => router.push("/haandbold")}
          />
          <CTAButton text="Tøj" onClick={() => router.push("/toej")} />
        </motion.div>
      </section>
      <section className="relative grid grid-cols-3 grid-auto-rows gap-60 w-full items-center justify-between -mt-20 pb-32 px-16 font-sans bg-var(--light_gray) sm:items-start">
        <section className="col-span-3 h-220 z-2 relative flex">
          <HomePageArch />
          <HomePageImage />
        </section>
        <section className="col-span-2 col-start-2 flex flex-col w-full">
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
        </section>
        <section className="flex flex-col w-full col-span-2 col-start-1">
          <h2 className="text-4xl">BESTSELLERS</h2>
          <div className="flex flex-row justify-around w-full">
            <div className="bg-light-green w-25 h-10"></div>
            <div className="bg-light-green w-25 h-10"></div>
            <div className="bg-light-green w-25 h-10"></div>
            <div className="bg-light-green w-25 h-10"></div>
          </div>
        </section>
      </section>
    </main>
  );
}
