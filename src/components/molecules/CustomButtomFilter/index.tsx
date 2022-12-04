import React from 'react';
import CustomButton from '~/components/atoms/CustomButton';
import {useTheme} from '~/hook/useTheme';

export default function CustomBottomFilter({
  title,
  icon = 'sort-descending',
  onPress,
}: {
  title?: string;
  icon?: string;
  onPress?: any;
}) {
  const {theme} = useTheme();
  return (
    <CustomButton
      title={title}
      textColor={theme.iconColor.gray.primary}
      icon={icon}
      iconColor={theme.iconColor.gray.primary}
      iconSize={22}
      borderColor={'#eeeeee'}
      borderWidth={0.9}
      onPress={() => {
        onPress && onPress();
      }}
    />
  );
}
