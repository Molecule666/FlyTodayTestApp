import React from 'react';
import {View} from 'react-native';
import {scale} from '~/utils/styles';
import {Spacing} from '~/utils';
import CustomIcon from '~/components/atoms/CustomIcon';
import CustomLabel from '~/components/atoms/CustomLabel';
import CustomButton from '~/components/atoms/CustomButton';
import {goBack} from '~/navigation/methods';

export default function CustomHeader({
  title,
  mode = 'screen',
}: {
  title: string;
  mode?: 'screen' | 'modal';
}) {
  return (
    <View
      style={{
        width: '100%',
        height: scale(40),
        flexDirection: mode === 'modal' ? 'row' : 'row-reverse',
        justifyContent: mode === 'modal' ? 'space-between' : undefined,
        backgroundColor: '#fff',
        alignItems: 'center',
        borderBottomWidth: 0.6,
        borderBottomColor: 'gray',
        marginVertical: scale(2),
        paddingHorizontal: scale(8),
        paddingVertical: scale(4),
      }}>
      <CustomButton
        icon={
          mode === 'screen' ? 'arrow-right' : mode === 'modal' ? 'close' : ''
        }
        iconColor="gray"
        iconSize={22}
        onPress={() => {
          mode === 'modal' ? goBack() : null;
        }}
      />
      <View
        style={{
          width: Spacing.large,
        }}
      />
      <CustomLabel text={title} />
    </View>
  );
}
