import { useState, useEffect } from "react";

function useCurrency(currency) {
  const [data, setData] = useState(null); 

  useEffect(() => {
    if (!currency) return; // Prevent fetching if currency is empty

    fetch(`https://v6.exchangerate-api.com/v6/46a488746b59a98d6d38dffb/latest/${currency}`)
      .then((res) => res.json())
      .then((res) => {
        // console.log("API Response:", res);
        setData(res.conversion_rates || {}); // Extract conversion rates
      })
      .catch((err) => {
        console.error("Error fetching currency data:", err);
        setData({}); // Prevent undefined errors
      });
  }, [currency]);

  return data;
}

export default useCurrency;
