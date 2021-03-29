import { addDecorator } from "@storybook/react"
import { ThemeProvider } from '@material-ui/core';
import Theme from '../src/themes/Theme'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

addDecorator(story => <ThemeProvider theme={Theme}>{ story()}</ThemeProvider>)