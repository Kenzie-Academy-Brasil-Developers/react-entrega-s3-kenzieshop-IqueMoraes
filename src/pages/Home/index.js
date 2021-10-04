import Header from "../../components/Header";
import HorizontalCard from "../../components/HorizontalCard";
import { products } from "../../services/ballsList";
import { addBallThunk } from "../../store/modules/Cart/thunk";
import { BsFillPlusSquareFill } from "react-icons/bs";

export default function Home() {
  return (
    <div>
      <Header></Header>

      <div>
        {products.map((item) => (
          <HorizontalCard key={item.id}
            objectProduct={item}
            functionButton={addBallThunk}
            icon={BsFillPlusSquareFill}
          />
        ))}
      </div>
    </div>
  );
}
