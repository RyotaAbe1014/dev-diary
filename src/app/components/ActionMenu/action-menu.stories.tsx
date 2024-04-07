
import type { Meta, StoryObj } from '@storybook/react';
import { ActionMenu } from './action-menu';

const meta: Meta<typeof ActionMenu> = {
  title: "components/ActionMenu",

  component: ActionMenu,
};

export default meta;
type Story = StoryObj<typeof ActionMenu>;

export const Default: Story = {
  render: () => <ActionMenu />,
};
export const Email: Story = {
  render: () => <ActionMenu email="test@test.com" />,
};