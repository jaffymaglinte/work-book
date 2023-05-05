import { PostSampleImg } from '@/assets/img';
import { Item } from '@/components/organisms/PostItem';
// mui icons
import FaceIcon from '@mui/icons-material/Face';

export const dummyPostItemListObj: { data: Item[] } = {
  data: [
    {
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
    {
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
    {
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
    {
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
    {
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
  ],
};
