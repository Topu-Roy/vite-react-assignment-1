import { type ProductType } from "../assets/productArray";
import ProductCard from "./ProductCard";

export default function Products({productArray} : {productArray: ProductType[]}) {
  return (
    <>
      <div className="products_wrapper">
        {productArray.map((item, index) => (
          <ProductCard key={index} product={item} />
        ))}
      </div>
    </>
  );
}
