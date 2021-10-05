import { ImgBox, ProductBoxStyle, ValueAndButtonsBox } from "./style";
import { subBallThunk } from "../../store/modules/Cart/thunk";

export default function CartHorizontalCard({
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
          <button onClick={() => subBallThunk(objectProduct)} >{<Icon size={25}/>} </button>
        
      </ValueAndButtonsBox>
    </ProductBoxStyle>
  );
}
