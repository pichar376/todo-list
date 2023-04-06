import { useState } from "react";

const useLocalStorage = (itemName, initialValue) => {


  let parsedItem;

  const localStorageItem = localStorage.getItem(itemName);

  if (!localStorageItem) {

    localStorage.setItem(itemName, JSON.stringify(initialValue))
    parsedItem = initialValue

  } else {
    parsedItem = JSON.parse(localStorageItem)
  }

  const [value, setValue] = useState(parsedItem);


  const saveItem = (newItem) => {
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);

    setValue(newItem)

  }

  return [value, setValue, saveItem]
}

export default useLocalStorage;