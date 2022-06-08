const Set = async (key, value) => {
  try {
    localStorage.setItem(key, value);
  } catch (error) {
    console.error(error);
    throw error;
  }
}

const Get = async (key) => {
  return localStorage.getItem(key);
}

export { Set, Get }
