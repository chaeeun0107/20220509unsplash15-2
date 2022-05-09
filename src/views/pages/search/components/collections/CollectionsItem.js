import styled from 'styled-components';

import { useEffect, useRef } from 'react';

import RatioBox from '../../../../shared/ratioBox';
import Tags from '../../../../shared/tags';

function CollectionsItem({ item }) {
  const itemRef = useRef();

  useEffect(() => {
    const rect = itemRef.current.getBoundingClientRect();
  }, []);
  return (
    <Container ref={itemRef}>
      <RatioBox ratio={[10, 7]}>
        <Thumb>
          <Left>
            <Image>
              <img src={item.preview_photos[0].urls.regular} alt="" />
            </Image>
          </Left>
          <Right>
            <Top>
              <img src={item.preview_photos[1].urls.regular} alt="" />
            </Top>
            <Bottom>
              <img src={item.preview_photos[2].urls.regular} alt="" />
            </Bottom>
          </Right>
        </Thumb>
      </RatioBox>
      <Des>
        <h3>blue</h3>
        <p>426 photos · Curated by Anna</p>
        <Tags tags={item.tags} />
      </Des>
    </Container>
  );
}

const Container = styled.div`

`;

const Thumb = styled.div`
  height: 100%;
  display: flex;
  border-radius: 6px;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Left = styled.div`
  width: 70%;
  padding-right: 2px;
`;

const Right = styled.div`
  width: 30%;
`;

const Top = styled.div`
  height: 50%;
  padding-bottom: 1px;
`;

const Bottom = styled.div`
  height: 50%;
  margin-bottom: 1px;
`;

const Image = styled.div`
  width: 100%;
  height: 100%;
  background-color: #eee;
`;

const Des = styled.div`
  padding: 17px 0;

  h3 {
    font-size: 18px;
    color: #111;
    margin-bottom: 5px;
    font-weight: 600;
  }

  p {
    font-size: 14px;
    color: #767676;
    margin-bottom: 5px;
  }
`;

export default CollectionsItem;
