/* eslint-disable no-unused-vars */
import React from "react";

function Empty() {
  return (
    <div className="mb-7 mt-9 flex w-full flex-col items-center text-white">
      <img src="../src/assets/images/illustration-empty.svg" alt="" />
      <h1 className="text-2xl font-bold">Results shown here</h1>
      <p className="mt-5 max-w-[19rem] text-Slate-300">
        Complete the form and click &quot;calculate repayments&quot; to see what
        your monthly repayments would be.
      </p>
    </div>
  );
}

export default Empty;
