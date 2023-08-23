import { InputHTMLAttributes, forwardRef } from "react";
import { InputContainer } from "./styles";

export interface InputFormProps extends InputHTMLAttributes<HTMLInputElement> {}

// Use React.forwardRef() para envolver o seu componente funcional
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

export default InputForm; // Exporte o componente envolvido

// export function InputForm(props: InputFormProps) {
//   const { type, name, placeholder, ...rest } = props;

//   return (
//     <InputContainer >
//       <input
       
//         type={type}
//         name={name}
//         placeholder={placeholder}
//         {...rest}
//       />
//     </InputContainer>
//   );
// }
