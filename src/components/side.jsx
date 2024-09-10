/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import Form from "./Form";
function side({
  amountE,
  setAmountE,
  termE,
  setTermE,
  rateE,
  setRateE,
  typeE,
  setTypeE,
  formData,
  setFormData,
  type,
  setType,
  handleSubmit,
  setSelectedType,
}) {
  const [selectedDiv, setSelectedDiv] = useState(null);

  function handleClear() {
    setFormData({
      amount: "",
      term: "",
      rate: "",
    });
    setSelectedDiv(null);
  }

  return (
    <section className="md:w-1/2 md:h-dvh h-1/2 p-4 xl:h-full xl:w-1/2 xl:p-7">
      <div className="mb-7 xl:flex xl:flex-row xl:justify-between">
        <h1 className="text-2xl font-bold text-Slate-900">
          Mortgage Calculator
        </h1>
        <button
          className="text-sm font-semibold text-Slate-700 underline"
          onClick={handleClear}
        >
          Clear All
        </button>
      </div>
      <Form
        formData={formData}
        setFormData={setFormData}
        selectedDiv={selectedDiv}
        setSelectedDiv={setSelectedDiv}
        typeE={typeE}
        setTypeE={setTypeE}
        termE={termE}
        setTermE={setTermE}
        rateE={rateE}
        setRateE={setRateE}
        amountE={amountE}
        setAmountE={setAmountE}
        type={type}
        setType={setType}
        handleSubmit={handleSubmit}
        setSelectedType={setSelectedType}
      />
    </section>
  );
}

export default side;
