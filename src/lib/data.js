import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4200',
});

export const fetchUserById = async (username) => {
  const response = await api.get(`/${username}`);
  return response.data;
};

export const fetchReposByUser = async (username) => {
  const response = await api.get(`/${username}/repos`);
  return response.data;
};

export const fetchCommitsByRepo = async (username, repo) => {
  const response = await api.get(`/${username}/${repo}/commits`);
  return response.data;
};