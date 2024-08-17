import { Meta, StoryObj } from '@storybook/angular';
import { IType, ToastComponent } from '../toast.component';

type Story = StoryObj<ToastComponent>;

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<ToastComponent> = {
  title: 'LFX Components/Containers/Toast',
  component: ToastComponent,
  tags: ['autodocs'],
  render: (args) => ({
    template: `
      <lfx-toast type="${args.type}">
        <h1>Title</h1>
        <p>Body paragraph</p>
      </lfx-toast>
    `,
  }),
  argTypes: {
    type: {
      control: 'select',
      options: ['notice', 'warning', 'success', 'error'] as IType[],
    },
  },
  args: {
    type: 'notice' as IType,
  },
};

export default meta;

export const Notice: Story = {
  args: {
    type: 'notice' as IType,
  },
};

export const Warning: Story = {
  args: {
    type: 'warning' as IType,
  },
};

export const Success: Story = {
  args: {
    type: 'success' as IType,
  },
};

export const Error: Story = {
  args: {
    type: 'error' as IType,
  },
};
