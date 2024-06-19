import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import {
  PaymentWidgetInstance,
  loadPaymentWidget,
} from "@tosspayments/payment-widget-sdk";

const clientKey = "test_ck_26DlbXAaV01OJX6EbLN5rqY50Q9R";
const customerKey = "test_sk_5OWRapdA8dJwzRlXG1yRVo1zEqZK";

const PerformanceButton = styled.button`
  width: 96.759px;
  height: 41.468px;
  flex-shrink: 0;
  border-radius: 57.595px;
  opacity: 1;
  border: none;
  background: var(--mainorange);
  color: #fff;

  text-align: center;
  font-family: Noto Sans KR;
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 2rem;
  &:hover {
    cursor: pointer;
    scale: 1.005;
  }
`;
const PayBox = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
`;

const RadioButton = styled.button`
  background: #fff;
  color: #000;
  border: 1px solid #ccc;
  padding: 10px;
  margin-right: 10px;
  transition: all 0.3s ease-in-out; // 부드럽게 변화하는 효과를 위해 transition 추가

  &.checked {
    background-color: #525970;
    color: white;
  }
`;

export const PayComponent = ({ member }) => {
  const [price, setPrice] = useState(0);

  const requestPayment = async () => {
    const paymentWidget = paymentWidgetRef.current;

    try {
      // ------ '결제하기' 버튼 누르면 결제창 띄우기 ------
      console.log(paymentWidget);
      await paymentWidget?.requestPayment({
        orderId: "p93WFPeu_ZS9--L7wNdca",
        orderName: "포인트충전",
        customerName: member?.nickName,
        customerEmail: member?.memberEmail,
        customerMobilePhone: member?.phone,
        successUrl: `${window.location.origin}/success?username=${member?.nickName}&email=${member?.memberEmail}&phone=${member?.phone}&price=${price}`,
        failUrl: `${window.location.origin}/fail`,
      });
    } catch (error) {
      // 에러 처리하기
      console.error(error);
    }
  };

  const paymentWidgetRef = useRef<PaymentWidgetInstance | null>(null);
  const paymentMethodsWidgetRef = useRef<ReturnType<
    PaymentWidgetInstance["renderPaymentMethods"]
  > | null>(null);

  useEffect(() => {
    // setParamPrice(Price);
    (async () => {
      // ------  결제위젯 초기화 ------
      const paymentWidget = await loadPaymentWidget(clientKey, customerKey); // 회원 결제

      // ------  결제 UI 렌더링 ------
      const paymentMethodsWidget = paymentWidget.renderPaymentMethods(
        "#payment-widget",
        { value: price },
        { variantKey: "DEFAULT" }
      );

      // ------  이용약관 UI 렌더링 ------
      paymentWidget.renderAgreement(
        "#agreement",
        { variantKey: "AGREEMENT" } // 기본 이용약관 UI 렌더링
      );
      paymentWidgetRef.current = paymentWidget;
      paymentMethodsWidgetRef.current = paymentMethodsWidget;
    })();
  }, [price]);

  useEffect(() => {
    const paymentMethodsWidget = paymentMethodsWidgetRef.current;

    if (paymentMethodsWidget == null) {
      return;
    }
    console.log(price);
    // ------ 금액 업데이트 ------
    paymentMethodsWidget.updateAmount(price);
  }, [price]);

  return (
    <PayBox>
      <h1 style={{ color: "#ffffff" }}>충전하기</h1>
      <span>{`${price.toLocaleString()}원`}</span>
      <div>
        <div>
          <RadioButton
            id="100000"
            name="charge"
            value="100000"
            className={price === 100000 ? "checked" : ""}
            onClick={() => setPrice(100000)}
          >
            100,000원
          </RadioButton>
          <RadioButton
            id="500000"
            name="charge"
            value="500000"
            className={price === 500000 ? "checked" : ""}
            onClick={() => setPrice(500000)}
          >
            500,000원
          </RadioButton>
          <RadioButton
            id="1000000"
            name="charge"
            value="1000000"
            className={price === 1000000 ? "checked" : ""}
            onClick={() => setPrice(1000000)}
          >
            1,000,000원
          </RadioButton>
        </div>
      </div>
      <div id="payment-widget" />
      <div id="agreement" />
      <PerformanceButton onClick={requestPayment}>결제하기</PerformanceButton>
    </PayBox>
  );
};
export default PayComponent;
