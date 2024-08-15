import type { Meta, StoryObj } from '@storybook/angular';
import { NoticeComponent } from '../notice.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<NoticeComponent> = {
  title: 'Example/Containers/Notice',
  component: NoticeComponent,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['info', 'warning', 'success', 'error'],
    },
  },
};

export default meta;
type Story = StoryObj<NoticeComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Info: Story = {
  render: (args: any) => ({
    template: `<lfx-notice type="${args.type}">
      <h1>Title</h1>
      <p>Body paragraph</p>
    </lfx-notice>`,
  }),
};
