import React from 'react';
import StyledHomepage from './elements';

// molecules
import { StoryItem } from '@/components/molecules/StoryItem';

// organisms
import CreatePost from '@/components/organisms/CreatePost';
import PostItemList, {
  PostItemListProps,
} from '@/components/organisms/PostItemList';
// import StoryItemList from '@/components/organisms/StoryItemList';

// props
import CreatePostProps from '@/components/organisms/CreatePost/types';
import { StoryProps } from '@/components/organisms/StoryItemList/types';

// dummy
import { dummyPostItemListObj } from './dummyData';

// assets
import { sampleProfile, storySampleImg, storyIcon } from '@/assets/img';

const HomePage = () => {
  const createPostObj: CreatePostProps = {
    imgsrc: sampleProfile,
    label: `What's on your mind User?`,
    onClickPhotoVideo: (event) => {},
    onClickFeelingActivity: (event) => {},
  };

  // TODO: need to refactor story
  const StoryObj: { data: StoryProps[] } = {
    data: [
      {
        id: 1,
        img: storyIcon,
        profile: storySampleImg,
        title: 'Rector Dinoy',
      },
    ],
  };

  const postItemListObj: PostItemListProps = {
    ...dummyPostItemListObj,
    onClickClose: () => {},
    onClickLike: () => {},
    onClickComment: () => {},
    onClickCommentLike: () => {},
    onClickCommentReply: () => {},
  };

  return (
    <StyledHomepage>
      <CreatePost {...createPostObj} />
      <PostItemList {...postItemListObj} />
    </StyledHomepage>
  );
};

export default HomePage;
