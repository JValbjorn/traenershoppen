"use client";

import Link from "next/link";
import CTAButton from "@/components/CTAButton";
import CartPreview from "@/components/CartPreview";
import { useRouter } from "next/navigation";
import CheckoutNav from "@/components/CheckoutNav";
import { useEffect, useState } from "react";

export default function Kontakt() {
  const router = useRouter();
  const [data, setData] = useState({
    phone: "",
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    postalCode: "",
    city: "",
    country: "",
    companyName: "",
  });

  useEffect(() => {
      const savedData = JSON.parse(localStorage.getItem("checkoutContactInfo")) || {};
      setData(savedData);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedData = { ...data, [name]: value };
    setData(updatedData);
    localStorage.setItem("checkoutContactInfo", JSON.stringify(updatedData));
    console.log("Data gemt", updatedData);
  };

  return (
    <div className="flex flex-row gap-4 px-30 py-20 justify-between">
      <div className="flex flex-row gap-10">
        <Link href="/produktoversigt">Tilbage</Link>
        <article>
          <form className="flex flex-col gap-4">
            <CheckoutNav />
            <h3>Kontaktoplysninger</h3>
            <input
              type="tel"
              name="phone"
              placeholder="Telefonnummer"
              autoComplete="tel"
              onChange={handleChange}
              value={data.phone || ""}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              autoComplete="email"
              onChange={handleChange}
              value={data.email || ""}
            />
            <h3>Leveringsadresse</h3>
            <div className="flex flex-row gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="Fornavn"
                autoComplete="given-name"
                required
                onChange={handleChange}
                value={data.firstName || ""}
              />
              <input
                type="text"
                name="lastName"
                placeholder="Efternavn"
                autoComplete="family-name"
                required
                onChange={handleChange}
                value={data.lastName || ""}
              />
            </div>
            <input
              type="text"
              name="address"
              placeholder="Adresse"
              autoComplete="street-address"
              required
              onChange={handleChange}
              value={data.address || ""}
            />
            <input
              type="text"
              name="postalCode"
              placeholder="Postnummer"
              autoComplete="postal-code"
              required
              onChange={handleChange}
              value={data.postalCode || ""}
            />
            <input
              type="text"
              name="city"
              placeholder="By"
              autoComplete="locality"
              required
              onChange={handleChange}
              value={data.city || ""}
            />
            <input
              type="text"
              name="country"
              placeholder="Land"
              autoComplete="country"
              required
              onChange={handleChange}
              value={data.country || ""}
            />
            <input
              type="text"
              name="companyName"
              placeholder="Firmanavn (valgfrit)"
              autoComplete="organization"
              onChange={handleChange}
              value={data.companyName || ""}
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
              <CTAButton path="/checkout/levering" text="Gå til levering" />
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
