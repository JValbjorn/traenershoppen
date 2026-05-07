"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

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
        <h1 className="text-4xl text-gray-900 font-bold mb-4">OFF-SITE!</h1>
        <p className="text-lg text-gray-600">
          Vi beklager, men denne sidde er ikke klar til at komme på banen endnu
        </p>
        <p className="text-lg text-gray-600 mt-2">
          Vi gør vores bedste for at blive kampklar hurtigst muligt
        </p>
        <button
          type="button"
          onClick={() => router.back()}
          className="mt-6 px-4 py-2 bg-orange-500 text-white hover:bg-orange-600 transition duration-300 inline-block"
        >
          Tilbage til forrige side
        </button>
      </div>
    </div>
  );
}
