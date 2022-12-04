import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function CustomIcon({
  name,
  size = 25,
  color = 'gray',
}: {
  name: string;
  size?: number;
  color?: string;
}) {
  return <Icon name={name} size={size} color={color} />;
}
