import React from 'react';
import {View} from 'react-native';
import {useTheme} from '../../../hook/useTheme/index';
import {scale} from '~/utils/styles';
import CustomLabel from '~/components/atoms/CustomLabel';
import {Spacing} from '~/utils';

export default function ScoreView({
  score,
  title,
}: {
  score: number;
  title: string;
}) {
  const {theme} = useTheme();
  return (
    <View
      style={{
        flexDirection: 'row',
      }}>
      <View
        style={{
          backgroundColor: '#0a3256',
          paddingHorizontal: scale(4),
          paddingVertical: scale(2),
          borderRadius: scale(2),
        }}>
        <CustomLabel
          text={`${score}/10`}
          style={{
            color: theme.textColor.light.primary,
          }}
        />
      </View>
      <View
        style={{
          width: Spacing.smaller,
        }}
      />
      <CustomLabel
        text={title}
        style={{
          color: theme.textColor.blue.primary,
        }}
      />
    </View>
  );
}
