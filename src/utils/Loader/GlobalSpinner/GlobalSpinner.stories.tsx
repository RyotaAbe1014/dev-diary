

import type { Meta, StoryObj } from '@storybook/react';
import { GlobalSpinner } from './GlobalSpinner';

const meta: Meta<typeof GlobalSpinner> = {
  title: "utils/GlobalSpinner",
  component: GlobalSpinner,
};

export default meta;
type Story = StoryObj<typeof GlobalSpinner>;

export const Default: Story = {
  render: () => {
    return (
      <>
      <p>
        画面全体を覆うローディングスピナーです。
      </p>
      <GlobalSpinner />
      </>
    );
  }
};