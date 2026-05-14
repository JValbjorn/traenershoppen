import Link from "next/link";

export default function CheckoutNav() {
  const handleSubmit = (e, href) => {
    const form = document.querySelector("form");
    if (form) {
      form.requestSubmit(); // Trigger form inputternes onSubmit event
    }
  };

  return (
    <div className="flex flex-row mb-5 justify-start gap-15">
      <Link
        className="bg-none border-black text-black"
        href="/checkout/kontakt"
      >
        Oplysninger
      </Link>
      <Link
        className="bg-none border-black text-black"
        href="/checkout/levering"
      >
        Levering
      </Link>
      <Link
        className="bg-none border-black text-black"
        href="/checkout/betaling"
      >
        Betaling
      </Link>
    </div>
  );
}