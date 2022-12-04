import React, {useState} from 'react';
import {View} from 'react-native';
import CustomContainer from '~/components/atoms/CustomContainer';
import CustomHeader from '~/components/molecules/CustomHeader';
import {scale, fontFamily} from '~/utils/styles';
import CustomLabel from '~/components/atoms/CustomLabel';
import {useTheme} from '~/hook/useTheme';
import CustomButton from '~/components/atoms/CustomButton';
import CustomInput from '~/components/molecules/CustomInput';
import {Spacing} from '~/utils';
import CustomRatingCheckBox from '~/components/molecules/CustomRatingCheckBox';
import filterStore from '~/store/filterStore';

export default function FullScreenModalScreen() {
  const {theme} = useTheme();

  const [value, setValue] = useState<string>('');

  const {search, setSearch} = filterStore(state => state);

  return (
    <CustomContainer>
      <CustomHeader title="فیلرکردن نتایج" mode="modal" />
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#fff',
          alignItems: 'center',
          minHeight: scale(50),
          paddingHorizontal: scale(8),
          paddingVertical: scale(4),
          justifyContent: 'space-between',
        }}>
        <CustomButton
          title="لغو فیلترها"
          onPress={() => {}}
          textColor={theme.textColor.blue.secendory}
        />
        <CustomLabel
          style={{
            fontFamily: fontFamily.regular,
            fontSize: scale(12),
            color: theme.textColor.dark.primary,
          }}
          text={`${24} هتل پیدا شده`}
        />
      </View>

      <View
        style={{
          flexDirection: 'row-reverse',
          backgroundColor: '#fff',
          alignItems: 'center',
          paddingHorizontal: scale(12),
          paddingVertical: scale(4),
        }}>
        <View
          style={{
            minHeight: scale(30),
            minWidth: scale(60),
            backgroundColor: '#e1effc',
            borderColor: '#1b76ff',
            borderWidth: 0.9,
            borderRadius: scale(25),
            paddingHorizontal: scale(8),
            paddingVertical: scale(2),
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <CustomButton
            icon={'close'}
            iconColor={'#1b76ff'}
            iconSize={18}
            flexDirection={'row-reverse'}
            onPress={() => {
              console.log('close tag');
            }}
            title={'۵ ستاره'}
            textColor={theme.textColor.blue.secendory}
          />
        </View>
      </View>
      <View
        style={{
          height: Spacing.small,
        }}
      />
      <CustomInput
        name={'search'}
        placeholder={'جستجوی نام هتل'}
        value={value}
        onChangeText={text => {
          setValue(text);
          setSearch(text);
        }}
      />
      <View
        style={{
          height: Spacing.small,
        }}
      />
      <View
        style={{
          width: '100%',
          paddingHorizontal: scale(16),
        }}>
        {[...Array(5).keys()].reverse().map(mi => {
          return (
            <View
              style={{
                height: 40,
                marginVertical: scale(2),
              }}>
              <CustomRatingCheckBox stars={mi + 1} />
            </View>
          );
        })}
      </View>
    </CustomContainer>
  );
}
