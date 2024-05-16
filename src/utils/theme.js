import {
  responsiveHeight as rh,
  responsiveWidth as rw,
  responsiveFontSize as rf
} from "react-native-responsive-dimensions";

const appTheme = false;

export let Colors = {
  light:appTheme?"#181818":"#FFFFFF",
  gray: "#adadad",
  gray_border: appTheme?"#181818":"#E5E5E5",
  gray_light: "#f0f0f0",
  gray_secondary: appTheme?"#FAFBF4":"#5e5e5e",
  light_secondary: "#68BBE3",
  light_secondary_two:"#A5D9F0",
  dark: appTheme?"#FAFBF4":"#2C3539", 
  primary: "#055C9D",
  secondary: "#0E86D4",
  danger: appTheme?"#FF0000":"#d11313",
  warning: "#ffee00",
  green: appTheme?"#00FF00":"green",
  selected:'#d2e6fc',
  pro:"#fa8805"
};

export const responsive = {
  rh,
  rw,
  rf
};

export const FontSize = {
  mirco: rf(1.35),
  macro:rf(1.45),
  mini: rf(1.55),
  small: rf(1.65),
  read: rf(1.95),
  small_tow: rf(2.40),
  medium: rf(3.80),
  medium_two: rf(2.80),
  large: rf(3.90),
};
