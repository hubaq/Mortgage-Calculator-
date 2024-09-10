/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

function Form({
  formData,
  setFormData,
  selectedDiv,
  setSelectedDiv,
  setAmountE,
  amountE,
  termE,
  setTermE,
  rateE,
  setRateE,
  typeE,
  setTypeE,
  type,
  setType,
  handleSubmit,
  setSelectedType,
}) {
  const handleDivClick = (div) => {
    setSelectedDiv(div);

    // Set the type based on the clicked div
    if (div === "option1") {
      setType("Repayments");
    } else if (div === "option2") {
      setType("Interest Only");
    }

    setSelectedType(div === "option1" ? "Repayments" : "Interest Only");
    setType(div === "option1" ? "Repayments" : "Interest Only");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Mortgage Amount */}
      <label htmlFor="" className="font-semibold text-Slate-700">
        Mortgage Amount
      </label>
      <div className="mt-3 flex">
        <input
          type="text"
          readOnly
          value="&pound;"
          className={`w-10 rounded-l border-b-2 border-l-2 border-t-2 ${
            amountE ? "border-red" : "border-Slate-500"
          } ${amountE ? "bg-red" : "bg-Slate-100"} p-2 text-center font-semibold ${
            amountE ? "text-white" : "text-Slate-500"
          } focus:outline-none`}
        />
        <input
          type="text"
          name="amount"
          value={formData.amount}
          onChange={(e) => {
            handleChange(e);
            if (amountE === true) setAmountE(false);
          }}
          className={`sm:w-full w-full cursor-pointer rounded-r border-b-2 border-r-2 border-t-2 ${
            amountE ? "border-red" : "border-Slate-500"
          } p-2 font-bold text-Slate-900 focus:outline-none`}
        />
      </div>
      {amountE && (
        <p className="mt-3 text-sm text-red">This field is required</p>
      )}

      <div className="sm:flex-row mt-5 flex w-full flex-col gap-3 xl:mt-4 xl:justify-between">
        {/* Mortgage Term */}
        <div className="flex min-w-0 flex-1 flex-col gap-2">
          <label htmlFor="term" className="font-semibold text-Slate-700">
            Mortgage Term
          </label>
          <div className="flex">
            <input
              type="text"
              name="term"
              value={formData.term}
              onChange={(e) => {
                handleChange(e);
                if (termE === true) setTermE(false);
              }}
              className={`min-w-0 max-w-full flex-grow cursor-pointer rounded-l border-b-2 border-l-2 border-t-2 ${
                termE === true ? "border-red" : "border-Slate-500"
              } p-2 font-bold text-Slate-900 focus:outline-none`}
            />
            <input
              type="text"
              readOnly
              value="years"
              className={`md:w-20 w-16 rounded-r border-b-2 border-r-2 border-t-2 xl:w-20 ${
                termE === true
                  ? "border-red bg-red text-white"
                  : "border-Slate-500 bg-Slate-100 text-Slate-500"
              } p-2 text-center font-semibold focus:outline-none`}
            />
          </div>
          {termE === true && (
            <p className="mt-3 text-sm text-red">This field is required</p>
          )}
        </div>

        {/* Interest Rate */}
        <div className="flex min-w-0 flex-1 flex-col gap-2">
          <label htmlFor="rate" className="font-semibold text-Slate-700">
            Interest Rate
          </label>
          <div className="flex">
            <input
              type="text"
              name="rate"
              value={formData.rate}
              onChange={(e) => {
                handleChange(e);
                if (rateE === true) setRateE(false);
              }}
              className={`min-w-0 max-w-full flex-grow cursor-pointer rounded-l border-b-2 border-l-2 border-t-2 ${
                rateE === true ? "border-red" : "border-Slate-500"
              } p-2 font-bold text-Slate-900 focus:outline-none`}
            />
            <input
              type="text"
              readOnly
              value="%"
              className={`md:w-14 w-12 rounded-r border-b-2 border-r-2 border-t-2 xl:w-14 ${
                rateE === true
                  ? "border-red bg-red text-white"
                  : "border-Slate-500 bg-Slate-100 text-Slate-500"
              } p-2 text-center font-semibold focus:outline-none`}
            />
          </div>
          {rateE === true && (
            <p className="mt-3 text-sm text-red">This field is required</p>
          )}
        </div>
      </div>

      {/* Other Inputs */}
      {/* ... */}

      {/* Mortgage Type */}
      <div className="mb-4 mt-4 flex flex-col gap-2">
        <label htmlFor="" className="font-semibold text-Slate-700">
          Mortgage Type
        </label>
        <div className="flex flex-col gap-2">
          <div
            className={`${
              selectedDiv === "option1" ? "checked" : ""
            } relative flex h-11 w-full cursor-pointer gap-3 rounded border-2 border-Slate-500 p-2 pl-10 font-bold after:absolute after:left-4 after:top-4 after:h-3 after:w-3 after:rounded-full after:border after:border-Slate-700 after:bg-transparent`}
            onClick={() => {
              handleDivClick("option1");
              setTypeE(false); // Disable error display
            }}
          >
            Repayments
          </div>
          <div
            className={`${
              selectedDiv === "option2" ? "checked" : ""
            } relative flex h-11 w-full cursor-pointer gap-3 rounded border-2 border-Slate-500 p-2 pl-10 font-bold after:absolute after:left-4 after:top-4 after:h-3 after:w-3 after:rounded-full after:border after:border-Slate-700 after:bg-transparent`}
            onClick={() => {
              handleDivClick("option2");
              setTypeE(false); // Disable error display
            }}
          >
            Interest Only
          </div>
          {typeE && <p className="text-sm text-red">This field is required</p>}
        </div>
      </div>

      {/* Submit Button */}
      <button className="flex w-full items-center justify-center gap-3 rounded-3xl bg-lime px-7 py-2 text-sm font-bold text-Slate-900 transition-colors duration-300 hover:bg-lime/75 xl:w-auto">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            fill="#133041"
            d="M18.75 2.25H5.25a1.5 1.5 0 0 0-1.5 1.5v16.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V3.75a1.5 1.5 0 0 0-1.5-1.5Zm-10.5 16.5a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Zm0-3.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25ZM12 18.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25ZM12 15a1.125 1.125 0 1 1 0-2.25A1.125 1.125 0 0 1 12 15Zm3.75 3.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Zm0-3.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Zm1.5-5.25a.75.75 0 0 1-.75.75h-9a.75.75 0 0 1-.75-.75V6a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 .75.75v3.75Z"
          />
        </svg>
        Calculate {type || "Repayments"}
      </button>
    </form>
  );
}

export default Form;
