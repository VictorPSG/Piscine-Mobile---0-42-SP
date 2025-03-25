import { styles } from './styles.js';
import { useWindowDimensions } from 'react-native';

export function responsive() {
  const { width, height } = useWindowDimensions();
  const isPortrait = height >= width;

  const headerStyle = { ...styles.header };
  if (isPortrait) {
    headerStyle.paddingTop = 50;
    headerStyle.paddingBottom = 20;
  } else {
    headerStyle.paddingTop = 20;
    headerStyle.paddingBottom = 10;
  }

  const displayStyle = { ...styles.display };
  if (isPortrait) {
    displayStyle.padding = 16;
  } else {
    displayStyle.padding = 8;
  }

  const rowStyle = { ...styles.row };
  if (isPortrait) {
    rowStyle.marginBottom = 6;
  } else {
    rowStyle.marginBottom = 3;
  }

  const buttonStyle = { ...styles.button };
  if (isPortrait) {
    buttonStyle.paddingVertical = 10;
  } else {
    buttonStyle.paddingVertical = 0;
  }

  const displayTextStyle = { ...styles.displayText };
  if (isPortrait) {
    displayTextStyle.fontSize = 48;
    displayTextStyle.paddingHorizontal = 26;
  } else {
    displayTextStyle.fontSize = 36;
    displayTextStyle.paddingHorizontal = 84;
  }

  return { headerStyle, displayStyle, rowStyle, buttonStyle, displayTextStyle };
}