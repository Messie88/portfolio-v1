import { DefaultTheme, createGlobalStyle } from 'styled-components'

export const theme: DefaultTheme = {
  colors: {
    black: '#090909',
    white: '#F8F8F9',
    yellow: '#FFCC1D',
    grey: 'rgba(255, 150, 120, 0.05)',
    lightBlue: '#00E7FF',
    lightGrey: 'rgba(255, 255, 255, 0.4)',
    lightYellow: 'rgba(255, 204, 29, 0.05)',
  },

  responsive: {
    desktop: {
      valueString: '1024px',
      valueNumber: 1024,
    },
    tablet: {
      valueString: '768px',
      valueNumber: 768,
    },
    mobile: {
      valueString: '480px',
      valueNumber: 480,
    },
  },
}

export const GlobalStyle = createGlobalStyle`
    @font-face {
    font-family: 'Aquarium';
    src: url('/fonts/aquarium/AQUARIUM.woff') format('woff');
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }
  @font-face {
    font-family: 'Aquarium';
    src: url('/fonts/aquarium/AQUARIUM.ttf') format('ttf');
    font-style: bold;
    font-weight: 700;
    font-display: swap;
  }
  @font-face {
    font-family: 'Aquarium';
    src: url('/fonts/aquarium/AQUARIUM.otf') format('otf');
    font-style: bold;
    font-weight: 700;
    font-display: swap;
  }
`
