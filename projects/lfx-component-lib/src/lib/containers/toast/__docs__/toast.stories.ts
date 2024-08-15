import type { Meta, StoryObj } from '@storybook/angular';
import { ToastComponent } from '../toast.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<ToastComponent> = {
  title: 'LFX Components/Containers/Toast',
  component: ToastComponent,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['notice', 'warning', 'success', 'error'],
      defaultValue: 'notice',
    },
  },
};

export default meta;
type Story = StoryObj<ToastComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Info: Story = {
  render: (args: any) => ({
    template: `<lfx-toast type="${args.type}">
      <h1>Title</h1>
      <p>Body paragraph</p>
    </lfx-toast>`,
  }),
};
