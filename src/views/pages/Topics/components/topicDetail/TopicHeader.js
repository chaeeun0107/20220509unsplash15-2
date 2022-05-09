import styled from 'styled-components';

import cn from 'classnames';

import { IconImage, IconLightning, IconUser, IconUsers } from '../../../../../icons';
import { totalFormat } from '../../../../../utils';

function TopicHeader({ data }) {
  const {
    title,
    description,
    status,
    owners,
    total_photos,
    top_contributors,
  } = data;
  console.log('@@ data', data);

  return (
    <Container>
      <TitleArea>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: description }} />
      </TitleArea>
      <Summary>
        <ul>
          <li>
            <IconLightning />
            <div className="label">status</div>
            <div className={cn('content status', status)}>{status}</div>
            {/* <div className="content status">{status}</div> */}
          </li>
          <li>
            <IconUser />
            <div className="label">Curator</div>
            <div className="content curator">
              <img src={owners?.[0]?.profile_image?.small} alt="" />
            </div>
          </li>
          <li>
            <IconImage />
            <div className="label">Contributions</div>
            <div className="content">{totalFormat(total_photos)}</div>
          </li>
          <li>
            <IconUsers />
            <div className="label">
              Top contributors
            </div>
            <div className="content contributors">
              {
                top_contributors?.map?.((item, index) => <img key={index} src={item.profile_image.small} alt="" />)
              }
            </div>
          </li>
        </ul>
        <ButtonRender>
          Submit to
          <strong>{data.title}</strong>
        </ButtonRender>
      </Summary>
    </Container>
  );
}

const Container = styled.div`
  padding: 80px 0;
  display: flex;
`;

const TitleArea = styled.div`
  flex: 2;
  margin-right: 50px;

  h1 {
    font-size: 46px;
    color: #111;
    font-weight: bold;
    margin-bottom: 16px;
  }

  p {
    font-size: 18px;
    color: #111;
    line-height: 1.6;
  }
`;

const Summary = styled.div`
  flex: 1;
  ul {
    border: 1px solid #ddd;
    border-radius: 6px;
    padding: 24px;
    
    li{
      display: flex;
      align-items: center;
      border-bottom: 1px solid #eee;
      padding: 8px 0;
      
      svg{
        width: 18px;
        //color: #bbb;
        fill: #bbb;
        margin-right: 8px;
      }
      
      .label{
        flex: 1;
      }
      
      .curator{
        img{
          width: 32px;
          height: 32px;
          border-radius: 50%;
        }
      }
      
      .status{
        width: 65px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-transform: capitalize;
        font-weight: 500;
        font-size: 14px;
        &.open{
          background: #c2ebd3;
          color: #111;
          border-radius: 3px;
        }
      }
      
      .contributors{
        img{
          width: 16px;
          height: 16px;
          border-radius: 50%;
          margin-left: 8px;
        }
      }
    }
  }
`;

const ButtonRender = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #111;
  color: #fff;
  height: 44px;
  font-size: 15px;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 20px;

  strong {
    font-weight: bold;
    margin-left: 5px;
  }
`;

export default TopicHeader;
