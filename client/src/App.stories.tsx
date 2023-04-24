import type { Meta, StoryObj } from "@storybook/react";

import "./index.css";
import App from "@/App";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof App> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Page/App",
  component: App,
};

export default meta;
type Story = StoryObj<typeof App>;

export const FirstStory: Story = {
  args: {
    //👇 The args you need here will depend on your component
  },
};
