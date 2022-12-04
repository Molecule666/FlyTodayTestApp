import React from 'react';
import {FlatList} from 'react-native';
import ListItemHotel from '../listItemHotel';

export default function HotelList({
  items,
  detailsItems,
}: {
  items: any[];
  detailsItems: any[];
}) {
  const renderItem = ({item, index}: {item: any; index: number}) => {
    return (
      <ListItemHotel
        key={index}
        item={item}
        details={detailsItems.find(f => f.hotelId === item.id)}
      />
    );
  };

  return (
    <FlatList
      data={items}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
    />
  );
}
