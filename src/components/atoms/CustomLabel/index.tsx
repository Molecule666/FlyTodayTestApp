import React from 'react';
import {Text} from 'react-native';
import {useTheme} from '~/hook/useTheme';
import {fontFamily} from '~/utils/styles';

export default function CustomLabel({
  text,
  style,
}: {
  text: string;
  style?: any;
}) {
  const {theme} = useTheme();
  return (
    <Text
      numberOfLines={1}
      style={[
        {
          fontFamily: fontFamily.medium,
          color: theme.textColor.dark.primary,
        },
        style,
      ]}>
      {text}
    </Text>
  );
}
