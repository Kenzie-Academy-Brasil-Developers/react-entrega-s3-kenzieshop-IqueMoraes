import Header from "../../components/Header";
import HorizontalCard from "../../components/HorizontalCard";
import { Quantity } from "../../components/QuantityInput";
import { products } from "../../services/ballsList";
import { addBallThunk } from "../../store/modules/Cart/thunk";

export default function Home () {

    return (
        <div>
            <Header>

            </Header>

            <div>

            {products.map(item=> <HorizontalCard objectProduct={item} Quantity={Quantity} functionButton={addBallThunk} />)}
            </div>
        </div>
    )
}