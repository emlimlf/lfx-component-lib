import { Meta, StoryObj } from '@storybook/angular';
import { IButtonType, ButtonComponent } from '../button.component';

type Story = StoryObj<ButtonComponent>;

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<ButtonComponent> = {
  title: 'LFX Components/Buttons/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  render: (args) => ({
    template: `
      <lfx-button type="${args.type}" text="Sample Button" />
    `,
  }),
  argTypes: {
    type: {
      control: 'select',
      options: ['primary', 'secondary'] as IButtonType[],
    },
  },
  args: {
    type: 'primary' as IButtonType,
  },
};

export default meta;

export const Primary: Story = {
  args: {
    type: 'primary' as IButtonType,
  },
  parameters: {
    design: {
      type: 'figspec',
      url: 'https://www.figma.com/design/nj8rOxBtzQCa7KrvBxF4aF/Coherence-Design-System?node-id=636-7580&t=7cvVekegGeXJXBCl-0',
    },
  },
};

export const Secondary: Story = {
  args: {
    type: 'secondary' as IButtonType,
  },
  parameters: {
    design: {
      type: 'figspec',
      url: 'https://www.figma.com/design/nj8rOxBtzQCa7KrvBxF4aF/Coherence-Design-System?node-id=636-7580&t=7cvVekegGeXJXBCl-0',
    },
  },
};
