import React, { useState, useEffect } from 'react';
import CurrencyTrend from '../components/CurrencyTrend';
import styles from '@/styles/Converter.module.scss';
import Link from 'next/link';

//Define the API response type
type CurrencyListResponse = {
  success: boolean;
  currencies: Record<string, string>;
  error?: string;
};

type ConversionResultResponse = {
  success: boolean;
  result?: number;
  error?: string;
};

const Converter: React.FC = () => {
  //Define the state type
  const [amount, setAmount] = useState<number>(1);
  const [fromCurrency, setFromCurrency] = useState<string>('USD');
  const [toCurrency, setToCurrency] = useState<string>('EUR');
  const [convertedAmount, setConvertedAmount] = useState<number | null>(null);
  const [currencies, setCurrencies] = useState<string[]>([]);

  //Restore the user’s currency selection
  useEffect(() => {
    const savedFromCurrency = localStorage.getItem('fromCurrency') || 'USD';
    const savedToCurrency = localStorage.getItem('toCurrency') || 'EUR';
    console.log('Restoring from localStorage:', savedFromCurrency, savedToCurrency);
    setFromCurrency(savedFromCurrency);
    setToCurrency(savedToCurrency);
  }, []);

  //Get the list of currencies
  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        const res = await fetch(`https://api.exchangerate.host/list?access_key=${process.env.NEXT_PUBLIC_API_KEY}`);
        const data: CurrencyListResponse = await res.json();

        if (data.success) {
          setCurrencies(Object.keys(data.currencies));
        } else {
          console.error('Failed to fetch currency list:', data.error);
        }
      } catch (error) {
        console.error('Error fetching currencies:', error);
      }
    };

    fetchCurrencies();
  }, []);

  //Get the exchange rate and calculate the conversion result
  useEffect(() => {
    const fetchRate = async () => {
      try {
        const res = await fetch(
          `https://api.exchangerate.host/convert?access_key=${process.env.NEXT_PUBLIC_API_KEY}&from=${fromCurrency}&to=${toCurrency}&amount=${amount}`
        );
        const data: ConversionResultResponse = await res.json();

        if (data.success && data.result !== undefined) {
          setConvertedAmount(data.result);
        } else {
          console.error('Failed to fetch conversion rate:', data.error);
          setConvertedAmount(null);
        }
      } catch (error) {
        console.error('Error fetching conversion rate:', error);
        setConvertedAmount(null);
      }
    };

    fetchRate();

    //Save the user’s currency selection to localStorage
    console.log('Saving to localStorage:', fromCurrency, toCurrency);
    localStorage.setItem('fromCurrency', fromCurrency);
    localStorage.setItem('toCurrency', toCurrency);
  }, [fromCurrency, toCurrency, amount]);

  return (
    <div className={styles.container}>
      <h1>Currency Converter</h1>

      {/* Enter the amount to be converted */}
      <div className={styles.formGroup}>
        <input
          type="number"
          className={styles.input}
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          placeholder="Enter the amount"
          min={1}
        />

        {/* Currency selector */}
        <select 
          className={styles.select} 
          value={fromCurrency} 
          onChange={(e) => setFromCurrency(e.target.value)}
        >
          {currencies.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>

        <span>convert to</span>

        <select 
          value={toCurrency} 
          className={styles.select}
          onChange={(e) => setToCurrency(e.target.value)}
          >
          {currencies.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>

      {/* the currency conversion result */}
      <h2>
        Conversion Result:{' '}
        {convertedAmount !== null
          ? `${convertedAmount.toFixed(4)} ${toCurrency}`
          : 'Unable to retrieve the exchange rate, please try again later.'}
      </h2>

      {/* Trend chart */}
      <CurrencyTrend fromCurrency={fromCurrency} toCurrency={toCurrency} />
      
      {/* SSR page */}
      <Link href="/trend">View Currency Trend</Link>
    </div>
  );
};

export default Converter;