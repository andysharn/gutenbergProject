import React from 'react';
import {View, Image, Text} from 'react-native';
import Icon from '../../assets/img/gutenburIcon.png';
import {AppName} from '../../components/AppName';
import {Colors, FontSize, responsive} from '../../utils/theme';

const IntroPage = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.light,
      }}>
      <Image
        source={Icon}
        style={{
          width: responsive.rf(30),
          height: responsive.rf(20),
          resizeMode: 'contain',
        }}
      />
      <AppName />
      <Text
        style={{
          fontFamily: 'Roboto-Regular',
          fontSize: FontSize.read,
          color: Colors.dark,
        }}>
        Find any books{' '}
      </Text>

      <Text
        style={{
          fontFamily: 'Roboto-Light',
          fontSize: FontSize.read,
          color: Colors.dark,
          position: 'absolute',
          bottom: responsive.rf(2),
        }}>
        Made with ❣️ in India
      </Text>
    </View>
  );
};

export default IntroPage;
