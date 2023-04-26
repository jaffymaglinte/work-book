import React from 'react';
import { Box, BoxProps } from '@mui/material';
import StyledPostItemHeader from './elements';
import { Button } from '@/components/atoms/Button';

// mui icons
import PublicIcon from '@mui/icons-material/Public';
import SecurityIcon from '@mui/icons-material/Security';
import Face2Icon from '@mui/icons-material/Face2';
import CloseIcon from '@mui/icons-material/Close';

import { PostItemHeaderProps } from './types';
const PostItemHeader = (props: PostItemHeaderProps) => {
  const { profile, postBy, postDate, postStatus, onClickClose, ...rest } =
    props;

  return (
    <StyledPostItemHeader {...rest}>
      <Box className="left_section">
        <Box>
          <Face2Icon />
        </Box>
        <Box className="detail">
          <Box className="posted_by">{postBy}</Box>
          <Box className="detail_box">
            {postDate} ·{' '}
            {postStatus === 'PUBLIC' ? (
              <PublicIcon fontSize="small" className="pub_pri_ico" />
            ) : (
              <SecurityIcon fontSize="small" className="pub_pri_ico" />
            )}
          </Box>
        </Box>
      </Box>
      <Box className="right_section">
        <Button onClick={onClickClose}>
          <CloseIcon />
        </Button>
      </Box>
    </StyledPostItemHeader>
  );
};

export default PostItemHeader;
