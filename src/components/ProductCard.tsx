import { ProductType } from "../assets/productArray";

type Props = {
  product: ProductType;
};

export default function ProductCard({ product }: Props) {
  const { name, imageUrl, price } = product;

  return (
    <div className="productCard">
      <img src={imageUrl} alt={name} />
      <div className="">
        <p>{name}</p>
        <p>{price}</p>
      </div>
    </div>
  );
}
