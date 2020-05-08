const urlPrefix = "http://localhost:3001/";

export const handleResponse = async (res) => {
  if (!res.ok) {
    throw await res.json();
  }
  return res.json();
};

export const getUsers = () =>
  fetch(`${urlPrefix}/users`).then((res) => handleResponse(res));
