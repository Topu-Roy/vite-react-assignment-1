import { ProductType } from "../assets/productArray";

export default function ProductCard({ product }: {product: ProductType}) {
  const { name, imageUrl, price } = product;

  return (
    <div className="productCard">
      <img className="productCard_image" src={imageUrl} alt={name} />
      <div className="productCard_details">
        <p className="productCard_details_name">
          {name.length > 20 ? name.slice(0, 20) + "..." : name}
        </p>
        <p className="productCard_details_price">{price}</p>
      </div>
    </div>
  );
}
