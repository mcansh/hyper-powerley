// Constants

const pwlyBlue = '#324354';
const pwlyOrange = '#FC6C2B';
const pwlyGreen = '#1EB273';
const pwlyGray = '#8F969D';
const pwlyYellow = '#F5A623';
const pwlyLightBlue = '#4A90E2';

const backgroundColor = pwlyBlue;
const foregroundColor = '#ffffff';
const borderColor = 'transparent';

const black = '#000000';
const red = pwlyOrange;
const green = pwlyGreen;
const yellow = pwlyYellow;
const blue = pwlyLightBlue;
const magenta = '#EB487F';
const cyan = pwlyLightBlue;
const white = pwlyGray;
const lightBlack = '#808080';
const lightRed = red;
const lightGreen = green;
const lightYellow = yellow;
const lightBlue = blue;
const lightMagenta = magenta;
const lightCyan = cyan;
const lightWhite = '#ffffff';

const colors = {
  black,
  red,
  green,
  yellow,
  blue,
  magenta,
  cyan,
  white,
  lightBlack,
  lightRed,
  lightGreen,
  lightYellow,
  lightBlue,
  lightMagenta,
  lightCyan,
  lightWhite,
};

// Apply theme
exports.decorateConfig = config => Object.assign({}, config, {
  backgroundColor,
  foregroundColor,
  borderColor,
  cursorColor: foregroundColor,
  colors,
  css: `
    ${config.css || ''}
    .tabs_nav.nav_1qfk {
      overflow: hidden;
    }
    .tab_tab {
      background: rgba(255,255,255,0.05);
      width: 100%;
      border: none;
    }
    .tab_tab.tab_active {
      background: none;
    }
    .tabs_borderShim.borderShim_nfs {
      border-color: transparent !important;
    }
  `,
  termCSS: `
    ${config.termCSS || ''}
    x-screen a {
      color: ${yellow};
    }
  `,
});
