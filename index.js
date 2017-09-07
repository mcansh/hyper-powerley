// Constants

const black = '#000000';
const red = '#E0454A';
const green = '#1EB273';
const yellow = '#F5A623';
const blue = '#1F455D';
const magenta = '#E91D76';
const white = '#CCD3DB';
const lightGray = '#AEB7BF';
const lightYellow = '#FFC105';
const lightBlue = '#469BF6';
const purple = '#836EEE';
const lightWhite = '#FFFFFF';

const colors = {
  black,
  red,
  green,
  yellow,
  blue,
  magenta,
  white,
  lightBlack: lightGray,
  lightYellow,
  lightBlue,
  lightMagenta: purple,
  lightWhite,
};

// Apply theme
exports.decorateConfig = config => Object.assign({}, config, {
  backgroundColor: blue,
  foregroundColor: white,
  borderColor: 'transparent',
  cursorColor: green,
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
  `,
});
