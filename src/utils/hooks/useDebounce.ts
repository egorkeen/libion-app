import { useEffect, useState } from 'react';

/**
 *@description Хук, который позволяет отложить вызовы API, чтобы они не происходили часто.
 *@param {any} value Значение.
 *@param {number} delay Задержка в миллисекундах.
 *@returns debouncedValue, которое изменится лишь спустя delay миллисекунд.
*/
export const useDebounce = (value: any, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value]);

  return debouncedValue;
};
