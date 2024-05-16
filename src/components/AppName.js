import React from 'react';
import {View, Text} from 'react-native';
import {Colors, FontSize} from '../utils/theme';

export const AppName = () => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Text
        style={{
          color: Colors.primary,
          fontSize: FontSize.large + 2,
          fontFamily: 'Roboto-Bold',
        }}>
        Gutenberg
      </Text>
      <Text
        style={{
          color: Colors.dark,
          fontSize: FontSize.large + 2,
          fontFamily: 'Roboto-Bold',
        }}>
        all
      </Text>
    </View>
  );
};
