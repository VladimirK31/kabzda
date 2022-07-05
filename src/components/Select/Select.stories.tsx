import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Select } from './Select'

export default {
  title: 'Select',
  component: Select,
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = (props) => <Select {...props} />

export const MySelect = Template.bind({})

MySelect.args = {
  items: [
    { id: 1, title: 'Vovka' },
    { id: 2, title: 'Sashka' },
    { id: 3, title: 'Ben' },
  ],
}
