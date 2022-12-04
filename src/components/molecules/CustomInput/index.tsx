import React from 'react';
import {TextInput, View, Text} from 'react-native';
import {Colors, Spacing} from '~/utils';
import {fontFamily, scale} from '~/utils/styles';
import {useTheme} from '~/hook/useTheme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import {useController} from 'react-hook-form';
// import {CustomButton} from '~/components';

export default React.forwardRef(
  (
    {
      name,
      placeholder,
      type,
      keyboardType,
      backgroundColor = 'transparent',
      label,
      required = false,
      color = Colors.TEXT,
      textArea = false,
      info,
      disabled = false,
      icon,
      iconColor = Colors.BLACK,
      iconSize = 32,
      isSearchBox = false,
      textInputStyle,
      manual = false,
      value = '',
      onChangeText,
      onBlur,
      labelColor,
      inputStyle,
      isDark = false,
      width = '100%',
      actions,
    }: {
      name: any;
      placeholder?: string;
      type?: string;
      keyboardType?:
        | 'default'
        | 'email-address'
        | 'numeric'
        | 'phone-pad'
        | 'number-pad'
        | 'decimal-pad'
        | 'visible-password'
        | 'ascii-capable'
        | 'numbers-and-punctuation'
        | 'url'
        | 'name-phone-pad'
        | 'twitter'
        | 'web-search'
        | undefined;
      backgroundColor?: string;
      label?: string;
      required?: boolean;
      color?: string;
      textArea?: boolean;
      info?: any;
      disabled?: boolean;
      icon?: string | undefined;
      iconColor?: string;
      iconSize?: number;
      isSearchBox?: boolean;
      textInputStyle?: any;
      manual?: boolean;
      value?: string;
      onChangeText?: (text: string) => void;
      onBlur?: (e: any) => void;
      labelColor?: string;
      inputStyle?: any;
      isDark?: boolean;
      width?: string | number;
      actions?: any[];
    },
    ref: any,
  ) => {
    // const {field, fieldState} = useController({name});

    // const [visible, setVisible] = useState<boolean>(true);

    const {theme} = useTheme();

    return (
      <View
        style={{
          width: width,
          borderRadius: scale(8),
        }}>
        {label && (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontFamily: fontFamily.medium,
                fontSize: scale(16),
                color:
                  labelColor ??
                  (!isDark
                    ? theme.textColor.light.primary
                    : theme.textColor.dark.primary),
              }}>
              {label}
            </Text>
            <View
              style={{
                width: Spacing.smaller,
              }}
            />
            {required && (
              <Text
                style={{
                  color: theme.textColor.error,
                }}>
                *
              </Text>
            )}
          </View>
        )}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
          }}>
          <View
            style={[
              {
                width: '90%',
                minHeight: scale(35),
                backgroundColor: 'white',
                paddingVertical: scale(2),
                paddingHorizontal: scale(8),
                borderRadius: scale(4),
                marginTop: Spacing.smallest,
                borderWidth: scale(1),
                borderColor: '#dedede',
                flexDirection: isSearchBox ? 'row' : 'column',
                alignItems: isSearchBox ? 'center' : undefined,
              },
              textInputStyle,
            ]}>
            {icon && <Icon name={icon} size={iconSize} color={iconColor} />}
            <TextInput
              ref={ref}
              placeholder={placeholder}
              editable={!disabled}
              placeholderTextColor="#B3B3B3"
              keyboardType={keyboardType}
              underlineColorAndroid={'#00000000'}
              value={value}
              onChangeText={onChangeText}
              onBlur={onBlur}
              style={[
                {
                  flex: 1,
                  fontSize: scale(14),
                  textAlign: 'right',
                  // color: theme.textColor.textInput,
                  paddingVertical: scale(4),
                },
                inputStyle,
              ]}
            />
          </View>
        </View>
      </View>
    );
  },
);
