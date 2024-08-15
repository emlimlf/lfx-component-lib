import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';
import { SectionsComponent } from '../sections.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<SectionsComponent> = {
  title: 'Example/Containers/Sections',
  component: SectionsComponent,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

export default meta;
type Story = StoryObj<SectionsComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Section: Story = {
  render: (args: any) => ({
    template: `<lfx-sections>
      <h1>Section</h1>
      <p>Section content here</p>
    </lfx-sections>
    <div style="display: grid; grid-template-columns: repeat(2,minmax(0,1fr))">
    <lfx-sections>
      <h1>Section</h1>
      <p>Section content here</p>
    </lfx-sections>
    <lfx-sections>
      <h1>Section</h1>
      <p>Section content here</p>
    </lfx-sections>
    </div>`,
  }),
};
