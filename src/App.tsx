import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { createContext, useState } from "react";
import { CartItem } from "./components/CoffeeCard";
import { FormProvider } from "./contexts/formContext";

// interface TypeInput {
//   inputCep: string;
//   inputRua: string;
//   inputNum: string;
//   inputCompl: string;
//   inputBairro: string;
//   inputCity: string;
//   inputUf: string;
//   paymentMethod: string;
// }

// interface InputValues {
//   inputValues: TypeInput[];
//   setInputValues: React.Dispatch<React.SetStateAction<[]>>;
// }

interface CoffeeContextType {
  cartItems: CartItem[];
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
  amount: number;
  addToCart: (item: CartItem) => void;
  handleRemoveClick: (item: CartItem) => void;
  updatCartItemQuantity: (item: CartItem) => void;
}

export const CoffeeContext = createContext({} as CoffeeContextType);
// export const InputContext = createContext({} as InputValues);

export function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  // const [inputValues, setInputValues] = useState<InputValues>();

  // console.log(cartItems.length);

  const addToCart = (item: CartItem) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };
  const handleRemoveClick = (item: CartItem) => {
    setCartItems((prevItems) =>
      prevItems.filter((cartItem) => cartItem.id !== item.id)
    );
  };
  const amount = cartItems.length;

  const updatCartItemQuantity = (item: CartItem) => {
    const cartItemsCopy = cartItems.map((cartItem) => {
      if (cartItem.id === item.id) {
        cartItem.quantity = item.quantity;
      }
      return cartItem;
    });

    setCartItems(cartItemsCopy);
  };
  return (
    <CoffeeContext.Provider
      value={{
        cartItems,
        amount,
        setCartItems,
        addToCart,
        handleRemoveClick,
        updatCartItemQuantity,
      }}
    >
      <FormProvider>

      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
        <GlobalStyle />
      </ThemeProvider>
      </FormProvider>
    </CoffeeContext.Provider>
  );
}
