import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Rating } from './Rating'

export default {
  title: 'Rating',
  component: Rating,
  parameters: {
    color: '',
  },
} as ComponentMeta<typeof Rating>

const Template: ComponentStory<typeof Rating> = (props) => <Rating {...props} />

export const Menu = Template.bind({})

Menu.args = {
  value: 0,
}
