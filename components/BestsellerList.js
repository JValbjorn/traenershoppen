import React, { useState } from "react";
import { useEffect } from "react";
import DataFetch from "../utils/DataFetch";
import ProductCard from "./ProductCard";

export default function BestsellerList() {
const [products, setProducts] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

// Fetch data fra Firebase
useEffect(() => {
  const fetchData = async () => {
    try {
      const data = await DataFetch("products"); 
      setProducts(data); 
    } catch (err) {
      console.error("Error fetching data:", err);
      setError(err.message); 
    } finally {
      setLoading(false); 
    }
  };

  fetchData();
}, []);

return (
  <div className="mt-5">
    {loading && <p>Loading...</p>}
    {error && <p>Error: {error}</p>}
    <div className="flex flex-row gap-8">
      {products.slice(0,3).map((product) => (
        <ProductCard key={product.id} product={product}/>
      ))}
    </div>
  </div>
);

}