import "./index.css";
import { productsArray, type ProductType } from "./assets/productArray";
import { useState } from "react";
import Cart from "./components/Cart";
import Products from "./components/Products";

export type CartItemType = {
  name: string;
  price: number;
  imageUrl: string;
  quantity: number;
};

function App() {
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);

  //? I will pass this function as props to the children that needs it.
  //! Because i think passing the setter function (setCartItems) directly might be expensive.

  function updateProduct(product: ProductType) {
    const isExist = cartItems.find((item) => item.name === product.name);

    if (isExist) {
      setCartItems(
        cartItems.map((item) =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
      return;
    }

    setCartItems([...cartItems, { ...product, quantity: 1 }]);
  }

  return (
    <>
      <h1 className="heading">Assignment by Topu Roy</h1>
      <hr />
      <Cart products={cartItems} />
      <hr />
      <Products productArray={productsArray} updateProduct={updateProduct} />
    </>
  );
}

export default App;
