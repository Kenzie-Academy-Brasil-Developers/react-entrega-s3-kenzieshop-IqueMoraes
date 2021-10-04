import { useSelector } from "react-redux";
import Header from "../../components/Header";
import HorizontalCard from "../../components/HorizontalCard";
import { subBallThunk } from "../../store/modules/Cart/thunk";
import { BsDashSquareFill } from "react-icons/bs";

export default function Cart() {
  const { ball } = useSelector((state) => state);

  return (
    <div>
      <Header />

      <div>
        <div>
          {ball.map((item) => (
            <HorizontalCard key={item.id}
              objectProduct={item}
              functionButton={subBallThunk(item)}
              icon={BsDashSquareFill}
            />
          ))}
        </div>
        <div>
          <h3>Carrinho</h3>
          {ball.length > 1 ? (
            <h4> {ball.length} produtos </h4>
          ) : (
            <h4> {ball.length} produto </h4>
          )}
          <h4>
            Total da compra: {ball.reduce((acc, item) => acc + item.price, 0)}
          </h4>
          <button onClick={() => alert("Botão em construção")}>
            Finalizar compra
          </button>
        </div>
      </div>
    </div>
  );
}
