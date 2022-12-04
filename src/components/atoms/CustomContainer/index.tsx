import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  Platform,
} from 'react-native';
import {scale} from '~/utils/styles';
import {Colors} from '~/utils';
// import {headerHeight, scale} from '~/utils/styles';
// import Loading from '../Loading';

const CustomContainer = ({
  children,
  backgroundColor = '#f5f7f9',
  isLoading,
  style,
  statusBar = false,
}: {
  children: any;
  backgroundColor?: any;
  isLoading?: boolean;
  style?: any;
  statusBar?: boolean;
}) => {
  if (Platform.OS === 'ios') {
    return (
      <View
        style={[
          styles.safeArea,
          {
            backgroundColor,
            paddingTop: statusBar,
          },
          style,
        ]}>
        {/* {isLoading && <Loading />} */}
        <StatusBar barStyle="dark-content" />
        {children}
      </View>
    );
  }

  return (
    <SafeAreaView
      style={[styles.safeArea, style, {backgroundColor: backgroundColor}]}>
      {/* {isLoading && <Loading />} */}
      {children}
    </SafeAreaView>
  );
};

export default CustomContainer;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    width: '100%',
    height: '100%',
    paddingHorizontal: scale(0),
    paddingVertical: scale(0),
  },
});
