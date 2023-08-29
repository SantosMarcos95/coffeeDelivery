import {
  ImageContainer,
  IntroductionContainer,
  PainelContainer,
} from "./style";

import backgroundImg from "../../assets/successImgs/backgroundImg.svg";
import localImg from "../../assets/successImgs/iconLocal.svg";
import timerImg from "../../assets/successImgs/iconTimer.svg";
import { useContext } from "react";
import { FormContext } from "../../contexts/FormContext";

export function Success() {

  const {address} = useContext(FormContext)

  const timerEntregaMin = 20;
  const timerEntregaMax = 30;

  const payment = {
    cc: "Cartão de Crédito",
    cd: "Cartão de Débito",
    money: "Dinheiro",
  };
  return (
    <PainelContainer>
      <IntroductionContainer>
        <span className="titleStyle">Uhu! Pedido confirmado</span>
        <span className="paragrafyStyle">
          Agora é só aguardar que logo o café chegará até você
        </span>
        <div className="painelStyles">
          <div className="enderecoStyle">
            <img src={localImg} alt="" />
            <div>
              <span>
                Entrega em{" "}
                <strong>
                  Rua {address.rua},{" "}{address.numero}, {address.complemento}
                </strong>
              </span>
              <span>
                {address.bairro} - {address.cidade}, {address.uf}
              </span>
            </div>
          </div>
          <div className="enderecoStyle">
            <img src={timerImg} alt="" />
            <div>
              <span>Previsão de entrega</span>
              <span>
                <strong>
                  {timerEntregaMin} min - {timerEntregaMax} min
                </strong>
              </span>
            </div>
          </div>
          <div className="enderecoStyle">
            <img src={timerImg} alt="" />
            <div>
              <span>Pagamento na entrega</span>
              <span>
                <strong>{payment.cc}</strong>
              </span>
            </div>
          </div>
        </div>
      </IntroductionContainer>

      <ImageContainer>
        <img src={backgroundImg} alt="" />
      </ImageContainer>
    </PainelContainer>
  );
}
