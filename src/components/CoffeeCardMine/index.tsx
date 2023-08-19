import { Trash } from "phosphor-react";
import { CoffeeMineContainer } from "./styles";
import { useContext, useState } from "react";
import { CoffeeContext } from "../../App";
import { CartItem } from "../CoffeeCard";

interface CoffeeCardProps {
  cartItem: CartItem;
}

export function CoffeeCardMine(props: CoffeeCardProps) {
  const { cartItem } = props;
  const { cartItems, addToCart, updatCartItemQuantity, handleRemoveClick } =
    useContext(CoffeeContext);
  return (
    <CoffeeMineContainer>
      {cartItem.imagem && <img src={cartItem.imagem} />}
      <div className="CardContainer">
        <div>
          <h2>{cartItem.title}</h2>
          <strong>
            <h4>R$</h4>
            <h4>{cartItem.price}</h4>
          </strong>
        </div>
        <div className="CardButton">
          <input
            id="coffeeAmount"
            type="number"
            placeholder="0"
            min={0}
            value={cartItem.quantity}
            onChange={(e) =>
              updatCartItemQuantity({
                ...cartItem,
                quantity: Number(e.target.value),
              })
            }
          />
          <button onClick={() => handleRemoveClick(cartItem)}>
            <Trash size={16} color="#8047F8" />
            REMOVER
          </button>
        </div>
      </div>
    </CoffeeMineContainer>
  );
}
