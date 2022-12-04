import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import CustomContainer from '~/components/atoms/CustomContainer';

import CustomHeader from '~/components/molecules/CustomHeader';
import CustomBottomFilter from '~/components/molecules/CustomButtomFilter';
import {Spacing} from '~/utils';
import CustomLabel from '~/components/atoms/CustomLabel';
import {scale, fontFamily} from '~/utils/styles';
import HotelList from '~/components/organisms/hotelList';
import {getHotelListItems} from '~/service/getHotelListItems';
import {useTheme} from '~/hook/useTheme';
import {navigate} from '~/navigation/methods';
import {ScreenTags} from '~/screens';
import filterStore from '~/store/filterStore';

export default function HotelListScreen() {
  const {theme} = useTheme();
  const [hotelItems, setHotelItems] = useState<any>({});

  const {searchKey} = filterStore(state => state);

  console.log('searchKey => ', searchKey);

  useEffect(() => {
    setHotelItems(getHotelListItems());
  }, []);
  return (
    <CustomContainer>
      <CustomHeader title="استامبول" />
      <View
        style={{
          flexDirection: 'row-reverse',
          backgroundColor: '#fff',
          alignItems: 'center',
          minHeight: scale(50),
          paddingHorizontal: scale(8),
          paddingVertical: scale(4),
        }}>
        <CustomBottomFilter icon={'sort-descending'} />
        <View
          style={{
            width: Spacing.small,
          }}
        />
        <CustomBottomFilter
          title="فیلتر"
          icon={'filter-variant'}
          onPress={() => {
            // ScreenTags.FullScreenModalScreen
            navigate(ScreenTags.FullScreenModalScreen);
          }}
        />
      </View>
      <View
        style={{
          paddingHorizontal: scale(8),
          paddingVertical: scale(4),
        }}>
        <CustomLabel
          style={{
            fontFamily: fontFamily.regular,
            fontSize: scale(14),
            color: theme.textColor.dark.primary,
          }}
          text={
            hotelItems?.additionalInfo?.hotels.length > 0
              ? `${hotelItems?.additionalInfo?.hotels.length} هتل پیدا شده`
              : 'موردی یافت نشد.'
          }
        />
        <HotelList
          items={hotelItems?.additionalInfo?.hotels ?? []}
          detailsItems={hotelItems?.pricedItineraries ?? []}
        />
      </View>
    </CustomContainer>
  );
}
