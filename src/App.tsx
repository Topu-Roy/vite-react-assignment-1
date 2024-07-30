import "./index.css";
import { productsArray, ProductType } from "./assets/productArray";
import { useState } from "react";
import Cart from "./components/Cart";
import Products from "./components/Products";

function App() {
  const [cartItems, setCartItems] = useState<ProductType[]>([]);

  //? I will pass this function as props to the children that needs it.
  //! Because i think passing the setter function (setCartItems) directly might be expensive.

  function updateProduct(product: ProductType) {
    
    const isExist = cartItems.find(item => item.name === product.name);

    if(isExist){
      alert("This product is already added. Please select a different one.");
      return;
    }

    setCartItems([...cartItems, product]);
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
