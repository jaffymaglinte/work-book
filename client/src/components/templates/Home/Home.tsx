import React from 'react';
import StyledHome from './elements';
import HomePops from './types';

// molecules
import { StoryItem } from '@/components/molecules/StoryItem';

// organisms
import CreatePost from '@/components/organisms/CreatePost';
import PostItemList, {
  PostItemListProps,
} from '@/components/organisms/PostItemList';
import StoryItemList from '@/components/organisms/StoryItemList';

// props
import CreatePostProps from '@/components/organisms/CreatePost/types';
import { StoryProps } from '@/components/organisms/StoryItemList/types';

// dummy
import { dummyPostItemListObj } from './dummyData';

// assets
import { sampleProfile, storySampleImg, storyIcon } from '@/assets/img';

const Home = (props: HomePops) => {
  const { postProps, createPost, ...rest } = props;

  const createPostObj: CreatePostProps = {
    imgsrc: sampleProfile,
    label: `What's on your mind User?`,
    onClickPhotoVideo: (event) => {},
    onClickFeelingActivity: (event) => {},
  };

  // TODO: need to refactor story
  // const StoryObj: { data: Story[] } = {
  //   data: [
  //     {
  //       id: 1,
  //       img: storyIcon,
  //       profile: storySampleImg,
  //       title: 'Rector Dinoy',
  //     },
  //   ],
  // };

  return (
    <StyledHome {...rest}>
      {/* <StoryItemList>
        {StoryObj.data.map((story: Story) => {
          const { id, title, profile, img } = story;
          return (
            <StoryItem title={title} profile={profile} img={img} key={id} />
          );
        })}
      </StoryItemList> */}

      <CreatePost {...createPost} />
      <PostItemList {...postProps} />
    </StyledHome>
  );
};

export default Home;
