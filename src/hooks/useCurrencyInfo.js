import { useEffect, useState } from "react";

// Fetch currency rates
function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  const [currencyList, setCurrencyList] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((res) => setData(res[currency]))
      .catch((err) => setError(err));
  }, [currency]);

  // Fetch list of currencies with their full names
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json`
    )
      .then((res) => res.json())
      .then((res) => setCurrencyList(res))
      .catch((err) => setError(err));
  }, []);

  return { data, currencyList, error };
}

export default useCurrencyInfo;
