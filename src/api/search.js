import { axiosInstance } from '../lib/axios';

export const search = async (params) => {
  const { data } = await axiosInstance({
    url: '/search',
    method: 'get',
    params,
  });
  return data;
};

export const searchPhotos = async (params) => {
  const { data } = await axiosInstance({
    url: '/search/photos',
    method: 'get',
    params,
  });
  return data;
};

export const searchCollections = async (params) => {
  const { data } = await axiosInstance({
    url: '/search/collections',
    method: 'get',
    params,
  });
  return data;
};

export const searchUsers = async (params) => {
  const { data } = await axiosInstance({
    url: '/search/users',
    method: 'get',
    params,
  });
  return data;
};
