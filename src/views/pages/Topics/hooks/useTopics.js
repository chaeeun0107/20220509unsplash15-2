// import styled from 'styled-components';
//
// import { useEffect, useState } from 'react';
//
// function useTopics() {
//   const [topics, setTopics] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//
//   const getTopics = async () => {
//     setLoading(true);
//     // try {
//     //   const { data } = await axios({
//     //     url: `${API_URL}/topics`,
//     //     method: 'get',
//     //     headers: {
//     //       Authorization: `Client-ID ${CLIENT_ID}`,
//     //     },
//     //     params: {
//     //       page: 1,
//     //       per_page: 30,
//     //     },
//     //   });
//     //
//     //   setTopics(data);
//     //   setLoading(false);
//     // } catch (err) {
//     //   console.log('@@ err', err);
//     //   setLoading(false);
//     //   setError({
//     //     status: err.response.status,
//     //     message: '에러가 났습니다.',
//     //   });
//     // }
//   };
//
//   useEffect(() => {
//     getTopics();
//   }, []);
//
//   return {
//     topics,
//     loading,
//     error,
//   };
// }
//
// const Container = styled.div`
//
// `;
//
// export default useTopics;
