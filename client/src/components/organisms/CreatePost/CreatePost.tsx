import React from 'react';
import StyledCreatePost, { ActionWrapper } from './elements';
import CreatePostProps from './types';

// atoms
import { Button } from '@/components/atoms/Button';

// molecules
import LeftIconWithButton from '@/components/molecules/LeftIconWithButton';

// mui icons
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import AddReactionIcon from '@mui/icons-material/AddReaction';

const CreatePost = (props: CreatePostProps) => {
  const { imgSrc, label, onClickPhotoVideo, onClickFeelingActivity } = props;
  return (
    <StyledCreatePost {...props}>
      <LeftIconWithButton
        imageSrc={imgSrc}
        label={label}
        onClickButton={() => {}}
      />
      <ActionWrapper>
        <Button onClick={onClickPhotoVideo}>
          <AddPhotoAlternateIcon /> Photo/Video
        </Button>
        <Button onClick={onClickFeelingActivity}>
          <AddReactionIcon /> Feeling/Activity
        </Button>
      </ActionWrapper>
    </StyledCreatePost>
  );
};

export default CreatePost;
