/* eslint-disable no-unused-vars */

import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import ResultCont from "../ui/ResultCont";

const Result = () => {
  // Accessing the context values passed via the Outlet in ResultBox
  const {
    formData,
    setFormData,
    typeE,
    amountE,
    rateE,
    termE,
    type,
    setType,
    repayments,
    interestOnly,
    selectedType,
    calculate,
    setCalculate,
    totalInterestOnly,
    totalRepayments,
  } = useOutletContext();

  return (
    <div className="mt-4 flex w-full flex-col text-white">
      <h1 className="text-2xl font-bold">Your results</h1>
      <p className="mt-5 max-w-[20rem] text-base text-Slate-300">
        Your results are shown below based on the information you provided. To
        adjust the results, edit the form and click &quot;calculate
        repayments&quot; again.
      </p>
      <ResultCont
        formData={formData}
        setFormData={setFormData}
        typeE={typeE}
        amountE={amountE}
        rateE={rateE}
        termE={termE}
        type={type}
        setType={setType}
        repayments={repayments}
        interestOnly={interestOnly}
        selectedType={selectedType}
        calculate={calculate}
        setCalculate={setCalculate}
        totalInterestOnly={totalInterestOnly}
        totalRepayments={totalRepayments}
      />
    </div>
  );
};

export default Result;
