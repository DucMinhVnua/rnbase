import {Image, View} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

interface Props {
  radius?: number;
  borderWidth?: number;
  borderColor?: string;
  width?: number;
  height?: number;
}

const ImageCustom = ({
  radius = 100,
  borderWidth,
  borderColor,
  width = 12,
  height = 6,
}: Props) => {
  return (
    <View
      style={{
        position: 'absolute',
        borderRadius: wp(`${radius}%`),
        borderWidth: borderWidth,
        borderColor: borderColor,
      }}>
      <Image
        source={require('../../../../assets/images/img_test.png')}
        style={{
          width: wp(`${width}%`),
          height: hp(`${height}%`),
          borderRadius: radius,
        }}
        resizeMode="cover"
      />
    </View>
  );
};

export default ImageCustom;
