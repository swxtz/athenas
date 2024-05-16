import type { Meta, StoryObj } from "@storybook/react";
import { SocialLogin } from ".";

export const meta: Meta = {
  title: "Social Login Buttons",
  component: SocialLogin,
} as Meta;

export const Default: StoryObj = {
  render: () => (
    <SocialLogin />
  ),
};