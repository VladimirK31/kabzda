import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Accordion } from './Accordion'

export default {
  title: 'Accordion',
  component: Accordion,
} as ComponentMeta<typeof Accordion>

const Template: ComponentStory<typeof Accordion> = (props) => (
  <Accordion {...props} />
)

export const Menu = Template.bind({})

Menu.args = {
  title: 'Menu',
  collapsed: false,
}
