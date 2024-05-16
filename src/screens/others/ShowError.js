import React from 'react';
import {View, Image, Text, ToastAndroid} from 'react-native';
import {Colors, FontSize, responsive} from '../../utils/theme';
import MediumButton from '../../components/MediumButton';
import NoInternet from '../../assets/img/update.png';

const ShowError = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.light,
        padding: responsive.rf(3),
      }}>
      <Image
        source={NoInternet}
        style={{
          width: '50%',
          height: '50%',
          resizeMode: 'contain',
        }}
      />
      <Text
        style={{
          fontFamily: 'Roboto-Regular',
          fontSize: FontSize.read,
          color: Colors.gray,
          marginBottom: responsive.rf(3),
          width: '90%',
        }}>
        Connection Error ! check your Internet
      </Text>

      <Text
        onPress={async () => {
          ToastAndroid.show('Connect to Internet', ToastAndroid.SHORT);
        }}>
        <View>
          <MediumButton text="Retry" width={responsive.rf(5)} />
        </View>
      </Text>
    </View>
  );
};

export default ShowError;
