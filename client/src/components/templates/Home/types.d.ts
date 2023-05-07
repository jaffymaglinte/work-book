import { PostItemListProps } from '@/components/organisms/PostItemList';
import CreatePostProps from '@/components/organisms/CreatePost/types';
// import { StoryProps } from '@/components/organisms/StoryItemList/types';

type HomeProps = {
  postProps: PostItemListProps;
  createPost: CreatePostProps;
};

export default HomeProps;
