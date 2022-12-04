import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
// import {Box, Center, Text} from 'native-base';
import {Colors} from '~/utils';
import {fontFamily, scale} from '~/utils/styles';
// import {widthPercentageToDP} from 'react-native-responsive-screen';
import {useTheme} from '~/hook/useTheme';
import CustomLabel from '~/components/atoms/CustomLabel';
import CustomIcon from '~/components/atoms/CustomIcon';

export default function CustomButton({
  title,
  icon,
  iconColor = Colors.BLACK,
  iconSize = 42,
  loading,
  onPress,
  outline = false,
  color,
  disabled = false,
  spinnerColor = Colors.WHITE,
  textStyle,
  borderWidth = -1,
  modalBottom,
  width,
  textColor,
  borderRadius = scale(10),
  formState,
  borderColor,
  layoutStyle,
  iconStyle,
  flexDirection = 'row',
}: {
  title?: string | undefined;
  icon?: string | undefined;
  iconColor?: string;
  iconSize?: number;
  loading?: boolean;
  onPress: any;
  color?: string | undefined;
  disabled?: boolean;
  outline?: boolean;
  spinnerColor?: any;
  textStyle?: any;
  borderWidth?: number;
  modalBottom?: number;
  width?: string | number;
  textColor?: string;
  borderRadius?: number;
  formState?: any;
  borderColor?: string;
  layoutStyle?: any;
  iconStyle?: any;
  flexDirection?: string;
}) {
  const {theme} = useTheme();

  return (
    <TouchableOpacity
      onPress={() => {
        onPress && onPress();
      }}>
      <View
        style={{
          flexDirection: flexDirection,
          alignItems: 'center',
          justifyContent: 'center',
          borderWidth: borderWidth,
          borderColor: borderColor,
          borderRadius: borderRadius,
          width: 'auto',
          paddingVertical: scale(2),
          paddingHorizontal: scale(4),
        }}>
        {title && (
          <CustomLabel
            text={title}
            style={{
              color: textColor,
            }}
          />
        )}
        {icon && <CustomIcon name={icon} color={iconColor} size={iconSize} />}
      </View>
    </TouchableOpacity>
  );
}
