import { useEffect, useState } from "react";
{
  /**    endnu ikke linket til firebase med ID'er, skal opdateres når der er lavet produkt kort */
}

export default function CartPreview() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    setCart(storedCart ? JSON.parse(storedCart) : []);
  }, []);

  useEffect(() => {
    function handleCartChange(event) {
      if (event.key === "cart") {
        setCart(event.newValue ? JSON.parse(event.newValue) : []);
      }
    }
    window.addEventListener("storage", handleCartChange);
    return () => {
      window.removeEventListener("storage", handleCartChange);
    };
  }, []);
  return (
    <div>
      <h2>Din Kurv</h2>
      <ul>
        {cart.length === 0 ? (
          <li>Kurven er tom</li>
        ) : (
          cart.map((item) => (
            <li key={item.id}>
              {item.id} (x{item.quantity})
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
