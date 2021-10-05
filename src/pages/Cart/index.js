import { useSelector } from "react-redux";
import Header from "../../components/Header";
import CartHorizontalCard from "../../components/CartHorizontalCard";
import { BsDashSquareFill } from "react-icons/bs";
import { CartPageBox, ProductsList, ResumeShopping } from "./style";

export default function Cart() {
  const { ball } = useSelector((state) => state);

  return (
    <>
      <Header />

      <CartPageBox>
        <ProductsList>
          {ball !== [] ? 
          ball.map((item) => (
            <CartHorizontalCard key={item.id}
              objectProduct={item}
              icon={BsDashSquareFill}
            />
          ))
        :
        <h2>Sem produtos na lista</h2>}
        </ProductsList>
        <ResumeShopping>
          <h3>Carrinho</h3>
          {ball.length > 1 ? (
            <h4> {ball.length} produtos </h4>
          ) : (
            <h4> {ball.length} produto </h4>
          )}
          <h4>
            Total: 
            R$ {ball.reduce((acc, item) => acc + item.price, 0)}
          </h4>
          <button onClick={() => alert("Botão em construção")}>
            Finalizar compra
          </button>
        </ResumeShopping>
      </CartPageBox>
    </>
  );
}
