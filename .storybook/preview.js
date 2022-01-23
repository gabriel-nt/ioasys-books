import { ThemeProvider } from 'styled-components';
import { theme } from '../src/styles/theme/default';
import GlobalStyle from '../src/styles/global';
import { AuthProvider } from '../src/hooks/auth';

import * as nextImage from 'next/image';

Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: props => <img {...props} />,
});

export const decorators = [
  Story => (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AuthProvider>
        <Story />
      </AuthProvider>
    </ThemeProvider>
  ),
];

export const parameters = {
  layout: 'centered',
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
