import { productsArray } from "../assets/productArray";
import ProductCard from "./ProductCard";

export default function Products() {
  return (
    <>
      <div className="products_wrapper">
        {productsArray.map((item, index) => (
          <ProductCard key={index} product={item} />
        ))}
      </div>
    </>
  );
}
