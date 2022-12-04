import React from 'react';
import {View, Text} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {Spacing} from '~/utils';
import {fontFamily, scale} from '~/utils/styles';
import {useTheme} from '~/hook/useTheme';
import CustomCheckBox from '../../atoms/CustomCheckBox/index';
import CustomIcon from '~/components/atoms/CustomIcon';

export default function CustomRatingCheckBox({
  label,
  toggleCheckBox,
  setToggleCheckBox,
  stars = 0,
}: {
  label?: string;
  toggleCheckBox?: boolean;
  setToggleCheckBox?: (value: boolean) => void;
  stars?: number;
}) {
  const {theme} = useTheme();

  const getLabel = () => {
    let num: string = '';
    switch (stars) {
      case 1:
        num = 'یک';
        break;
      case 2:
        num = 'دو';
        break;
      case 3:
        num = 'سه';
        break;
      case 4:
        num = 'چهار';
        break;
      case 5:
        num = 'پنج';
        break;
      default:
    }

    return `${num} ستاره`;
  };

  return (
    <View
      style={{
        width: '100%',
        flexDirection: 'row-reverse',
        alignItems: 'center',
      }}>
      <CustomCheckBox
        toggleCheckBox={toggleCheckBox ?? false}
        setToggleCheckBox={newValue => {
          setToggleCheckBox?.(newValue);
        }}
      />

      <View
        style={{
          width: Spacing.smallest,
        }}
      />
      {stars > 0 &&
        [...Array(5).keys()].map((mi, index) => {
          return (
            <CustomIcon
              name={mi < stars ? 'star' : 'star-outline'}
              color={theme.iconColor.gold.primary}
              size={20}
            />
          );
        })}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          // width: scale(100),
        }}>
        <Text
          style={{
            fontFamily: fontFamily.medium,
            fontSize: scale(14),
            color: toggleCheckBox
              ? theme.textColor.dark.primary
              : theme.textColor.dark.tertiary,
            top: 2,
          }}>
          {getLabel()}
        </Text>
        <View
          style={{
            width: Spacing.smaller,
          }}
        />
      </View>
    </View>
  );
}
