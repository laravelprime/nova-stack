import { createTheme } from '@mui/material';

const displayFont = ["Montserrat", 'sans-serif'].join(',');

const theme = createTheme({
  radius: {
    r0_5 : 0.5,                // small components like tags
    r1 : 1,                    // medium or small components that often live inside others, like buttons or nested components
    r1_5 : 1.5,                // medium components like cards, snack bars, banners
    r2 : 2                     // large container components like sheets and dialogs
  },
  space: {
    s0: 0,                      // no space
    s0_5: 0.5,                  // tiny gaps (icons, tags, tight lists)
    s1: 1,                      // small spacing (button padding)
    s1_5: 1.5,                  // small-medium spacing
    s2: 2,                      // default padding/margin
    s3: 3,                      // section padding
    s4: 4,                      // between cards and major sections
    s5: 5,                      // page-level layout spacing
    s6: 6,                      // large vertical rhythm
    s8: 8,                      // hero sections, modals
  },
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
      fontWeight: 600
    },
    h6: {
      fontFamily: displayFont,
      fontWeight: 600
    },
    logo: {
      fontFamily: ["Lobster", 'sans-serif'].join(','),
      fontWeight: 400,
      fontSize: "1.5rem"
    },
  },
  components: {
    MuiTextField: {
      defaultProps: {
        size: 'small',
      },
    },
  },
});

export default theme;