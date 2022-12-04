import React, {useState} from 'react';
import {StyleSheet, Image, TouchableOpacity, Platform} from 'react-native';
import {Colors} from '~/utils';
import {getFullImageUrl} from '~/utils/helper';
import {scale, verticalScale} from '~/utils/styles';

const CustomImage = ({
  imageSource,
  style,
  zoomable = false,
  resizeMode = 'cover',
  backgroundColor = Colors.GRAY,
  local = false,
}: {
  imageSource?: any;
  style?: any;
  zoomable?: boolean;
  resizeMode?: 'cover' | 'center' | 'contain' | 'repeat' | 'stretch';
  backgroundColor?: any;
  local?: boolean;
}) => {
  //const imageUrl = getFullImageUrl(imageSource);

  const [imageZoom, setImageZoom] = useState<boolean>(false);

  const onPressHandler = () => {
    setImageZoom(true);
  };

  // const oncloseZoomModal = () => {
  //   setImageZoom(false);
  // };

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      disabled={!zoomable}
      onPress={onPressHandler}
      style={{
        height: style?.height ?? null,
        width: style?.width ?? null,
        borderRadius: style?.borderRadius ?? null,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image
        style={[style, {backgroundColor}, {}]}
        resizeMode={resizeMode}
        source={local ? imageSource : {uri: getFullImageUrl(imageSource)}}
      />
    </TouchableOpacity>
  );
};

export default CustomImage;
