import styled from 'styled-components';
import axios from 'axios';

import { useEffect, useState } from 'react';

import { API_URL, CLIENT_ID } from '../../../../config';

function useTopicBySlug(slug) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getData = async () => {
    setLoading(true);
    try {
      const response = await axios({
        url: `${API_URL}/topics/${slug}`,
        method: 'get',
        headers: {
          Authorization: `Client-ID ${CLIENT_ID}`,
        },
      });

      setData(response.data);
      setLoading(false);
    } catch (err) {
      console.log('@@ err', err);
      setLoading(false);
      setError({
        status: err.response.status,
        message: '에러가 났습니다.',
      });
    }
  };

  useEffect(() => {
    getData();
  }, [slug]);

  return {
    data,
    loading,
    error,
  };
}

const Container = styled.div`

`;

export default useTopicBySlug;
