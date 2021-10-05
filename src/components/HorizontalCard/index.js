import { ImgBox, ProductBoxStyle, ValueAndButtonsBox } from "./style";
import { addBallThunk } from "../../store/modules/Cart/thunk";
import { useDispatch } from "react-redux";

export default function HorizontalCard({ objectProduct, icon: Icon }) {
  const dispatch = useDispatch();

  return (
    <ProductBoxStyle>
      <div>
        <ImgBox>
          <img src={objectProduct.image} alt={objectProduct.name} />
        </ImgBox>
        <h3>{objectProduct.name}</h3>
      </div>
      <ValueAndButtonsBox>
        <h4>R${objectProduct.price}</h4>

        <button
          onClick={() => {
            dispatch(addBallThunk(objectProduct))
          }}
        >
          {<Icon size={30} />}{" "}
        </button>
      </ValueAndButtonsBox>
    </ProductBoxStyle>
  );
}
