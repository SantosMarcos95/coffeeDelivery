import { CurrencyDollarSimple, MapPinLine } from "phosphor-react";
import {
  DeliveryInformationContainer,
  FormContainer,
  CheckoutContainer,
  PaymentCointainer,
  SelectCoffeeContainer,
  PainelContainer,
  MainCoffeContainer,
} from "./styles";
import { ButtonPag } from "../../components/ButtonPag";
import cc from "../../assets/buttonImgs/cartaoCredito.svg";
import cd from "../../assets/buttonImgs/cartaoDebito.svg";
import money from "../../assets/buttonImgs/dinheiro.svg";
import { CoffeeCardMine } from "../../components/CoffeeCardMine";
import { useContext } from "react";
import { CoffeeContext } from "../../components/CoffeeCard";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import InputForm from "../../components/InputForm";
import {  useNavigate } from "react-router-dom";
import { FormContext } from "../../contexts/FormContext";

//validação dos formularios
const confirmeDeliveryFormValidation = zod.object({
  cep: zod.number().min(8, "Inseria seu cep"),
  rua: zod.string().min(1,"Iinsira sua Rua"),
  numero: zod.string().min(1,"Iinsira o Numero"),
  complemento: zod.string().min(1,"Iinsira Complemento"),
  bairro: zod.string().min(1,"Iinsira sua Bairro"),
  cidade: zod.string().min(1,"Iinsira sua Cidade"),
  uf: zod.string().min(1,"Iinsira seu Estado"),
});
export type FormData = zod.infer<typeof confirmeDeliveryFormValidation>;

export function Checkout() {
  const navigate = useNavigate();

  const { cartItems, setCartItems } = useContext(CoffeeContext);
  const { handleUpdateAddressData} = useContext(FormContext)
 

  const totalItens = cartItems.reduce((total, item) => {
    return total + parseFloat(item.price) * item.quantity;
  }, 0);
  

  const { register, handleSubmit } = useForm<FormData>({
    //configuração da validação de formulario
    resolver: zodResolver(confirmeDeliveryFormValidation),
    defaultValues: {
      cep: 0,
      bairro: "",
      cidade: "",
      complemento: "",
      numero: "",
      rua: "",
      uf: "",
    },
  });   
 
  const totalEntrega = 3.5; // Valor fixo da entrega
  const totalGeral = totalItens + totalEntrega;

  const handleConfirmPedido = (data: FormData) => {
    // console.log(formData);
    handleUpdateAddressData(data)    
    setCartItems([]);
    navigate("/success");
  };
  
  return (
     <>
      <PainelContainer>
        <CheckoutContainer>
          <DeliveryInformationContainer>
            <h3>Complete seu pedido</h3>
            <FormContainer>
              <div>
                <form
                    id="formDelivery"
                    onSubmit={handleSubmit(handleConfirmPedido)}
                  >
                    <fieldset>
                      <div>
                        <MapPinLine size={20} color="#C47F17" />
                        <h3>Endreço de Entrega</h3>
                      </div>
                      <p>Informe o endereço onde deseja receber seu pedido</p>
                      <div>
                        <InputForm
                          // id="cep"
                          type="number"
                          placeholder="CEP"
                          {...register("cep", { valueAsNumber: true })}
                          style={{ width: "40%" }}
                        />
                      </div>
                      <div>
                        <InputForm
                          // id="rua"
                          type="text"
                          placeholder="Rua"
                          {...register("rua")}
                          style={{ width: "100%" }}
                        />
                      </div>
                      <div>
                        <InputForm
                          // id="numero"
                          type="text"
                          placeholder="Número"
                          {...register("numero")}
                        />
                        <InputForm
                          // npm run dev
                          type="text"
                          placeholder="Complemento"
                          {...register("complemento")}
                        />
                      </div>
                      <div>
                        <InputForm
                          // id="bairro"
                          type="text"
                          placeholder="Bairro"
                          {...register("bairro")}
                        />
                        <InputForm
                          // id="cidade"
                          type="text"
                          placeholder="Cidade"
                          {...register("cidade")}
                        />
                        <InputForm
                          // id="uf"
                          type="text"
                          placeholder="UF"
                          {...register("uf")}
                        />
                      </div>
                    </fieldset>
                    
                  </form>
                </div>
            </FormContainer>
            <PaymentCointainer>
                <span>
                  <CurrencyDollarSimple size={20} color="#8047f8" />
                  <div>
                    <h3>Pagamento</h3>
                    <p>
                      O pagamento é feito na entrega. Escolha a forma que deseja
                      pagar
                    </p>
                  </div>
                </span>
                <div>
                  <ButtonPag description="cartão crédito" imagem={cc} />
                  <ButtonPag description="cartão débito" imagem={cd} />
                  <ButtonPag description="dinheiro" imagem={money} />
                </div>
            </PaymentCointainer>
          </DeliveryInformationContainer>
            <MainCoffeContainer>
              <h3>Cafés selecionados</h3>
              <SelectCoffeeContainer>
                {cartItems.map((item) => (
                  <CoffeeCardMine key={item.id} cartItem={item} />
                ))}
                <div>
                  <p>Total de itens</p>
                  <p>R$ {totalItens.toFixed(2)}</p>
                </div>
                <div>
                  <p>Entrega</p>
                  <p>R$ {totalEntrega.toFixed(2)}</p>
                </div>
                <div>
                  <h3>Total</h3>
                  <h3>R$ {totalGeral.toFixed(2)}</h3>
                </div>
                {/* <NavLink to="/success"> */}
                <button type="submit" form="formDelivery">
                  CONFIRMAR PEDIDO
                </button>
                {/* </NavLink> */}
              </SelectCoffeeContainer>
            </MainCoffeContainer>
        </CheckoutContainer>
      </PainelContainer>
    </>
  );
  
}
