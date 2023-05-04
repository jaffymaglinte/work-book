import React from 'react';
import StyledHomepage from './elements';

// molecules
import { StoryItem } from '@/components/molecules/StoryItem';

// organisms
import CreatePost from '@/components/organisms/CreatePost';
import StoryItemList from '@/components/organisms/StoryItemList';
import PostItem from '@/components/organisms/PostItem';

// props
import CreatePostProps from '@/components/organisms/CreatePost/types';
import { Story } from '@/components/organisms/StoryItemList/types';
import PostItemProps, {
  Item,
  Comment,
} from '@/components/organisms/PostItem/types';

// assets
import {
  sampleProfile,
  storySampleImg,
  storyIcon,
  PostSampleImg,
} from '@/assets/img';

// mui icons
import FaceIcon from '@mui/icons-material/Face';

const HomePage = () => {
  const createPostObj: CreatePostProps = {
    imgSrc: sampleProfile,
    label: `What's on your mind User?`,
    onClickPhotoVideo: () => {},
    onClickFeelingActivity: () => {},
  };

  // TODO: need to refactor story
  const StoryObj: { data: Story[] } = {
    data: [
      {
        id: 1,
        img: storyIcon,
        profile: storySampleImg,
        title: 'Rector Dinoy',
      },
    ],
  };

  const postItemObj: PostItemProps = {
    item: {
      profile: <FaceIcon />,
      postBy: 'Jaffy Maglinte',
      postDate: '2023/10/21',
      content: `In ReactJS with TypeScript, ReactNode is a type that represents a React element, an array of React elements, or a string, number, or boolean. It is defined in the react module and can be used to specify the type of a variable that can hold any of these types.`,
      // @ts-ignore: Unreachable code error
      postStatus: 'PUBLIC',
      photo: PostSampleImg,
      comments: [
        { id: 1, name: 'Jaffy Maglinte', content: 'Lorem ipsum' },
        { id: 2, name: 'Jaffy Maglinte', content: 'Lorem ipsum 2' },
        { id: 3, name: 'Jaffy Maglinte', content: 'Lorem ipsum 3' },
      ],
      totalLikes: 100,
    },
    onClickClose: () => {},
    onClickLike: () => {},
    onClickComment: () => {},
    onClickCommentLike: () => {},
    onClickCommentReply: () => {},
  };

  return (
    <StyledHomepage>
      {/* <StoryItemList>
        {StoryObj.data.map((story: Story) => {
          const { id, title, profile, img } = story;
          return (
            <StoryItem title={title} profile={profile} img={img} key={id} />
          );
        })}
      </StoryItemList> */}
      <CreatePost {...createPostObj} />
      <PostItem {...postItemObj} />
    </StyledHomepage>
  );
};

export default HomePage;
