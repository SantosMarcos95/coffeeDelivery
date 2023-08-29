import { InputHTMLAttributes, forwardRef } from "react";
import { InputContainer } from "./styles";

export interface InputFormProps extends InputHTMLAttributes<HTMLInputElement> {}

const InputForm = forwardRef<HTMLInputElement, InputFormProps>(
  (props, ref) => {
    const {...rest } = props;

    return (
      <InputContainer>
        <input         
          ref={ref} // Atribui o ref ao elemento input
          {...rest}
        />
      </InputContainer>
    );
  }
);

export default InputForm; 
