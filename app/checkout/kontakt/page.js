"use client";

import Link from "next/link";
import CTAButton from "@/components/CTAButton";
import CartPreview from "@/components/CartPreview";
import { useRouter } from "next/navigation";
import CheckoutNav from "@/components/CheckoutNav";

export default function Kontakt() {
  const router = useRouter();
  const handleChange = (e) => {
    if (typeof window === "undefined") return;
    const { name, value } = e.target;
    const currentData = JSON.parse(localStorage.getItem("checkoutContactInfo")) || {};
    currentData[name] = value;
    localStorage.setItem("checkoutContactInfo", JSON.stringify(currentData));
    console.log("Data gemt", currentData);
  };

  return (
    <div className="flex flex-row gap-4 px-30 py-20 justify-between">
      <div className="flex flex-row gap-10">
        <Link href="/produktoversigt">Tilbage</Link>
        <article>

          {/* autoComplete er det so mgør google autofyld virker */}
          <form
            className="flex flex-col gap-4"
          >
          {/*CheckoutNav er navigation mellem steps */}
          <CheckoutNav />
            <h3>Kontaktoplysninger</h3>
            <input type="tel"  name="phone" placeholder="Telefonnummer" autoComplete="tel"  onChange={handleChange} defaultValue={JSON.parse(localStorage.getItem("checkoutContactInfo"))?.phone || ""}/>
            <input type="email" name="email" placeholder="Email" autoComplete="email" onChange={handleChange} defaultValue={JSON.parse(localStorage.getItem("checkoutContactInfo"))?.email || ""}/>
            <h3>Leveringsadresse</h3>
            <div className="flex flex-row gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="Fornavn"
                autoComplete="given-name"
                required
                onChange={handleChange}
                defaultValue={JSON.parse(localStorage.getItem("checkoutContactInfo"))?.firstName || ""}
              />
              <input
                type="text"
                name="lastName"
                placeholder="Efternavn"
                autoComplete="family-name"
                required
                onChange={handleChange}
                defaultValue={JSON.parse(localStorage.getItem("checkoutContactInfo"))?.lastName || ""}
              />
            </div>
            <input
              type="text"
              name="address"
              placeholder="Adresse"
              autoComplete="street-address"
              required
              onChange={handleChange}
              defaultValue={JSON.parse(localStorage.getItem("checkoutContactInfo"))?.address || ""}
            />
            <input
              type="text"
              name="postalCode"
              placeholder="Postnummer"
              autoComplete="postal-code"
              required
              onChange={handleChange}
              defaultValue={JSON.parse(localStorage.getItem("checkoutContactInfo"))?.postalCode || ""}
            />
            <input
              type="text"
              name="city"
              placeholder="By"
              autoComplete=" locality"
              onChange={handleChange}
              required
              defaultValue={JSON.parse(localStorage.getItem("checkoutContactInfo"))?.city || ""}
            />
            <input
              type="text"
              name="country"
              placeholder="Land"
              autoComplete="country"
              onChange={handleChange}
              required
              defaultValue={JSON.parse(localStorage.getItem("checkoutContactInfo"))?.country || ""}
            />
            <input
              type="text"
              name="companyName"
              placeholder="Firmanavn (valgfrit)"
              autoComplete="organization"
              onChange={handleChange}
              defaultValue={JSON.parse(localStorage.getItem("checkoutContactInfo"))?.companyName || ""}
            />
          
          <div className="flex flex-row justify-between mt-5">
            <button
              onClick={() => {
                console.log("Shop videre er trykket");
              }}
              className="bg-none border-2 text-black font-bold min-w-40 px-6 py-3 hover:bg-black hover:text-white transition-colors duration-30"
            >
              Shop videre
            </button>
            <CTAButton
              text="Gå til levering"
              onClick={() => router.push("/checkout/levering", console.log("debug er trykket"))}
            />
          </div>
          </form>
        </article>
      </div>
      <article>
        <div>
          <CartPreview />
        </div>
      </article>
    </div>
  );
}
