import { useState } from "react";

{/**    endnu ikke linket til firebase med ID'er, skal opdateres når der er lavet produkt kort */}
export default function CartManager() {
  const [cart, setCart] = useState([]);

  function addToCart(itemId) {
    setCart((prevCart) => {
      const alreadyInCart = prevCart.find((item) => item.id === itemId);
      let newCart;
      if (alreadyInCart) {
        newCart = prevCart.map((item) =>
          item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item,
        );
      } else {
        newCart = [...prevCart, { id: itemId, quantity: 1 }];
      }
      localStorage.setItem("cart", JSON.stringify(newCart));
      return newCart;
    });
  }

  return (
    <div>
      {/* knap til at tilføje */}
      <button onClick={() => addToCart("item123")}>Add Item 123</button>
      {/* Til at vise kurv */}
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.id} (x{item.quantity})
          </li>
        ))}
      </ul>
    </div>
  );
}
