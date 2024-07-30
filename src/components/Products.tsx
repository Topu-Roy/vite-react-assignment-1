import { type ProductType } from "../assets/productArray";
import ProductCard from "./ProductCard";

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
            <ProductCard product={item} />
          </button>
        ))}
      </div>
    </>
  );
}
