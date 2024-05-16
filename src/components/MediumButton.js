import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {Colors, responsive, FontSize} from '../utils/theme';

const MediumButton = ({
  text,
  fill = true,
  bgcolor = Colors.secondary,
  width = "100%",
  loading = false,
  paddings = 1.5,
}) => {
  return (
    <View
      style={{
        padding: responsive.rf(paddings),
        backgroundColor: fill ? bgcolor : Colors.light,
        borderRadius: responsive.rf(1),
        alignItems: 'center',
        justifyContent: 'center',
        width:responsive.rf(10),
        borderWidth: responsive.rf(0.2),
        borderColor: fill ? 'transparent' : Colors.gray_border,
      }}>
      {loading ? (
        <ActivityIndicator
          size={responsive.rf(3)}
          color={fill ? Colors.light : Colors.dark}
        />
      ) : (
        <Text
          style={{
            fontSize: FontSize.read,
            color: fill ? Colors.light : Colors.dark,
            fontFamily: 'Roboto-Medium',
          }}>
          {text}
        </Text>
      )}
    </View>
  );
};

export default MediumButton;
