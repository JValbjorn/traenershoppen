"use client";

import Image from "next/image";
import { useState } from "react";

export default function ProductCard({ product }) {
  const [selectedColor, setSelectedColor] = useState(0);

  return (
    <div className="relative shadow p-4 flex flex-col items-center gap-2 max-w-sm bg-white h-full">
      {product.onSale && (
        <div className="absolute top-0 left-0 overflow-hidden w-24 h-24 pointer-events-none">
          <span className="absolute top-4 -left-8 w-36 bg-lime-500 text-black text-sm font-bold text-center rotate-[-45deg] py-1 shadow-md">
            {product.salePercent}%
          </span>
        </div>
      )}

<div className="relative w-full">
      <Image
        src={product.colors[selectedColor].images[0]}
        alt={product.title}
        width={300}
        height={300}
        unoptimized
      />

 {product.colors.length > 1 && (
    <div className="absolute bottom-2 left-2 flex gap-2">
      {product.colors.map((c, i) => (
        <button
          key={c.id}
          onClick={() => setSelectedColor(i)}
          className={`w-6 h-6 skew-x-[-10deg] border-2 ${
            selectedColor === i ? "border-black" : "border-gray-300"
          }`}
          style={{ backgroundColor: c.id }}
          title={c.color}
        />
      ))}
    </div>
  )}
</div>
    
      <div className="w-full">
        <h3 className="text-sm text-gray-500">{product.brand}</h3>
        <h2 className="font-semibold uppercase line-clamp-2 min-h-[3rem]">
          {product.title}
        </h2>

        <div className="flex items-end justify-between gap-4 mt-auto w-full">
          <div>
            <p className="line-through text-gray-400 text-sm h-5">
              {product.onSale ? `${product.oldPrice} kr.` : ""}
            </p>
            <p className="text-orange-600 font-bold text-2xl">
              {product.price} kr.
            </p>
          </div>
          <Image
            src="/img/pift.png"
            alt="Add to Cart"
            width={24}
            height={24}
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}