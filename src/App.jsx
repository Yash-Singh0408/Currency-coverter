import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import { useState } from "react";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const { data: currencyInfo, currencyList, error } = useCurrencyInfo(from);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    if (currencyInfo && currencyInfo[to]) {
      setConvertedAmount(amount * currencyInfo[to]);
    }
  };

  if (error) {
    return <div>Error loading currency data.</div>;
  }

  return (
    <div className="w-full h-screen flex flex-wrap justify-center items-center bg-slate-700">
      <div className="w-full max-w-md mx-auto border border-gray-600 rounded-lg p-5 backdrop-blur-lg bg-white/30">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          <div className="w-full mb-1">
            <InputBox
              label="From"
              amount={amount}
              currencyOptions={currencyList}  // Pass full currency list (code and name)
              onCurrencyChange={(currency) => setFrom(currency)}
              selectCurrency={from}
              onAmountChange={(amount) => setAmount(amount)}
            />
          </div>
          <div className="relative">
            <button
              type="button"
              onClick={swap}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-500 text-white px-2 py-0.5"
            >
              Swap
            </button>
          </div>
          <div className="w-full mt-1 mb-4">
            <InputBox
              label="To"
              amount={convertedAmount}
              currencyOptions={currencyList}  // Pass full currency list (code and name)
              onCurrencyChange={(currency) => setTo(currency)}
              selectCurrency={to}
              amountDisable
            />
          </div>
          <button
            type="submit"
            disabled={!currencyInfo}
            className="w-full border-2 border-white rounded-md bg-blue-500 text-white px-2 py-0.5"
          >
            {currencyInfo ? `Convert ${from.toUpperCase()} to ${to.toUpperCase()}` : "Loading..."}
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
