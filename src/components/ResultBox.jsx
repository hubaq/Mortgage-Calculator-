/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Empty from "./Empty";
import Result from "./Result";
import { Outlet } from "react-router-dom";

function ResultBox({
  typeE,
  rateE,
  termE,
  amountE,
  formData,
  setFormData,
  type,
  setType,
  repayments,
  interestOnly,
  selectedType,
  calculate,
  setCalculate,
  totalInterestOnly,
  totalRepayments,
}) {
  return (
    <div className="md:w-1/2 md:h-dvh h-1/2 bg-Slate-900 p-4 xl:h-full xl:w-1/2 xl:rounded-r-[15px] xl:rounded-bl-[80px]">
      <Outlet
        context={{
          formData,
          setFormData,
          typeE,
          amountE,
          termE,
          rateE,
          repayments,
          interestOnly,
          selectedType,
          calculate,
          setCalculate,
          totalInterestOnly,
          totalRepayments,
        }}
      />
    </div>
  );
}

export default ResultBox;
