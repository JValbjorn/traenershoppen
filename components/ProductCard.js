"use client";

import Image from "next/image";
import { ref, get } from "firebase/database";
import { db } from "@/lib/firebase";

const snapshot = await get(ref(db, "products"));
const data = snapshot.val();

const products = Object.values(data);

export default function ProductCard({ product }) {
  return (
    <div className="relative border border-gray-300 p-4 flex flex-col items-center gap-2 max-w-sm bg-white">
      
      {/* Sale bannner */}
      {product.onSale && (
        <div className="absolute top-0 left-0 overflow-hidden w-24 h-24 pointer-events-none">
          <span
            className="
              absolute
              top-4
              -left-8
              w-36
              bg-lime-500
              text-black
              text-sm
              font-bold
              text-center
              rotate-[-45deg]
              py-1
              shadow-md
            "
          >
            {product.salePercent}%
          </span>
        </div>
      )}

      <Image
        src={product.image}
        alt={product.title}
        width={300}
        height={300}
      />

      <div className="w-full">
        <h3 className="text-sm text-gray-500">{product.brand}</h3>
        <h2 className="font-semibold">{product.name}</h2>

        <div className="flex items-end justify-between gap-4 mt-2">
          <div>
            {product.onSale && (
              <p className="line-through text-gray-400 text-sm">
                {product.oldPrice} kr.
              </p>
            )}
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