/* eslint-disable prettier/prettier */
import {Dimensions} from 'react-native';
// import colors from './colors';

export const {width: deviceWidth, height: deviceHeight} =
  Dimensions.get('window');
const {height: Height} = Dimensions.get('screen');

//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;

const guidelineBaseHeight = 720;

// const screenSize = Math.sqrt(deviceWidth * deviceHeight) / 100;

export const scale = (size: any) => (deviceWidth / guidelineBaseWidth) * size;

export const verticalScale = (size: any) =>
  (Height / guidelineBaseHeight) * size;

export const moderateScale = (size: any, factor = 0.5) =>
  size + (scale(size) - size) * factor;

export const scaleSpace = (size: any) =>
  `${((size / deviceHeight) * 100).toFixed(2)}%`;

export const fontFamily = {
  light: 'IRANYekanMobileLight',
  regular: 'IRANYekanMobileRegular',
  medium: 'IRANYekanMobileMedium',
  thin: 'IRANYekanMobileThin',
  bold: 'IRANYekanMobileBold',
  boldExtra: 'IRANYekanMobileExtraBold',
};

export const headerHeight =
  Height > 700 ? verticalScale(40) : verticalScale(20);

export default {
  // colors,
  text: {
    // color: colors.dark,
    fontSize: scale(14),
    padding: 0,
    paddingBottom: 0,
    paddingRight: 8,
    paddingLeft: 8,
    width: '100%',
    paddingTop: 0,
    textAlign: 'left',
    fontFamily: fontFamily.medium,
    // fontFamily: Platform.OS === 'android' ? 'IRANYekanMobileMedium' : 'IRANYekanMobileFN-Medium',
    // fontWeight: '500',
  },
  textProfile: {
    width: '100%',
    flex: 1,
    // color: colors.dark,
    // backgroundColor: 'gold',
    padding: 0,
    paddingBottom: 5,
    paddingRight: 8,
    paddingLeft: 8,
  },
  textSearch: {
    // width: "40%",
    // color: colors.dark,
    fontSize: 20,
    // backgroundColor: 'gold',
    padding: 0,
    paddingBottom: 0,
    paddingRight: 8,
    paddingLeft: 8,
    paddingTop: 5,
  },
  textLabel: {
    // color: colors.medium,
    fontSize: 10,
  },
  backgroundView: {
    // flex: 1
    width: '100%',
    // height: '100%'
  },
  profilePictureView: {
    width: '100%',
    // justifyContent: "center",
    // alignItems: "center",
  },
  profilePicture: {
    width: 120,
    height: 120,
    borderRadius: 100,
    borderColor: 'white',
    borderWidth: 2,
  },
};
