// 이파일 지워도 되는듯

// import { useEffect, useState } from 'react';
//
// import { useDispatch } from 'react-redux';
//
// export const usePhotos = () => {
//   const dispatch = useDispatch();
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//
//   const fetchPhotos = async () => {
//     setLoading(true);
//     try {
//       const { data } = await axios({
//         url: `${API_URL}/photos`,
//         method: 'get',
//         headers: {
//           Authorization: `Client-ID ${CLIENT_ID}`,
//         },
//       });
//
//       dispatch(ActionCreators.setPhotos(data));
//       setError(null);
//       setLoading(false);
//     } catch (err) {
//       setError({
//         status: err.response.status,
//         message: '에러가 났습니다.',
//       });
//       setLoading(false);
//     }
//   };
//
//   useEffect(() => {
//     fetchPhotos();
//   }, []);
//
//   return {
//     // photos,
//     loading,
//     error,
//   };
// };
