const handleResponse = (result) => {
  if (result.ok) {
    return result.json();
  } else {
    return Promise.reject(`Ошибка: ${result.status}`);
  }
};

const baseUrl = 'https://single.students.nomoreparties.co'

export { handleResponse, baseUrl };