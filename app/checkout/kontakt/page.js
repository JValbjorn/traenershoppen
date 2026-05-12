"use client"; 

import Link from "next/link";
import CTAButton from "@/components/CTAButton";

export default function Kontakt() {
    return (
        <div className="flex flex-row gap-4 px-30 py-20 justify-between"> 
            <div className="flex flex-row gap-10">
                <Link href="/produktoversigt">Tilbage</Link>
                <article>
                    <div className="flex flex-row mb-5 justify-start gap-15">
                        <Link className="bg-none border-black text-black " href="/checkout/kontakt">
                            Oplysninger
                        </Link>
                        <Link className="bg-none border-black text-black " href="/checkout/levering">
                            Levering
                        </Link>
                        <Link className="bg-none border-black text-black " href="/checkout/betaling">
                            Betaling
                        </Link>
                    </div>
                    {/* autoComplete er det so mgør google autofyld virker! */}
                    <form className="flex flex-col gap-4">
                        <h3>Kontaktoplysninger</h3>
                        <input type="tel" placeholder="Telefonnummer" autoComplete="tel" />
                        <input type="email" placeholder="Email" autoComplete="email" />
                        <h3>Leveringsadresse</h3>
                        <div className="flex flex-row gap-4">
                            <input type="text" placeholder="Fornavn" autoComplete="given-name" />
                            <input type="text" placeholder="Efternavn" autoComplete="family-name" />
                        </div>
                        <input type="text" placeholder="Adresse" autoComplete="street-address" />
                        <input type="text" placeholder="Postnummer" autoComplete="postal-code" />
                        <input type="text" placeholder="By" autoComplete=" locality" />
                        <input type="text" placeholder="Land" autoComplete="country" />
                        <input type="text" placeholder="Firmanavn (valgfrit)" autoComplete="organization" />
                    </form>
                    <div className="flex flex-row justify-between mt-5">
                        <button onClick={() => {console.log("Shop videre er trykket")}} className="bg-none border-2 text-black font-bold min-w-40 px-6 py-3 hover:bg-black hover:text-white transition-colors duration-30">Shop videre</button>
                        <CTAButton text="Gå til levering" onClick={() => {}} />
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