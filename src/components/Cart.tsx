import { useState } from "react";
import { type ProductType } from "../assets/productArray";
import ProductCard from "./ProductCard";

export default function Cart({ products }: { products: ProductType[] }) {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <div className="cart_btn_wrapper">
        <button
          onClick={() => setVisible(!visible)}
          className="cart_toggle_btn"
        >
          {!visible ? "Show Selected Products" : "Hide Selected Products"}
          <span className="cart_products_count">{products.length}</span>
        </button>
      </div>

      <h3 className="section_title">Selected Products</h3>

      {visible ? (
        <div className="products_wrapper">
          {products.map((item, index) => (
            <ProductCard product={item} key={index} />
          ))}
        </div>
      ) : (
        <p className="hint_text">
          Click the button to products you have selected.
        </p>
      )}

      {visible && products.length <= 0 ? (
        <p className="hint_text">No product selected yet.</p>
      ): null}
    </>
  );
}
