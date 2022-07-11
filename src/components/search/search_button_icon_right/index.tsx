import {Image, TextInput, View} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

interface Props {
  widthSearch?: number;
  onChange?: void;
  value?: any;
  borderWidth?: number;
  placeholderTextColor?: string;
  fontSize?: number;
  paddingHorizontal?: number;
  paddingVertical?: number;
  borderRadius?: number;
  placeholder?: string;
  backgroundColor?: string;
  underlineColorAndroid?: string;
  widthIconImage?: number;
  heightIconImage?: number;
  colorText?: string;
  widthIcon?: number;
  radiusButton?: number;
  backgroundButtonIcon?: string;
  imagePath: NodeRequire;
}

const SearchButtonRight = ({
  widthSearch = 50,
  onChange,
  value,
  borderWidth = 0,
  placeholderTextColor = '#ddd',
  fontSize = 18,
  paddingHorizontal,
  paddingVertical,
  borderRadius = 8,
  placeholder = 'Search...',
  backgroundColor = '#1F232F',
  underlineColorAndroid,
  widthIconImage = 4,
  heightIconImage = 2,
  colorText = '#fff',
  widthIcon = 50,
  backgroundButtonIcon = '#565E70',
  imagePath,
}: Props) => {
  return (
    <View
      style={{
        paddingHorizontal: paddingHorizontal,
        paddingVertical: paddingVertical,
        borderWidth: borderWidth,
        position: 'absolute',
        borderRadius: borderRadius,
        backgroundColor: backgroundColor,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <TextInput
          placeholderTextColor={placeholderTextColor}
          placeholder={placeholder}
          style={{
            color: colorText,
            fontSize: fontSize,
            width: wp(`${widthSearch}%`),
          }}
          onChange={() => onChange}
          value={value}
          underlineColorAndroid={underlineColorAndroid}
        />
        <View
          style={{
            width: widthIcon,
            backgroundColor: backgroundButtonIcon,
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: borderRadius,
          }}>
          <Image
            style={{
              width: wp(`${widthIconImage}%`),
              height: hp(`${heightIconImage}%`),
            }}
            source={imagePath}
          />
        </View>
      </View>
    </View>
  );
};

export default SearchButtonRight;
