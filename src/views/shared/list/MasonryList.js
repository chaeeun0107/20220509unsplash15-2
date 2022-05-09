import styled from 'styled-components';

import PhotoItem from '../../pages/main/components/photoList/PhotoItem';
import { generatePhotoGroup } from '../../../utils';

function MasonryList({ data }) {
  const photosGroup = generatePhotoGroup(data);
  return (
    <Container>
      <Row>
        {
          photosGroup.map((group, groupIndex) => (
            <Col key={groupIndex}>
              {
                group.map((item, index) => (
                  <ItemWrapper>
                    <PhotoItem item={item} index={index} />
                  </ItemWrapper>
                ))
              }
            </Col>
          ))

        }
      </Row>
    </Container>
  );
}

const Container = styled.div`

`;

const Row = styled.div`
  display: flex;
  margin: 0 -10px;
`;

const Col = styled.div`
  width: 33.33%;
  padding: 0 10px;
  margin-bottom: 20px;
`;

const ItemWrapper = styled.div`
     margin-bottom: 20px;
`;

export default MasonryList;
