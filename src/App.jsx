import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import AppLayout from "./components/AppLayout";
import Empty from "./components/Empty";
import Result from "./components/Result";
import "./index.css";

const App = () => {
  const [amountE, setAmountE] = useState("");
  const [termE, setTermE] = useState("");
  const [rateE, setRateE] = useState("");
  const [typeE, setTypeE] = useState();
  const [calculate, setCalculate] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <AppLayout
              typeE={typeE}
              amountE={amountE}
              setCalculate={setCalculate}
              setRateE={setRateE}
              setTermE={setTermE}
              rateE={rateE}
              setAmountE={setAmountE}
              termE={termE}
              calculate={calculate}
              setTypeE={setTypeE}
            />
          }
        >
          <Route index element={<Empty />} />
          <Route path="/empty" element={<Empty />} />
          <Route path="/result" element={<Result />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
