"use client";

import Link from "next/link";
import CTAButton from "@/components/CTAButton";
import { useRouter } from "next/navigation";
import CartPreview from "@/components/CartPreview";
import { UserInfo } from "@/components/UserInfo";
import CheckoutNav from "@/components/CheckoutNav";
import Image from "next/image";
import Notification from "@/components/Notification";
import { useState } from "react";
import OptionsCheckout from "@/components/OptionsCheckout";

export default function Kontakt() {
  const router = useRouter();
  const [showNotification, setShowNotification] = useState(false);

  return (
    <div className="flex flex-row gap-4 px-30 py-20 justify-between">
      <div className="flex flex-row gap-10">
        <Link href="/checkout/kontakt">Tilbage</Link>
        <article>
          {/*CheckoutNav er navigation mellem steps */}
          <CheckoutNav />
          <div className="flex flex-col justify-between mt-5">
            <div>
              {/* Userinfo displayer brugeren intastede data*/}
              <div className="flex flex-row gap-2 items-center">
                <Image
                  src="/img/edit-button.png"
                  alt="Description"
                  width={15}
                  height={15}
                  onClick={() => {
                    setShowNotification(true);
                  }}
                />
              </div>
              <UserInfo />
              <article className="mt-10">
                <h3>Levering</h3>
                <OptionsCheckout />
              </article>
            </div>
            <div className="flex flex-row justify-between mt-5">
              <button
                onClick={() => {
                  console.log("Shop videre er trykket");
                  router.push("/checkout/kontakt");
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
        <CartPreview />
      </article>

      {/* Notification til at vise fejlmeddelelser */}
      {showNotification && (
        <Notification
          text="Dine Oplysninger kan desværre ikke redigeres på nuværende tidspunkt, gå til Oplysninger for at ændre dem"
          color="bg-red-500"
          onClose={() => setShowNotification(false)}
        />
      )}
    </div>
  );
}
