import {Image, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

interface Props {
  widthIconImage?: number;
  heightIconImage?: number;
  paddingHorizontal?: number;
  paddingVertical?: number;
  activeOpacity?: number;
  radius?: number;
  imagePath: NodeRequire;
  ontap: Function;
  backgroundColor?: string;
  customStyles?: any;
}

const ButtonIcon = ({
  widthIconImage = 4,
  heightIconImage = 2,
  paddingHorizontal = 4,
  paddingVertical = 2,
  ontap = () => {},
  activeOpacity = 0.8,
  imagePath,
  radius = 8,
  backgroundColor = '#03A9F1',
  customStyles,
}: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={activeOpacity}
      onPress={() => ontap}
      style={[
        styles.container,
        {
          position: 'absolute',
          borderRadius: radius,
          backgroundColor: backgroundColor,
          paddingHorizontal: wp(`${paddingHorizontal}%`),
          paddingVertical: hp(`${paddingVertical}%`),
          ...customStyles,
        },
      ]}>
      <Image
        style={{
          width: wp(`${widthIconImage}%`),
          height: hp(`${heightIconImage}%`),
        }}
        source={imagePath}
      />
    </TouchableOpacity>
  );
};

export default ButtonIcon;
