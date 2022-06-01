import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { OnOff } from './OnOff'

export default {
  title: 'OnOff',
  component: OnOff,
} as ComponentMeta<typeof OnOff>

const Template: ComponentStory<typeof OnOff> = (props) => <OnOff {...props} />

export const Menu = Template.bind({})

Menu.args = {
  on: true,
}
