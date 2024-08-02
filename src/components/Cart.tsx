import { useState } from "react";
import { type CartItemType } from "../App";

export default function Cart({ products }: { products: CartItemType[] }) {
  const [visible, setVisible] = useState(false);
  const totalProducts = products.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <div className="cart_btn_wrapper">
        <button
          onClick={() => setVisible(!visible)}
          className="cart_toggle_btn"
        >
          {!visible ? "Show Selected Products" : "Hide Selected Products"}
          <span className="cart_products_count">{totalProducts}</span>
        </button>
      </div>

      <h3 className="section_title">Selected Products</h3>

      {visible ? (
        <div className="products_wrapper">
          {products.map((item, index) => (
            <button key={index}>
              <div className="productCard">
                <img
                  className="productCard_image"
                  src={item.imageUrl}
                  alt={item.name}
                />
                <div className="productCard_details">
                  <p className="productCard_details_name">
                    {item.name.length > 20
                      ? item.name.slice(0, 18) + "..."
                      : item.name}
                  </p>
                  <p className="productCard_details_price">{item.price}</p>
                </div>
                <p className="productCard_details_Quantity">
                  Quantity: {item.quantity}
                </p>
              </div>
            </button>
          ))}
        </div>
      ) : (
        <p className="hint_text">
          Click the button to products you have selected.
        </p>
      )}

      {visible && products.length <= 0 ? (
        <p className="hint_text">No product selected yet.</p>
      ) : null}
    </>
  );
}
