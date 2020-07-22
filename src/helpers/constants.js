import {Dimensions} from 'react-native';

const cDef = {
  darkBlue: '#021e66',
  lightBlue: '#AFEEEE',
  white: '#fff',
  black: '#000',
  red: '#ff0000',
};

export const phoneDimension = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
};

export const colors = {
  textPrimary: cDef.black,
  textInverse: cDef.white,
  backgroundBlue: cDef.darkBlue,
  backgroundLightBlue: cDef.lightBlue,
  backgroundWhite: cDef.white,
  textBlue: cDef.darkBlue,
  textWarning: cDef.red,
};

export const textSizes = {
  textSmall: 8,
  textNormal: 12,
  textLarge: 16,
  textHuge: 20,
};

export const iconSizes = {
  iconSmall: 24,
  iconNormal: 36,
  iconLarge: 48,
  iconHuge: 60,
};

export const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sept',
  'Oct',
  'Nov',
  'Dec',
];

export const componentSize = {
  halfWidth: phoneDimension.width / 2,
  quarterWidth: phoneDimension.width / 4,
};
