import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-links',
    '@storybook/addon-styling'
  ],
  docs: {
    autodocs: 'tag',
    defaultName: 'Docs'
  },
  framework: {
    name: '@storybook/nextjs',
    options: {}
  },
  stories: ['../src/storybook/**/*.stories.@(tsx)']
};

export default config;
