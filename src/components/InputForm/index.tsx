import { InputHTMLAttributes } from "react";
import { InputContainer } from "./styles";

export interface InputFormProps extends InputHTMLAttributes<HTMLInputElement> {}

export function InputForm(props: InputFormProps) {
  const { id, type, name, placeholder, ...rest } = props;

  return (
    <InputContainer>
      <input
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        {...rest}
      />
    </InputContainer>
  );
}
