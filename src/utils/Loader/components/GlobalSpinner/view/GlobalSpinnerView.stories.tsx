

import type { Meta, StoryObj } from '@storybook/react';
import { GlobalSpinnerView } from './GlobalSpinnerView';

const meta: Meta<typeof GlobalSpinnerView> = {
  title: "utils/GlobalSpinner",
  component: GlobalSpinnerView,
};

export default meta;
type Story = StoryObj<typeof GlobalSpinnerView>;

export const Default: Story = {
  render: () => {
    return (
      <>
      <p>
        画面全体を覆うローディングスピナーです。
      </p>
      <GlobalSpinnerView />
      </>
    );
  }
};