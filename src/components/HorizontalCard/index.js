import { ImgBox, ProductBoxStyle } from "./style";

export default function HorizontalCard({
  objectProduct,
  functionButton,
  icon: Icon,

}) {



  return (
    <ProductBoxStyle >
      <ImgBox> 
      <img src={objectProduct.image} alt={objectProduct.name} />
      </ImgBox>
      <h3>{objectProduct.name}</h3>
      <div>
        <h4>R${objectProduct.price}</h4>
        <div>
          <button onClick={() => functionButton(objectProduct)} >{<Icon/>} </button>
        </div>
      </div>
    </ProductBoxStyle>
  );
}
