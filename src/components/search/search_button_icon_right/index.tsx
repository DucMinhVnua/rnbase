import {TextInput, View} from 'react-native';
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
  fontSize: number;
  paddingHorizontal: number;
  paddingVertical: number;
}

const SearchButtonRight = ({
  widthSearch = 50,
  onChange,
  value,
  borderWidth = 1,
  placeholderTextColor,
  fontSize = 18,
  paddingHorizontal,
  paddingVertical,
}: Props) => {
  return (
    <View
      style={{
        paddingHorizontal: paddingHorizontal,
        paddingVertical: paddingVertical,
        borderWidth: borderWidth,
        position: 'absolute',
        borderRadius: 10,

        // backgroundColor: 'black',
      }}>
      <TextInput
        placeholderTextColor={placeholderTextColor}
        placeholder="search"
        style={{
          fontSize: fontSize,
          width: wp(`${widthSearch}%`),
        }}
        onChange={() => onChange}
        value={value}
      />
    </View>
  );
};

export default SearchButtonRight;
