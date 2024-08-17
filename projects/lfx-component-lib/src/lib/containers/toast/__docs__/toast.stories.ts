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
  parameters: {
    design: {
      type: "figspec",
      url: "https://www.figma.com/design/nj8rOxBtzQCa7KrvBxF4aF/Coherence-Design-System?node-id=772-5198&t=zfHib1d5XSXabYJp-4",
    },
  },
};

export const Warning: Story = {
  args: {
    type: 'warning' as IType,
  },
  parameters: {
    design: {
      type: "figspec",
      url: "https://www.figma.com/design/nj8rOxBtzQCa7KrvBxF4aF/Coherence-Design-System?node-id=772-5205&t=zfHib1d5XSXabYJp-4",
    },
  },
};

export const Success: Story = {
  args: {
    type: 'success' as IType,
  },
  parameters: {
    design: {
      type: "figspec",
      url: "https://www.figma.com/design/nj8rOxBtzQCa7KrvBxF4aF/Coherence-Design-System?node-id=772-5207&t=zfHib1d5XSXabYJp-4",
    },
  },
};

export const Error: Story = {
  args: {
    type: 'error' as IType,
  },
  parameters: {
    design: {
      type: "figspec",
      url: "https://www.figma.com/design/nj8rOxBtzQCa7KrvBxF4aF/Coherence-Design-System?node-id=772-5210&t=zfHib1d5XSXabYJp-4",
    },
  },
};
