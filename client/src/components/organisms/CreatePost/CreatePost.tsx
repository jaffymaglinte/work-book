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
  const { imgsrc, label, onClickPhotoVideo, onClickFeelingActivity, ...rest } =
    props;
  return (
    <StyledCreatePost {...rest}>
      <LeftIconWithButton
        imageSrc={imgsrc}
        label={label}
        onClickButton={() => {}}
      />
      <ActionWrapper>
        <Button onClick={onClickPhotoVideo} type="button">
          <AddPhotoAlternateIcon /> Photo/Video
        </Button>
        <Button onClick={onClickFeelingActivity} type="button">
          <AddReactionIcon /> Feeling/Activity
        </Button>
      </ActionWrapper>
    </StyledCreatePost>
  );
};

export default CreatePost;
