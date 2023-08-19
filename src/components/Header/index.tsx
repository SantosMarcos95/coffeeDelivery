import { Counter, HeaderContainer, MenuContainer, StyledCar } from "./styles";
import coffeLogo from "./assets/Logo.png";
import { MapPinLine, ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CoffeeContext } from "../CoffeeCard";
import GetLocation from "../location/Location";
export function Header() {
  const { amount } = useContext(CoffeeContext);

  // const amount = cartItems.length;

  return (
    <HeaderContainer>
      <img src={coffeLogo} />
      <div>
        <MenuContainer>
          <MapPinLine size={24} color="#8047f8" />
          <p>{/* <GetLocation /> */}</p>
        </MenuContainer>
        <StyledCar>
          <NavLink to="/checkout" title="Cart">
            <button>
              <ShoppingCart size={24} color="#c47f17" />
            </button>
          </NavLink>
        </StyledCar>
        <Counter>
          <div className="Count">{amount}</div>
        </Counter>
      </div>
    </HeaderContainer>
  );
}
