import React from 'react';
import {Colors} from '~/utils';
import CheckBox from '@react-native-community/checkbox';

const CustomCheckBox = ({
  toggleCheckBox,
  setToggleCheckBox,
  disabled = false,
}: {
  toggleCheckBox: boolean;
  setToggleCheckBox: (value: boolean) => void;
  disabled?: boolean;
}) => {
  return (
    <CheckBox
      disabled={disabled}
      value={toggleCheckBox}
      onValueChange={newValue => setToggleCheckBox(newValue)}
      tintColors={{true: '#46B7F7', false: '#727272'}}
      lineWidth={2}
      // hideBox
      hideBox={false}
      boxType={'square'}
      tintColor={'#727272'}
      // onCheckColor={'#46B7F7'}
      onCheckColor={'#fff'}
      onFillColor={'#46B7F7'}
      onTintColor={'transparent'}
      style={{
        width: 20,
        height: 20,
      }}
    />
  );
};

export default CustomCheckBox;
