import styled from '@emotion/styled';
import { Box } from '@mui/material';

const StyledStoryItem = styled(Box)`
  position: relative;
  width: 115px;
  height: 200px;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  overflow: hidden;

  & .profile {
    position: absolute;
    left: 8px;
    top: 10px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 3px solid #fff;
    overflow: hidden;
  }

  & .img_con {
    height: 100%;
    overflow: hidden;
    & img {
      height: 100%;
      object-fit: cover;
    }
  }
  & .add_icon {
    display: ${(props: any) => (props.default ? '' : 'none')};
    position: absolute;
    bottom: 25px;
    left: 0;
    right: 0;
    margin: auto;
    font-size: 40px;
    background: #fff;
    border-radius: 50%;
    border: 1px solid #fff;
  }

  & h6 {
    background-color: ${(props: any) => (props.default ? '#fff' : '')};
    font-size: 15px;
    text-align: center;
    padding: 15px 5px 5px 5px;
    ${(props: any) =>
      !props.default
        ? ` position: absolute;
            bottom: 0;
            color: #fff;`
        : ''}
  }
`;

export default StyledStoryItem;
