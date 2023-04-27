import styled from '@emotion/styled';
import { Box } from '@mui/material';

const StyledPostItemControls = styled(Box)`
  & .control_header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;

    .control_box1 {
      display: flex;
      align-items: center;
      gap: 5px;

      button {
        background-color: #1489f6;
        color: #fff;
      }

      .control_icon {
        font-size: 15px;

        .MuiSvgIcon-root {
          font-size: 15px;
        }
      }
    }
  }

  & .actions {
    display: grid;
    grid-template-columns: 1fr 1fr;
    border-top: 1px solid #ececec;
    border-bottom: 1px solid #ececec;
  }

  button {
    color: black;
  }
`;

export default StyledPostItemControls;
