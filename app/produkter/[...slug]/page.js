"use client";

import { useEffect, useState } from "react";
import { ref, get } from "firebase/database";
import { db } from "@/lib/firebase";
import ProductCard from "@/components/ProductCard";
import PageHeader from "@/components/browsingPage/PageHeader";
import FilterBar from "@/components/browsingPage/CounterFilter";
import Parallellogram from "@/components/Parallellogram";
import Pagination from "@/components/browsingPage/PageNavgation";
import { useParams } from "next/navigation";

const ITEMS_PER_PAGE = 16;

export default function ProductsPage() {
  const { slug } = useParams();
  console.log("slug:", slug);

  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchProducts = async () => {
      const snapshot = await get(ref(db, "products"));
      const data = snapshot.val();
      if (data) setProducts(Object.values(data));
    };
    fetchProducts();
  }, [slug]);

  const start = (currentPage - 1) * 20;
  const paginatedProducts = products.slice(start, start + 20);

  return (
    <div className="max-w-7xl mx-auto px-6">
      <PageHeader title={slug[slug.length - 1]} />

      <div className="flex flex-row justify-around w-full mb-6">
        <Parallellogram
          text="Fodbolde"
          path="/produkter/fodbold/fodboldudstyr/bolde"
        />
        <Parallellogram
          text="Fodbolde"
          path="/produkter/fodbold/fodboldudstyr/bolde"
        />
        <Parallellogram
          text="Fodbolde"
          path="/produkter/fodbold/fodboldudstyr/bolde"
        />
        <Parallellogram
          text="Fodbolde"
          path="/produkter/fodbold/fodboldudstyr/bolde"
        />
        <Parallellogram
          text="Fodbolde"
          path="/produkter/fodbold/fodboldudstyr/bolde"
        />
      </div>

      <FilterBar count={products.length} />

      <div className="grid grid-cols-4 gap-4 p-8">
        {paginatedProducts.map((product, i) => (
          <ProductCard key={i} product={product} />
        ))}
      </div>

      <Pagination
        totalItems={products.length}
        itemsPerPage={20}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
