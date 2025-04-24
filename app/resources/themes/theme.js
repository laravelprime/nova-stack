import { createTheme } from '@mui/material';

const displayFont = ["Montserrat", 'sans-serif'].join(',');

const theme = createTheme({
  typography: {
    h1: {
      fontFamily: displayFont,
      fontWeight: 900
    },
    h2: {
      fontFamily: displayFont,
      fontWeight: 800
    },
    h3: {
      fontFamily: displayFont,
      fontWeight: 700
    },
    h4: {
      fontFamily: displayFont,
      fontWeight: 600
    },
    h5: {
      fontFamily: displayFont,
      fontWeight: 500
    },
    h6: {
      fontFamily: displayFont,
      fontWeight: 400
    },
    logo: {
      fontFamily: ["Lobster", 'sans-serif'].join(','),
      fontWeight: 400,
      fontSize: "1.5rem"
    },
  }
});

export default theme;