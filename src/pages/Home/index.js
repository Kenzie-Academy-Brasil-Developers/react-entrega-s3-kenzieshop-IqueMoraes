import Header from "../../components/Header";
import HorizontalCard from "../../components/HorizontalCard";
import { products } from "../../services/ballsList";
import { BsFillPlusSquareFill } from "react-icons/bs";
import { Aside, HomePageBox } from "./style";

export default function Home() {
  return (
    <div>
      <Header></Header>

      <HomePageBox>
        <div>
          {products.map((item) => (
            <HorizontalCard
              key={item.id}
              objectProduct={item}
              icon={BsFillPlusSquareFill}
            />
          ))}
        </div>
        <Aside>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis
            egestas maecenas pharetra convallis posuere morbi leo. Lectus
            vestibulum mattis ullamcorper velit sed ullamcorper. Facilisis
            mauris sit amet massa vitae. Curabitur vitae nunc sed velit
            dignissim. 
          </p>
        </Aside>
      </HomePageBox>
    </div>
  );
}
