import { ImgBox, ProductBoxStyle, ValueAndButtonsBox } from "./style";
import { addBallThunk } from "../../store/modules/Cart/thunk";

export default function HorizontalCard({
  objectProduct,
  icon: Icon,

}) {



  return (
    <ProductBoxStyle >
      <div>

      <ImgBox> 
      <img src={objectProduct.image} alt={objectProduct.name} />
      </ImgBox>
      <h3>{objectProduct.name}</h3>
      </div>
      <ValueAndButtonsBox>
        <h4>R${objectProduct.price}</h4>
        
          <button onClick={() => addBallThunk(objectProduct)} >{<Icon size={30} />} </button>
      </ValueAndButtonsBox>
    </ProductBoxStyle>
  );
}
