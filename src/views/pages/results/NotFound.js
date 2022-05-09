import styled from 'styled-components';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <Container>
      <h1>404 NotFound</h1>
      <h2>요청하신 페이지를 찾을 수 없습니다.</h2>
      <Link to="/">홈으로 돌아가기</Link>
    </Container>
  );
}

const Container = styled.div`
  text-align: center;
  padding: 100px 0;

  h1 {
    font-size: 40px;
    margin-bottom: 10px;
  }

  h2 {
    font-size: 24px;
  }

  a {
    width: 130px;
    height: 40px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 6px;
    color: #fff;
    background: #18f;
    margin-top: 15px;
  }
`;

export default NotFound;
