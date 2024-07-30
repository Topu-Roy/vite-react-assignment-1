import "./index.css";
import { productsArray } from "./assets/productArray";
import Cart from "./components/Cart";
import Products from "./components/Products";

function App() {
  return (
    <>
      <h1>
        Assignment by Topu Roy
      </h1>

      <Cart />

      <Products productArray={productsArray} />
    </>
  );
}

export default App;
