import Image from "next/image";
// import { useCart } from "@/context/CartContext";

export default function ProductCard({ product }) {
  //   const { addToCart } = useCart();
  const isOnSale = product.onSale;

  return (
    <div className="relative border border-gray-300 p-4 flex flex-col items-center gap-2 max-w-sm">
      <div>
        {product.onSale && (
          <div className="absolute top-0 left-0 overflow-hidden w-24 h-24 pointer-events-none">
            <span
              className="
      absolute 
      top-4 
      -left-8 
      w-35 
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
          alt={product.name}
          width={300}
          height={300}
        />
      </div>
      <div className="w-full">
        <h3>{product.brand}</h3>
        <h2>{product.name}</h2>
        <div className="flex items-end justify-between gap-4">
          <div>
            {product.onSale && (
              <p className="line-through text-gray-400">
                {product.oldPrice} kr.
              </p>
            )}
            <p className="text-orange-600 font-bold text-2xl">{product.price} kr.</p>
          </div>

          <Image
            src="/img/cart-icon.png"
            alt="Add to Cart"
            width={24}
            height={24}
            // onClick={() => addToCart(product)}
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>
    </div>
  );
}
