"use client"; 

import Link from "next/link";
import CTAButton from "@/components/CTAButton";
import CartPreview from "@/components/CartPreview";
import CheckoutNav from "@/components/CheckoutNav";

export default function Kontakt() {
    return (
        <div className="flex flex-row gap-4 px-30 py-20 justify-between"> 
            <div className="flex flex-row gap-10">
                <Link href="/checkout/levering">Tilbage</Link>
                <article>
                    {/*CheckoutNav er navigation mellem steps */}
                    <CheckoutNav />
                    <div className="flex flex-row justify-between mt-5">
                        <button onClick={() => {console.log("Shop videre er trykket")}} className="bg-none border-2 text-black font-bold min-w-40 px-6 py-3 hover:bg-black hover:text-white transition-colors duration-30">Tilbage til levering</button>
                        <CTAButton text="Bestil" onClick={() => {}} />
                    </div>
                </article>
            </div>
            <article>
                <CartPreview/>
            </article>
        </div>
    );

}