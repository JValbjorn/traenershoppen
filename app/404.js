"use client";

import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray">
      <div>
        <img src="/offsite.png" alt="Off-site" className="w-64 mb-8" />
      </div>
      <div>
        <h1 className="text-4xl text-black font-bold mb-4">OFF-SITE!</h1>
        <p className="text-lg text-black-600">
          Vi beklager, men denne sidde er ikke klar til at komme på banen endnu
        </p>
        <p className="text-lg text-black-600">
          Vi gør vores bedste for at blive kampklar hurtigst muligt
        </p>
        <button
          onClick={() => router.back()}
          className="mt-6 px-4 py-2 bg-orange text-black hover:bg-black hover:text-orange transition duration-300"
        >
          Tilbage til forrige side
        </button>
      </div>
    </div>
  );
}
