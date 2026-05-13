// app/products/page.jsx
"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ref, get } from "firebase/database";
import { db } from "@/lib/firebase";
import ProductCard from "@/components/ProductCard";

export default function ProductsPage({ params }) {
  const { slug } = params;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const snapshot = await get(ref(db, "products"));
      const data = snapshot.val();
      if (data) setProducts(Object.values(data));
    };

    fetchProducts();
  }, [slug]);

  return (
    <div>

      {products.map((product, i) => (
        <ProductCard key={i} product={product} />
      ))}
    </div>
  );
}