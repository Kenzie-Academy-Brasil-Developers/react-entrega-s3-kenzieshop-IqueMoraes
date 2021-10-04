import { Link } from "react-router-dom";
import logo from "../../logo.svg";
import { HeaderBox, Ulist } from "./style";

export default function Header() {
  return (
    <HeaderBox>
      <div>
        <img src={logo} className="App-logo" alt="logo" />
        <h2>KenzieShop</h2>
      </div>
      <Ulist>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cart">Carrinho</Link>
        </li>
      </Ulist>
    </HeaderBox>
  );
}
