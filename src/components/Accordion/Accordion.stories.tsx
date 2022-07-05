import React, { useState } from 'react'
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
  items: [
    { value: 1, title: 'Vovka' },
    { value: 2, title: 'Sashka' },
    { value: 3, title: 'Ben' },
  ],
  onClick: (id) => alert(`user with id ${id} SHOULD BE HAPPY`),
}
