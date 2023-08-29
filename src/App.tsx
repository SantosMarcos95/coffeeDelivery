import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { createContext, useState } from "react";
import { CartItem } from "./components/CoffeeCard";
import { FormProvider } from "./contexts/FormContext";


interface CoffeeContextType {
  cartItems: CartItem[];
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
  amount: number;
  addToCart: (item: CartItem) => void;
  handleRemoveClick: (item: CartItem) => void;
  updatCartItemQuantity: (item: CartItem) => void;
}

export const CoffeeContext = createContext({} as CoffeeContextType);

export function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]); 

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
