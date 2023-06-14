import type { Preview } from '@storybook/react';
import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import { ThemeProvider } from 'styled-components';

import { Normalize } from '@/styles/normalize';
import { defaultTheme, lightTheme } from '@/styles/theme';

export const decorators = [
    withThemeFromJSXProvider({
        defaultTheme: 'dark',
        GlobalStyles: Normalize,
        Provider: ThemeProvider,
        themes: {
            dark: defaultTheme,
            light: lightTheme
        }
    })
];

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        backgrounds: {
            disable: true
        },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/
            }
        },
        options: {
            storySort: {
                order: [
                    'Documentation',
                    [
                        'Getting Started',
                        'React Hooks',
                        'NextJS',
                        'Form',
                        'Authentication',
                        'Fetch - Axios',
                        'Fetch - GraphQL',
                        'Typescript',
                        'Styled Components',
                        'Theme',
                        'Internationalization',
                        'Carousel',
                        'Image',
                        'SVG'
                    ],
                    'Design',
                    ['Color Palette', 'Typography', 'Spacings', 'Breakpoints', 'Icons'],
                    'Components'
                ]
            }
        }
    }
};

export default preview;
