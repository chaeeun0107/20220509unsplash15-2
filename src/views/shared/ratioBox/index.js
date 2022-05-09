import styled from 'styled-components';

function RatioBox({ children, ratio = [1, 1] }) {
  return (
    <Container ratio={ratio}>
      <div className="content">
        { children }
      </div>
    </Container>
  );
}
const Container = styled.div`
  position: relative;
  padding-bottom:  ${(props) => {
    const [x, y] = props.ratio;
    return (100 * y) / x;
  }}%;
  
  .content{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
`;

export default RatioBox;
