import React from 'react';
import {View, Dimensions, Platform} from 'react-native';
import Modal from 'react-native-modal';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight =
  Platform.OS === 'ios'
    ? Dimensions.get('window').height
    : require('react-native-extra-dimensions-android').get(
        'REAL_WINDOW_HEIGHT',
      );

export default function CustomModal({visible}: {visible: boolean}) {
  return (
    <Modal
      // transparent={true}
      // onRequestClose={() => {
      //   setVisible(false);
      // }}
      isVisible={visible}
      deviceWidth={deviceWidth}
      deviceHeight={deviceHeight}>
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#fff',
        }}></View>
    </Modal>
  );
}
