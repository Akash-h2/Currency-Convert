import { useId } from "react";

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
}) {
    const amountInputId = useId();

    return (
        <div className="bg-white p-4 rounded-lg text-sm flex items-center justify-between">
            {/* Amount Input Section */}
            <div className="w-1/2">
                <label htmlFor={amountInputId} className="text-gray-500 mb-2 block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    type="number"
                    className="w-full outline-none bg-transparent py-1.5 border-b border-gray-300 focus:border-blue-500 transition"
                    placeholder="Enter amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>

            {/* Currency Selection Dropdown */}
            <div className="w-1/2 text-right">
                <label className="text-gray-500 mb-2 block">Currency</label>
                <select
                    className="w-full bg-gray-100 rounded-lg px-3 py-1 cursor-pointer outline-none border border-gray-300 focus:border-blue-500 transition"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                >
                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency.toUpperCase()} 
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default InputBox;
