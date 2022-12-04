import React from 'react';
import {View, Text} from 'react-native';
import CustomImage from '~/components/atoms/CustomImage';
import CustomLabel from '~/components/atoms/CustomLabel';
import {useTheme} from '~/hook/useTheme';
import {scale, fontFamily} from '~/utils/styles';
import LinearGradient from 'react-native-linear-gradient';
import CustomIcon from '~/components/atoms/CustomIcon';
import StarRating from 'react-native-star-rating';
import ScoreView from '~/components/molecules/ScorView';
import {Spacing} from '~/utils';
import CustomButton from '~/components/atoms/CustomButton';
import {numberWithCommas} from '~/utils/helper';

export default function ListItemHotel({
  item,
  details,
}: {
  item: any;
  details: any;
}) {
  const {theme} = useTheme();

  const getRatingStarsUI = (count: number) => {
    // console.log('count => ', count);

    if (count === 0) return null;

    return (
      <View
        style={{
          width: 100,
          height: 50,
          flexDirection: 'row',
          backgroundColor: 'green',
        }}>
        {[count].forEach(element => {
          return (
            <View>
              <CustomIcon
                name={'bell'}
                color={theme.iconColor.blue.primary}
                size={20}
              />
            </View>
          );
        })}
      </View>
    );
  };

  return (
    <View
      style={{
        width: '100%',
        borderRadius: scale(8),
        overflow: 'hidden',
        backgroundColor: '#fff',
        marginVertical: scale(4),
        elevation: scale(2),
        paddingBottom: scale(8),
      }}>
      <View
        style={{
          width: '100%',
        }}>
        {/* imageSource => hotelId */}
        <CustomImage
          resizeMode={'cover'}
          style={{
            width: '100%',
            height: scale(150),
            borderRadius: scale(8),
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
          }}
          imageSource={item.id}
        />
        {/* colors={['#4c669f', '#3b5998', '#192f6a']} */}
        <View
          style={{
            width: '100%',
            position: 'absolute',
            bottom: 0,
            paddingBottom: scale(4),
          }}>
          <LinearGradient colors={['#00000000', '#000000aa']}>
            <View
              style={{
                paddingHorizontal: scale(8),
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  width: '100%',
                }}>
                <CustomLabel
                  text={item.name}
                  style={{
                    width: 'auto',
                    color: theme.textColor.light.primary,
                  }}
                />
                <View
                  style={{
                    width: Spacing.smaller,
                  }}
                />
                {item.rating > 0 &&
                  [...Array(item.rating).keys()].map(mi => (
                    <CustomIcon
                      name={'star'}
                      color={theme.iconColor.gold.primary}
                      size={20}
                    />
                  ))}
              </View>

              <View
                style={{
                  flexDirection: 'row',
                }}>
                <CustomIcon name={'map-marker'} color={'#fff'} size={18} />
                <CustomLabel
                  text={item.address}
                  style={{
                    color: theme.textColor.light.primary,
                  }}
                />
              </View>
            </View>
          </LinearGradient>
        </View>
      </View>
      <View
        style={{
          width: '100%',
          marginTop: scale(12),
          paddingHorizontal: scale(8),
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <View
              style={{
                backgroundColor: '#eeeeee',
                paddingHorizontal: scale(4),
                paddingVertical: scale(2),
                borderRadius: scale(2),
              }}>
              <CustomLabel
                text={'هتل'}
                style={{
                  color: theme.textColor.gray.primary,
                }}
              />
            </View>
            <View
              style={{
                width: Spacing.smaller,
              }}
            />
            <ScoreView
              score={item.reviewScore}
              title={item.reviewScoreString}
            />
          </View>
          <CustomButton
            title={'نمایش روی نقشه'}
            textColor={theme.textColor.blue.secendory}
            icon={'chevron-right'}
            iconColor={theme.textColor.blue.secendory}
            iconSize={20}
            onPress={() => {
              console.log('click');
            }}
          />
        </View>
      </View>
      <View
        style={{
          width: '100%',
          marginTop: scale(12),
          paddingHorizontal: scale(8),
        }}>
        {details &&
          details.rooms.map((mi: any) => {
            return (
              <CustomLabel
                text={`${mi.name} (${mi.mealType})`}
                style={{
                  fontFamily: fontFamily.regular,
                  color: theme.textColor.dark.primary,
                }}
              />
            );
          })}
      </View>
      <View
        style={{
          width: '100%',
          marginTop: scale(12),
          paddingHorizontal: scale(8),
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <CustomLabel
              text={`تومان`}
              style={{
                fontFamily: fontFamily.regular,
                color: theme.textColor.gray.primary,
                fontSize: scale(12),
              }}
            />
            <View
              style={{
                width: Spacing.smaller,
              }}
            />
            <CustomLabel
              text={`${numberWithCommas(details.totalPrice)}`}
              style={{
                fontFamily: fontFamily.bold,
                color: theme.textColor.green.primary,
              }}
            />
            <View
              style={{
                width: Spacing.smaller,
              }}
            />
            <CustomLabel
              text={`قیمت ۳ شب از `}
              style={{
                fontFamily: fontFamily.regular,
                color: theme.textColor.gray.primary,
                fontSize: scale(12),
              }}
            />
          </View>
          <CustomButton
            icon={'bookmark-outline'}
            iconSize={24}
            iconColor={theme.iconColor.gray.primary}
            onPress={() => {}}
          />
        </View>
      </View>
    </View>
  );
}
