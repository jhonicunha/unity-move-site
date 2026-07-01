// @project
import { extendPaletteWithChannels } from '@/utils/colorUtils';

/***************************  DEFAULT / AI THEME - PALETTE  ***************************/

export function buildPalette() {
  const textPrimary = '#FFFFFF'; // White for primary text
  const textSecondary = '#A2B4C4'; // Muted blue-grey for secondary text
  const divider = '#2a2a2a'; // Subtle dark grey border
  const background = '#1a1a1a'; // Dark grey (almost black) background

  const lightPalette = {
    primary: {
      lighter: 'rgba(15, 126, 244, 0.15)', // Soft blue glow for container
      light: '#5ba4f8',
      main: '#0F7EF4', // Vibrant strong blue
      dark: '#0b61be', // Darker blue for hover
      darker: '#063261'
    },
    secondary: {
      lighter: '#242424',
      light: '#2b809e',
      main: '#2b809e',
      dark: '#153145',
      darker: '#FFF'
    },
    grey: {
      50: '#202020', // Darkest grey for card bg
      100: '#242424', // Card bg
      200: '#2d2d2d', // Container background
      300: '#353535', // Hover container
      400: '#424242', // Border/line
      500: '#505050', // Divider
      600: divider,
      700: '#8e929c',
      800: textSecondary,
      900: textPrimary
    },
    text: {
      primary: textPrimary,
      secondary: textSecondary
    },
    divider,
    background: {
      default: background,
      paper: '#242424' // Dark paper elements
    }
  };

  const commonColor = { common: { black: '#000', white: '#fff' } };

  const extendedLight = extendPaletteWithChannels(lightPalette);
  const extendedCommon = extendPaletteWithChannels(commonColor);

  return {
    light: {
      mode: 'dark',
      ...extendedCommon,
      ...extendedLight
    },
    dark: {
      mode: 'dark',
      ...extendedCommon,
      ...extendedLight
    }
  };
}
