/* eslint-disable react/prop-types */
import { useState } from "react";
import ResultBox from "./ResultBox";
import Side from "./side";
import {
  calculateInterestOnlyPayment,
  calculateRepaymentMortgage,
  formatCurrency,
  totalAmountRepayments,
  totalAmountInterestOnly,
} from "../ui/formatter";
import { useNavigate } from "react-router-dom";

const AppLayout = ({
  calculate,
  typeE,
  amountE,
  rateE,
  termE,
  setTermE,
  setAmountE,
  setRateE,
  setTypeE,
  setCalculate,
}) => {
  const [type, setType] = useState("");
  const navigate = useNavigate();
  const [repayments, setRepayments] = useState();
  const [interestOnly, setInterestOnly] = useState();
  const [selectedType, setSelectedType] = useState("");
  const [totalInterestOnly, setTotalInterestOnly] = useState();
  const [totalRepayments, setTotalRepayments] = useState();

  const [formData, setFormData] = useState({
    amount: "",
    term: "",
    rate: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate fields
    if (formData.amount === "") setAmountE(true);
    if (formData.term === "") setTermE(true);
    if (formData.rate === "") setRateE(true);
    if (!selectedType) setTypeE(true); // Corrected the condition

    // Handle Repayments logic
    if (selectedType === "Repayments") {
      if (!typeE && !amountE && !termE && !rateE) {
        const repay = calculateRepaymentMortgage(
          formData.amount,
          formData.rate,
          formData.term,
        );

        const totalRepay = totalAmountRepayments(+repay, +formData.term); // Pass raw value

        setRepayments(formatCurrency(+repay)); // Formatting for display only
        setTotalRepayments(formatCurrency(totalRepay)); // Store formatted total for display
        console.log(repay);
        navigate("/result", { result: true });
      }
    }

    // Handle Interest Only logic
    if (selectedType === "Interest Only") {
      if (!typeE && !amountE && !termE && !rateE) {
        const interest = calculateInterestOnlyPayment(
          formData.amount,
          formData.rate,
        );

        const totalInterest = totalAmountInterestOnly(
          +formData.amount,
          +interest, // Pass raw value
          +formData.term,
        );

        setInterestOnly(formatCurrency(+interest)); // Formatting for display only
        setTotalInterestOnly(formatCurrency(totalInterest)); // Store formatted total for display
        console.log(interest);
        navigate("/result", { replace: true });
      }
    }

    console.log(formData);
    setCalculate(true);
  };

  return (
    <main className="h-100dvh md:flex-row flex flex-col bg-white xl:mx-56 xl:mt-12 xl:h-[570px] xl:flex-row xl:items-center xl:justify-center xl:rounded-[15px]">
      <Side
        amountE={amountE}
        termE={termE}
        rateE={rateE}
        typeE={typeE}
        setAmountE={setAmountE}
        setTermE={setTermE}
        setRateE={setRateE}
        setTypeE={setTypeE}
        formData={formData}
        setFormData={setFormData}
        type={type}
        setType={setType}
        handleSubmit={handleSubmit}
        setSelectedType={setSelectedType}
      />
      <ResultBox
        amountE={amountE}
        termE={termE}
        rateE={rateE}
        typeE={typeE}
        formData={formData}
        setFormData={setFormData}
        type={type}
        setType={setType}
        handleSubmit={handleSubmit}
        repayments={repayments}
        interestOnly={interestOnly}
        selectedType={selectedType}
        calculate={calculate}
        setCalculate={setCalculate}
        totalInterestOnly={totalInterestOnly}
        totalRepayments={totalRepayments}
      />
    </main>
  );
};

export default AppLayout;
