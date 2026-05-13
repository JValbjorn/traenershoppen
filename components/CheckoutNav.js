import Link from "next/link";

export default function CheckoutNav() {
    return (          
    <div className="flex flex-row mb-5 justify-start gap-15">
            <Link
              className="bg-none border-black text-black "
              href="/checkout/kontakt"
              type="submit"
            >
              Oplysninger
            </Link>
            <Link
              className="bg-none border-black text-black "
              href="/checkout/levering"
              type="submit"
            >
              Levering
            </Link>
            <Link
              className="bg-none border-black text-black "
              href="/checkout/betaling"
              type="submit"
            >
              Betaling
            </Link>
          </div>
)}