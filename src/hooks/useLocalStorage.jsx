import { useCallback, useState } from "react";

/**
 * 自定义 hook，用于 获取/更新 存储于 localStorage 中的用户信息
 * @param {string} key localStorage 中对应的键
 * @param {*} defaultValue 不存在时的默认值
 * @returns
 */
function useLocalStorage(key, defaultValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const value = localStorage.getItem(key);
      if (value) {
        return JSON.parse(value);
      } else {
        localStorage.setItem(key, JSON.stringify(defaultValue));
        return defaultValue;
      }
    } catch (err) {
      return defaultValue;
    }
  });

  /**
   * 用于更新状态
   * @param {*} newValue
   */
  const setValue = useCallback(
    (newValue) => {
      try {
        localStorage.setItem(key, JSON.stringify(newValue));
      } catch (err) {
        console.log(err);
      }
      setStoredValue(newValue);
    },
    [key]
  );

  return [storedValue, setValue];
}

export { useLocalStorage };
