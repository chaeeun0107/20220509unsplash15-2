import { useLocation, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import qs from 'qs';

import { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';

import { API_URL, CLIENT_ID } from '../../../../config';
import { ActionCreators } from '../../../../redux/reducer';

export const useSearchPhotos = () => {
  const { query } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const qsParamsStr = location.search;
  const qsParams = qs.parse(qsParamsStr, { ignoreQueryPrefix: true });
  const page = Number(qsParams?.page) || 1;

  const [data, setData] = useState({
    results: [],
    total: undefined,
    total_pages: undefined,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const dispatch = useDispatch();

  const searchPhotos = async () => {
    setLoading(true);
    try {
      const { data: resData } = await axios({
        url: `${API_URL}/search/photos`,
        method: 'get',
        headers: {
          Authorization: `Client-ID ${CLIENT_ID}`,
        },
        params: {
          query,
          page,
          per_page: 5,
        },
      });

      dispatch(ActionCreators.setSearchResults(resData));
      setLoading(false);
    } catch (err) {
      setError({
        status: err.response.status,
        message: '에러가 났습니다.',
      });
      setLoading(false);
    }
  };

  useEffect(() => {
    searchPhotos();
  }, [query, page]);

  const prevPage = () => {
    navigate(`${location.pathname}?${qs.stringify({ page: page - 1 })}`);
  };

  const nextPage = () => {
    navigate(`${location.pathname}?${qs.stringify({ page: page + 1 })}`);
  };

  return {
    loading,
    error,
    page,
    prevPage,
    nextPage,
  };
};
