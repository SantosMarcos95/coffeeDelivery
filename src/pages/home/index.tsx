import {
  CoffeeList,
  HomeContainer,
  IntroContainer,
  StatusInformationLeft,
  StatusInformationRight,
} from "./styled";

import CartIcon from "../../assets/CartIcon.svg";
import TimerIcon from "../../assets/TimerIcon.svg";
import ImgLogo from "../../assets/imgHeader.png";

import { CoffeeCard } from "../../components/CoffeeCard";
import { coffeeList } from "../../model/coffeeList";

export function Home() {
  return (
    <>
      <HomeContainer>
        <div>
          <IntroContainer>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
            <div>
              <StatusInformationLeft>
                <div>
                  <img src={CartIcon} />
                  <p>Compra simples e segura</p>
                </div>
                <div>
                  <img src={TimerIcon} />
                  <p>Entrega rápida e rastreada</p>
                </div>
              </StatusInformationLeft>
              <StatusInformationRight>
                <div>
                  <img src={CartIcon} />
                  <p>Compra simples e segura</p>
                </div>
                <div>
                  <img src={TimerIcon} />
                  <p>Entrega rápida e rastreada</p>
                </div>
              </StatusInformationRight>
            </div>
          </IntroContainer>
          {/* <ImgContainer> */}
          <img src={ImgLogo} />
          {/* </ImgContainer> */}
        </div>
      </HomeContainer>
      <CoffeeList>
        <h2>Nossos cafés</h2>
        <div className="coffee-container">
          {coffeeList.map((coffee) => (
            <CoffeeCard
              key={coffee.id}
              id={coffee.id}
              imagem={coffee.imagem}
              types={coffee.types}
              title={coffee.title}
              description={coffee.description}
              price={coffee.price}
            />
          ))}
        </div>
      </CoffeeList>
    </>
  );
}
