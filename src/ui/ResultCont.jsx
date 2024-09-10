/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";

function ResultCont({
  formData,
  setFormData,
  typeE,
  termE,
  rateE,
  amountE,
  type,
  setType,
  repayments = 0,
  interestOnly = 0,
  selectedType,
  calculate,
  setCalculate,
  totalInterestOnly,
  totalRepayments,
}) {
  const [derivedResult, setDerivedResult] = useState(0);
  const [derivedTotal, setDerivedTotal] = useState(0);

  useEffect(() => {
    if (calculate) {
      if (selectedType === "Repayments") {
        setDerivedResult(repayments);
        setDerivedTotal(totalRepayments);
      } else if (selectedType === "Interest Only") {
        setDerivedResult(interestOnly);
        setDerivedTotal(totalInterestOnly);
      } else {
        setDerivedResult(0);
        setDerivedTotal(0);
      }
      // Reset the calculate state
      setCalculate(false);
    }
  }, [
    calculate,
    selectedType,
    repayments,
    interestOnly,
    totalRepayments,
    totalRepayments,
  ]);

  return (
    <div className="mt-5 h-52 w-full rounded-md border-t-4 border-lime bg-slate-950 p-4">
      <p className="text-sm text-Slate-300">Your monthly repayments</p>
      <div className="mb-3 mt-4 border-b border-Slate-300 pb-5 text-4xl font-bold text-lime">
        {derivedResult.toLocaleString("en-GB", {
          style: "currency",
          currency: "GBP",
        })}
      </div>

      <p className="text-sm text-Slate-300">
        Total you&apos;ll repay over the term
      </p>
      <h1 className="mt-3 font-bold tracking-wider text-white">
        {derivedTotal.toLocaleString("en-GB", {
          style: "currency",
          currency: "GBP",
        })}
      </h1>
    </div>
  );
}

export default ResultCont;
