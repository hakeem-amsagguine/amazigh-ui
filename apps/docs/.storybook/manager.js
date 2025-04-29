import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming/create';

const nexaTheme = create({
  base: 'light',
  brandTitle: 'Amazigh UI',
  brandUrl: '#', // URL for your documentation/website if available
  brandTarget: '_self',
  colorPrimary: '#4F46E5', // Indigo 600
  colorSecondary: '#3B82F6', // Blue 500
});

addons.setConfig({
  theme: nexaTheme,
});