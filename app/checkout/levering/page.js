"use client";

import Link from "next/link";
import CTAButton from "@/components/CTAButton";
import { useRouter } from "next/navigation";
import CartPreview from "@/components/CartPreview";
import { UserInfo } from "@/components/UserInfo";
import CheckoutNav from "@/components/CheckoutNav";

export default function Kontakt() {
  const router = useRouter();

  return (
    <div className="flex flex-row gap-4 px-30 py-20 justify-between">
      <div className="flex flex-row gap-10">
        <Link href="/checkout/kontakt">Tilbage</Link>
        <article>
          {/*CheckoutNav er navigation mellem steps */}
          <CheckoutNav />
          <div className="flex flex-col justify-between mt-5">
            <div>
              {/* Her skal der laves en funktion der gemmer de indtastede oplysninger i en global state, så de kan bruges på betalings siden */}
              <UserInfo />
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
          </div>
        </article>
      </div>
      <article>
        <CartPreview/>
      </article>
    </div>
  );
}
