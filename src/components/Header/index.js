import { Link } from "react-router-dom";
import logo from "../../logo.svg";

export default function Header() {
  return (
    <div>
      <div>
        <img src={logo} className="App-logo" alt="logo" />
        <h2>KenzieShop</h2>
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cart">Carrinho</Link>
        </li>
      </ul>
    </div>
  );
}
