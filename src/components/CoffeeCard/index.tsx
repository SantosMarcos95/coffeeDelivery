import React, { useContext, useState } from "react";
import { ShoppingCart } from "phosphor-react";
import { CoffeeContainer } from "./styles";
import { CoffeeContext } from "../../App";

type CoffeeType =
  | "Tradicional"
  | "Gelado"
  | "Com Leite"
  | "Alcoólico"
  | "Especial";

export interface CoffeeCardProps {
  id: number;
  types: CoffeeType[];
  title: string;
  description: string;
  price: string;
  imagem: string;
}

export interface CartItem extends CoffeeCardProps {
  quantity: number;
}

export function CoffeeCard(props: CoffeeCardProps) {
  const { id, types, title, description, price, imagem } = props;
  const { cartItems, addToCart } = useContext(CoffeeContext);

  const [quantity, setQuantity] = useState(0);
  const [isButtonEnabled, setIsButtonEnabled] = useState(false); // Estado para habilitar/desabilitar o botão

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = Number(e.target.value);
    setQuantity(newQuantity);
    setIsButtonEnabled(newQuantity > 0); // Habilita o botão se a quantidade for maior que 0
  };
  const handleAddToCart = () => {
    const newItem: CartItem = {
      id,
      types,
      title,
      description,
      price,
      imagem,
      quantity,
    };
    addToCart(newItem);

    setQuantity(0);
    setIsButtonEnabled(false); // Desabilita o botão novamente
  };

  return (
    <CoffeeContainer>
      {imagem && <img src={imagem} />}
      <strong>
        {types.map((type) => {
          return <span key={type}>{type}</span>;
        })}
      </strong>

      <h2>{title}</h2>
      <p>{description}</p>
      <div>
        <strong>
          <h3>R$</h3>
          <h1>{price}</h1>
        </strong>
        <input
          type="number"
          placeholder="0"
          min={0}
          value={quantity}
          onChange={handleQuantityChange}
        />
        <button onClick={handleAddToCart} disabled={!isButtonEnabled}>
          <ShoppingCart size={24} color="white" />
        </button>
      </div>
    </CoffeeContainer>
  );
}
export { CoffeeContext };
