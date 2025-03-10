import { useState } from "react";
import InputBox from "./components/InputBox";
import useCurrency from "./hooks/useCurrency";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrency(from);
  const options = currencyInfo ? Object.keys(currencyInfo) : [];

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  const convert = () => {
    if (currencyInfo && currencyInfo[to]) {
      setConvertedAmount(amount * currencyInfo[to]);
    } else {
      setConvertedAmount(0);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-indigo-500 to-purple-700">
      <div className="w-full max-w-md p-6 rounded-2xl shadow-2xl bg-white/20 backdrop-blur-md border border-white/30">
        <h1 className="text-white text-3xl font-extrabold text-center mb-6">Currency Converter 💰</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
          className="space-y-4"
        >
          <InputBox
            label="From"
            amount={amount}
            currencyOptions={options}
            onCurrencyChange={(currency) => setFrom(currency)}
            onAmountChange={(amount) => setAmount(amount)}
            selectCurrency={from}
          />

          <div className="relative flex justify-center">
            <button
              type="button"
              className="bg-white text-indigo-600 p-2 rounded-full shadow-lg transition-transform transform hover:scale-110"
              onClick={swap}
            >
              🔄
            </button>
          </div>

          <InputBox
            label="To"
            amount={convertedAmount}
            currencyOptions={options}
            onCurrencyChange={(currency) => setTo(currency)}
            selectCurrency={to}
          />

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg text-lg font-semibold transition-all duration-300 hover:bg-indigo-700 shadow-lg hover:shadow-indigo-500/50"
          >
            Convert {from.toUpperCase()} ➡️ {to.toUpperCase()}
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
