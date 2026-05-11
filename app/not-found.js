"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import CTAButton from "@/components/CTAButton";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-10 h-screen bg-gray-100 px-4 py-10">
      <div>
        <Image
          src="/img/off-site.png"
          alt="Off-site illustration"
          width={450}
          height={450}
          className="w-full h-auto"
          sizes="(max-width: 768px) 90vw, 450px"
        />
      </div>
      <div className="flex flex-col items-center text-center max-w-[75vw] md:items-start md:text-left md:max-w-xl">
        <h1 className="text-4xl text-black font-bold mb-4">OFF-SITE!</h1>
        <p className="text-lg text-black mb-1">
          Vi beklager, men denne sidde er ikke klar til at komme på banen endnu
        </p>
        <p className="text-lg text-black mt-1 mb-4">
          Vi gør vores bedste for at blive kampklar hurtigst muligt
        </p>
        <CTAButton
          text="Tilbage til forrige side"
          onClick={() => router.back()}
        />
      </div>
    </div>
  );
}
