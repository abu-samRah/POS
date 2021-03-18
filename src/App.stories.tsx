import React from 'react'
import { Story, Meta } from '@storybook/react';
import App, {ButtonProps} from './App'
import Button from './components/Button/ButtonComp'
// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: "App",
    componenet: App
}as Meta;

const Template:Story<ButtonProps> = (args:{}) => <Button {...args} />
export const SweetDangerButton = Template.bind({}) 
SweetDangerButton.args = {
    variant:"outlined"
}

