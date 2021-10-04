import { divProduct } from "./style";

export default function HorizontalCard({
  objectProduct,
  Quantity,
  functionButton,
}) {
  return (
    <divProduct key={objectProduct.id}>
      <img src={objectProduct.image} alt={objectProduct.name} />
      <h3>{objectProduct.name}</h3>
      <div>
        <h4>R$ {objectProduct.price}</h4>
        <div>
          {Quantity}
          {functionButton}
        </div>
      </div>
    </divProduct>
  );
}
