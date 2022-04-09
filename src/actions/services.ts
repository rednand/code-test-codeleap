import api from "../api/axios";

export const updateCardPost = async (id, username, title, content) => {
  const data = {
    username: username,
    title: title,
    content: content,
  };
  const response = await api.put(`${id}/`, data);
  return response.data;
};

export const deletePost = async (id) => {
  const response = await api.delete(`${id}/`);
  return response.data;
};

export const fetchProducts = async () => {
  const response = await api
    .get("")
    .then((response) => response.data.results)
    .catch((err) => {
    });
};
