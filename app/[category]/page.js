import ProductCard from "@/components/ProductCard";

export default function fodbold() {
    const products = [
    {
      id: "1",
      name: "Select Pisa shorts - Sort",
      brand: "SELECT",
      price: 99.95,
      oldPrice: 130,
      onSale: true,
      salePercent: 23,
      image: "/img/shorts.png",
    },
    {
      id: "2",
      name: "Select Numero 10 V23 fodbold",
      brand: "SELECT",
      price: 899,
      onSale: false,
      image: "/img/ball.png",
    },
  ];

  return (
    <div className="p-8 bg-light_gray min-h-screen">
      <h1 className="text-4xl font-bold mb-6">Fodbold</h1>

      <div className="grid grid-cols-10 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );

}