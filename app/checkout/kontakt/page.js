"use client";

import Link from "next/link";
import CTAButton from "@/components/CTAButton";
import CartPreview from "@/components/CartPreview";
import { useRouter } from "next/navigation";

export default function Kontakt() {
  const router = useRouter();

  return (
    <div className="flex flex-row gap-4 px-30 py-20 justify-between">
      <div className="flex flex-row gap-10">
        <Link href="/produktoversigt">Tilbage</Link>
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
          {/* autoComplete er det so mgør google autofyld virker */}
          <form
            className="flex flex-col gap-4"
            onSubmit={(e) => {
              e.preventDefault(); // Prevent default form submission

              // Collect form data
              const formData = {
                phone: e.target.querySelector('input[placeholder="Telefonnummer"]').value,
                email: e.target.querySelector('input[placeholder="Email"]').value,
                firstName: e.target.querySelector('input[placeholder="Fornavn"]').value,
                lastName: e.target.querySelector('input[placeholder="Efternavn"]').value,
                address: e.target.querySelector('input[placeholder="Adresse"]').value,
                postalCode: e.target.querySelector('input[placeholder="Postnummer"]').value,
                city: e.target.querySelector('input[placeholder="By"]').value,
                country: e.target.querySelector('input[placeholder="Land"]').value,
                companyName: e.target.querySelector('input[placeholder="Firmanavn (valgfrit)"]').value,
              };

              // Save to localStorage
              localStorage.setItem('checkoutContactInfo', JSON.stringify(formData));

              // Optional: Navigate to another page
              router.push("/checkout/levering");
            }}
          >
            <h3>Kontaktoplysninger</h3>
            <input type="tel" placeholder="Telefonnummer" autoComplete="tel" />
            <input type="email" placeholder="Email" autoComplete="email" />
            <h3>Leveringsadresse</h3>
            <div className="flex flex-row gap-4">
              <input
                type="text"
                placeholder="Fornavn"
                autoComplete="given-name"
                required
              />
              <input
                type="text"
                placeholder="Efternavn"
                autoComplete="family-name"
                required
              />
            </div>
            <input
              type="text"
              placeholder="Adresse"
              autoComplete="street-address"
              required
            />
            <input
              type="text"
              placeholder="Postnummer"
              autoComplete="postal-code"
              required
            />
            <input
              type="text"
              placeholder="By"
              autoComplete=" locality"
              required
            />
            <input
              type="text"
              placeholder="Land"
              autoComplete="country"
              required
            />
            <input
              type="text"
              placeholder="Firmanavn (valgfrit)"
              autoComplete="organization"
            />
          </form>
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
              onClick={() => router.push("/checkout/levering")}
              type="submit"
            />
          </div>
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
