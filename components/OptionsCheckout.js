import { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function OptionsCheckout() {
  const [selectedDelivery, setSelectedDelivery] = useState(null);
  const pathname = usePathname();

  function OptionsChoice({ img, text, pris, selected, onSelect, metode }) {
    return (
      <div
        className={
          "flex flex-row items-center justify-between border-2 border-black p-2 my-2" +
          (selected ? " bg-light-green" : "")
        }
      >
        <div className="flex flex-row gap-4">
          <input
            type="radio"
            name="delivery"
            checked={selected}
            onChange={onSelect}
            className="custom-radio"
          />
          <Image
            src={img}
            width={30}
            height={30}
            alt="billedet kunne ikke loades"
          />
        </div>
        <div className="flex flex-row gap-4">
          <p className="flex-1">{text}</p>
          <p className="font-bold">{pris}</p>
        </div>
      </div>
    );
  }

  let options = [];

  if (pathname === "/checkout/betaling") {
    // Skulle gerne sørge for at betalingsmulighederne kun vises på betaling
    options = [
      {
        img: "/img/edit-button.png",
        text: "",
        pris: "",
      },
      {
        img: "/img/edit-button.png",
        text: "",
        pris: "",
      },
      {
        img: "/img/edit-button.png",
        text: "",
        pris: "",
      },
      {
        img: "/img/edit-button.png",
        text: "",
        pris: "",
      },
    ];
  } else if (pathname === "/checkout/levering") {
    // Skulle gerne sørge for at leveringsmulighederne kun vises på levering
    options = [
      {
        img: "/img/edit-button.png",
        text: "Pakkeshop",
        pris: "29 kr.",
        metode: "GLS - Pakkeshop",
      },
      {
        img: "/img/edit-button.png",
        text: "Hjemmelevering",
        pris: "99 kr.",
        metode: "GLS - Hjemmelevering",
      },
      {
        img: "/img/edit-button.png",
        text: "Hjemmelevering",
        pris: "99 kr.",
        metode: "Postnord - Hjemmelevering",
      },
      {
        img: "/img/edit-button.png",
        text: "Hjemmelevering",
        pris: "99 kr.",
        metode: "Bird - Hjemmelevering",
      },
    ];
  }

  // Gem info om levering til locStorage
  function handleSelect(idx) {
    setSelectedDelivery(idx);
    const selectedOption = options[idx];

    localStorage.setItem(
      "deliveryMethod",
      selectedOption.metode + " " + (selectedOption.pris || ""),
      console.log("Valgt leveringsmetode gemt i localStorage:", deliveryMethod),
    );
  }

  return (
    <div>
      {options.map((opt, idx) => (
        <OptionsChoice
          key={idx}
          img={opt.img}
          text={opt.text}
          pris={opt.pris}
          metode={opt.metode}
          selected={selectedDelivery === idx}
          onSelect={() => setSelectedDelivery(idx)}
        />
      ))}
    </div>
  );
}
