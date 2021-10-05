import { ImgBox, ProductBoxStyle, ValueAndButtonsBox } from "./style";
import { subBallThunk } from "../../store/modules/Cart/thunk";
import { Dispatch } from "react";
import { useDispatch } from "react-redux";

export default function CartHorizontalCard({
  objectProduct,
  icon: Icon,

}) {

  const dispatch = useDispatch();



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
          <button onClick={() => dispatch(subBallThunk(objectProduct))} >{<Icon size={25}/>} </button>
        
      </ValueAndButtonsBox>
    </ProductBoxStyle>
  );
}
