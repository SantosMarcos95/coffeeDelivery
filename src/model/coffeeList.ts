import { CoffeeCardProps } from "../components/CoffeeCard";

import coffeeTradicionalImg from "../assets/coffeImgs/tradicional.svg";
import coffeeExpressoAmericanoImg from "../assets/coffeImgs/americano.svg";
import coffeeExpressoCremosoImg from "../assets/coffeImgs/cremoso.svg";
import coffeeExpressoGeladoImg from "../assets/coffeImgs/gelado.svg";
import coffeeCubanoImg from "../assets/coffeImgs/cubano.svg";
import coffeeMocchiatoImg from "../assets/coffeImgs/mocaccino.svg";

export const coffeeList: CoffeeCardProps[] = [
  {
    id: 1,
    imagem: coffeeTradicionalImg,
    types: ["Tradicional"],
    title: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moìdos",
    price: "9.90",
  },
  {
    id: 2,
    imagem: coffeeExpressoAmericanoImg,
    types: ["Tradicional"],
    title: "Expresso Americano",
    description: "O tradicional café feito com água quente e grãos moìdos",
    price: "9.90",
  },
  {
    id: 3,
    imagem: coffeeExpressoCremosoImg,
    types: ["Tradicional"],
    title: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    price: "9.90",
  },
  {
    id: 4,
    imagem: coffeeExpressoGeladoImg,
    types: ["Tradicional", "Alcoólico"],
    title: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo",
    price: "9.90",
  },
  {
    id: 5,
    imagem: coffeeCubanoImg,
    types: ["Tradicional", "Alcoólico", "Gelado"],
    title: "Cubano",
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
    price: "9.90",
  },
  {
    id: 6,
    imagem: coffeeMocchiatoImg,
    types: ["Tradicional", "Com Leite"],
    title: "Macchiato",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    price: "9.90",
  },
];
