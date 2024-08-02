import { type ProductType } from "../assets/productArray";

type Props = {
  productArray: ProductType[];
  updateProduct: (product: ProductType) => void;
};

export default function Products({ productArray, updateProduct }: Props) {
  return (
    <>
      <h3 className="section_title">All Products</h3>

      <div className="products_wrapper">
        {productArray.map((item, index) => (
          <button key={index} onClick={() => updateProduct(item)}>
            <div className="productCard">
              <img
                className="productCard_image"
                src={item.imageUrl}
                alt={item.name}
              />
              <div className="productCard_details">
                <p className="productCard_details_name">
                  {item.name.length > 20
                    ? item.name.slice(0, 20) + "..."
                    : item.name}
                </p>
                <p className="productCard_details_price">{item.price}</p>
              </div>
            </div>
          </button>
        ))}
      </div>
    </>
  );
}
