"use client";

import Link from "next/link";
import CTAButton from "@/components/CTAButton";
import { useRouter } from "next/navigation";

export default function Kontakt() {
  const router = useRouter();

  return (
    <div className="flex flex-row gap-4 px-30 py-20 justify-between">
      <div className="flex flex-row gap-10">
        <Link href="/checkout/kontakt">Tilbage</Link>
        <article>
          <div className="flex flex-row mb-5 justify-start gap-15">
            <Link
              className="bg-none border-black text-black "
              href="/checkout/kontakt"
            >
              Oplysninger
            </Link>
            <Link
              className="bg-none border-black text-black "
              href="/checkout/levering"
            >
              Levering
            </Link>
            <Link
              className="bg-none border-black text-black "
              href="/checkout/betaling"
            >
              Betaling
            </Link>
          </div>
          <div className="flex flex-row justify-between mt-5">
            <button
              onClick={() => {
                console.log("Shop videre er trykket");
              }}
              className="bg-none border-2 text-black font-bold min-w-40 px-6 py-3 hover:bg-black hover:text-white transition-colors duration-30"
            >
              Tilbage til kontakt oplysninger
            </button>
            <CTAButton
              text="Gå til betaling"
              onClick={() => router.push("/checkout/betaling")}
            />
          </div>
        </article>
      </div>
      <article>
        <h1>Din Kurv</h1>
        <p>Din kurv er tom</p>
      </article>
    </div>
  );
}
