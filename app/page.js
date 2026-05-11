"use client";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import CTAButton from "@/components/CTAButton";
import Fan from "@/components/Fan";
import HomePageArch from "@/components/HomePageArch";

export default function Home() {
  const router = useRouter();

  return (
    <main className="relative overflow-hidden flex flex-col">
      <div className="absolute 2xl:top-[-26%] xl:top-[-24%] lg:top-[-21%] md:top-[-18%] md:flex z-0 w-[120vw] left-[-10vw] h-auto hidden">
        <Fan />
      </div>
      <section className="flex justify-center 2xl:mt-[50vh] xl:mt-[42vh] lg:mt-[35vh] md:mt-[25vh]">
        <Image
          src="/img/hero-soccer-ball.png"
          alt="Fodbold"
          width={150}
          height={150}
          className="absolute top-[9%] left-[10%] w-1/10"
        />
        <Image
          src="/img/hero-soccer-ball.png"
          alt="Håndbold"
          width={150}
          height={150}
          className="absolute top-[5%] left-[50%] w-1/10 translate-x-[-50%]"
        />
        <Image
          src="/img/hero-soccer-ball.png"
          alt="Tøj"
          width={150}
          height={150}
          className="absolute top-[9%] right-[10%] w-1/10"
        />
        <div className="relative w-2/3 flex md:flex-row flex-col items-center justify-around shrink text-center">
          <CTAButton text="Fodbold" onClick={() => router.push("/fodbold")} />
          <CTAButton
            text="Håndbold"
            onClick={() => router.push("/haandbold")}
          />
          <CTAButton text="Tøj" onClick={() => router.push("/toej")} />
        </div>
      </section>
      <section className="relative flex flex-1 w-full flex-col items-center justify-between pb-32 px-16 font-sans bg-var(--light_gray) sm:items-start">
        <section className="w-full h-250 z-2 relative flex">
          <motion.div className="cls-5 fill-white w-3/7 h-auto absolute -left-10 2xl:top-[10%] xl:top-[23%] lg:top-[15%] md:top-[10%]">
            <HomePageArch />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, translateY: 50 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ delay: 1, duration: 2, ease: "easeInOut" }}
          >
            <Image
              src="/img/hero-soccer-ball.png"
              alt="Animated Soccer Ball"
              width={800}
              height={800}
              className="absolute right-[-15%] 2xl:top-[10%] xl:top-[23%] lg:top-[15%] md:top-[10%] w-1/2 "
            />
          </motion.div>
        </section>
      </section>
      <div className="flex flex-col flex-1 items-center justify-center bg-var(--light_gray) font-sans dark:bg-var(--light-gray) h-250 z-10"></div>
    </main>
  );
}
