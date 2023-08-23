import { createContext, useState, ReactNode } from "react";
import { FormData } from "../pages/checkout";




interface FormContextProps {
  children: ReactNode;
}
interface FormContextData {
  address: FormData
  handleUpdateAddressData: (formData: FormData) => void
}

export const FormContext = createContext({} as FormContextData);

export function FormProvider({ children }: FormContextProps) {

  const [addressData, setAddressData] = useState<FormData>({} as FormData);
  

  const handleAddToAddress = (formData: FormData) => {
       setAddressData(formData);
  };

  return (
    <FormContext.Provider value={{ address: addressData,handleUpdateAddressData:handleAddToAddress}}>
      {children}
    </FormContext.Provider>
  )
    
    
}