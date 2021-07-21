import { createTheme } from '@codedoc/core/transport';


export const theme = /*#__PURE__*/createTheme({
    light: {
      /*
        primary: '#5ab9ea',
        background: '#c1c8e4',
        text: '#5680e9',
        primaryContrast: '#c1c8e4'
        */
        
      primary: '#f4976c',
      background: '#fbe8a6',
      text: '#303c6c',
      primaryContrast: '#fbe8a6',
        border: '#f4976c',
        code: '#fbe8a6'               // --> CSS color string, in-text code color
         
  },
  dark: {
     
      primary: '#f76c6c',
      background: '#24305e',
      text: '#c1c8e4',
      primaryContrast: '#f8e9a1',      // --> CSS color string, text color on primary background (e.g. buttons)
      border:  '#f76c6c'              // --> CSS color string, border colors
  }
});
