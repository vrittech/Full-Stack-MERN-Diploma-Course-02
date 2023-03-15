const useLocalStorage = () => {
  const getLocalData = (keyValue) => {
    return localStorage.getItem(keyValue);
  };

  const setLocalData = (keyValue, value) => {
    return localStorage.setItem(keyValue, value);
  };
  return {
    getLocalData,
    setLocalData,
  };
};

export default useLocalStorage;
