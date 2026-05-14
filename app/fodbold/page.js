import { ref, get } from "firebase/database";
import { db } from "@/lib/firebase";
import ProductCard from "@/components/ProductCard";

export default async function Page() {
  const snapshot = await get(ref(db, "products"));
  const data = snapshot.val();
  const products = Object.values(data);

  return (
    <div className="grid grid-cols-4 gap-4 p-8">
      {products.map((product, i) => (
        <ProductCard key={i} product={product} />
      ))}
    </div>
  );
}
