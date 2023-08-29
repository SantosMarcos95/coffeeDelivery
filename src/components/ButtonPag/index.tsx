import { ButtonHTMLAttributes, useState } from "react";
import { ButtonContainer } from "./styles";

interface ButtonPagProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  description: string;
  imagem: string;
}

export function ButtonPag(props: ButtonPagProps) {
  const { description, imagem } = props;
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    setIsSelected(!isSelected);
  };

  return (
    <ButtonContainer>
      <div className={isSelected ? "selected" : ""} onClick={handleClick}>
        {imagem && <img src={imagem} />}
        <span>{description}</span>
      </div>
    </ButtonContainer>
  );
}
