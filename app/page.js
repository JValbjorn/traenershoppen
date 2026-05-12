"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import CTAButton from "@/components/CTAButton";
import Fan from "@/components/Fan";
import HomePageArch from "@/components/HomePageArch";
import HomePageImage from "@/components/HomePageImage";

export default function Home() {
  const router = useRouter();

  return (
    <main className="relative overflow-hidden flex flex-col h-500">
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
      <section className="relative flex flex-1 w-full flex-col items-center justify-between -mt-20 pb-32 px-16 font-sans bg-var(--light_gray) sm:items-start">
        <section className="w-full h-220 z-2 relative flex">
          <HomePageArch />
          <HomePageImage />
        </section>
        <section className="flex flex-col w-full">
          <h2>POPULÆRE KATEGORIER</h2>
          <div className="flex flex-row justify-around w-full">
            <div className="bg-light-green w-25 h-10"></div>
            <div className="bg-light-green w-25 h-10"></div>
            <div className="bg-light-green w-25 h-10"></div>
            <div className="bg-light-green w-25 h-10"></div>
          </div>
        </section>
        <section className="flex flex-col w-full">
          <h2>BESTSELLERS</h2>
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
