// src/config/CurrencyRates.jsx
import React, { useState, useEffect } from 'react';

const CurrencyRates = () => {
  const [usdToUz, setUsdToUz] = useState(null);
  const [rubToUz, setRubToUz] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCurrencyRates = async () => {
      try {
        const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD'); // USD dan boshqa valyutalarga nisbatan kurslar
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setUsdToUz(data.rates['UZS']); // USD dan UZS ga kurs
        const rubResponse = await fetch('https://api.exchangerate-api.com/v4/latest/RUB'); // RUB dan boshqa valyutalarga nisbatan kurslar
        const rubData = await rubResponse.json();
        setRubToUz(rubData.rates['UZS']); // RUB dan UZS ga kurs
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCurrencyRates();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <ul className='flex gap-2'>
        <li>USD: {usdToUz} UZS</li>
        <li>RUB: {rubToUz} UZS</li>
      </ul>
    </div>
  );
};

export default CurrencyRates;
