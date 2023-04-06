const STORAGE_KEY = "@@todoApp/todoAppLocalStorage"




const initialize = (newHistory) => {
  try {
    if (localStorage.getItem(STORAGE_KEY) === null) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(
        newHistory
      ));
    }
  } catch (error) {
    console.error(error);
  }
};

const getAll = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return JSON.parse(raw);
  } catch (error) {
    console.error(error);
  }
};

const update = (data) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));

  } catch (error) {

  }
}


const todoAppLocalStorage = {
  initialize,
  getAll,
  update
}

export default todoAppLocalStorage;