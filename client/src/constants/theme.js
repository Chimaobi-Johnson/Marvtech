import {
  PRIMARY,
  MEDIUM_BLUE,
  DARK_BLUE,
  PURPLE,
  LIGHTERGREEN,
  LIGHTGREEN,
  MEDIUMGREEN,
  LIGHTBROWN,
  GOLD,
  LIGHTGOLD
} from "./colors";

const theme = {
  typography: {
    font: {
      family: {
        display: "Poppins",
        body: "Work Sans",
        button: "DM Sans",
      },
    },
    size: {
      xxsmall: "1rem",
      xsmall: "1.1rem",
      small: "1.2rem",
      medium: "1.4rem",
      large: "1.6rem",
      xlarge: "1.8rem",
      xxlarge: "2.2rem",
      xxxlarge: "2.6rem",
    }
  },
  colors: {
    primary: PRIMARY,
    mediumBlue: MEDIUM_BLUE,
    darkBlue: DARK_BLUE,
    purple: PURPLE,
    lighterGreen: LIGHTERGREEN,
    lightGreen: LIGHTGREEN,
    mediumGreen: MEDIUMGREEN,
    lightBrown: LIGHTBROWN,
    gold: GOLD,
    lightGold: LIGHTGOLD
  }
};

const mq = {
  phone: {
    narrow: {
      minWidth: 0,
      maxWidth: "449px",
      min: "(min-width: 0)",
      max: "(max-width: 449px)",
    },
    wide: {
      minWidth: "450px",
      maxWidth: "767px",
      min: "(min-width: 450px)",
      max: "(max-width: 767px)",
    },
  },
  tablet: {
    narrow: {
      minWidth: "768px",
      maxWidth: "1023px",
      min: "(min-width: 768px)",
      max: "(max-width:1023px)",
    },
    wide: {
      minWidth: "1024px",
      maxWidth: "1279px",
    },
  },
  desktop: {
    small: {
      minWidth: "1280px",
      maxWidth: "1439px",
    },
    medium: {
      minWidth: "1440px",
      maxWidth: "1919px",
    },
    large: {
      minWidth: "1920px",
    },
  },
};

export { theme, mq };
