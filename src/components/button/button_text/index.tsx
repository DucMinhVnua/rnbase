import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

interface Props {
  paddingHorizontal?: number;
  paddingVertical?: number;
  ontap: Function;
  activeOpacity?: number;
  textColor?: string;
  fontSize?: number;
  fontWeight?: string;
  fontFamily?: string;
  title: string;
  radius?: number;
  backgroundColor?: string;
  customStyles?: any;
}

const ButtonText = ({
  paddingHorizontal = 4,
  paddingVertical = 2,
  ontap = () => {},
  activeOpacity = 0.8,
  textColor = '#fff',
  fontSize = 4,
  fontWeight = 'normal',
  fontFamily,
  title = 'new user',
  radius = 8,
  backgroundColor = '#03A9F1',
  customStyles,
}: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={activeOpacity}
      onPress={() => ontap}
      style={[
        {
          position: 'absolute',
          borderRadius: radius,
          backgroundColor: backgroundColor,
          paddingHorizontal: wp(`${paddingHorizontal}%`),
          paddingVertical: hp(`${paddingVertical}%`),
          ...customStyles,
        },
      ]}>
      <Text
        style={{
          fontWeight: fontWeight,
          color: textColor,
          fontSize: wp(`${fontSize}%`),
          fontFamily: fontFamily,
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonText;
