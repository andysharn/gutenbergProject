import React from 'react';
import {View, Text} from 'react-native';
import BackIcon from 'react-native-vector-icons/Ionicons';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {Colors, responsive, FontSize} from '../utils/theme';

const Header = ({
  navigation,
  heading = null,
  toNavigate = 'Back',
  showBack = true,
}) => {
	
  function goBack() {
    navigation.goBack();
  }

  return (
    <View
      style={{
        backgroundColor: Colors.light,
        zIndex: 4,
      }}>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: Colors.light,
          padding: responsive.rf(1.5),
          alignItems: 'center',
        }}>
        {showBack ? (
          <TouchableWithoutFeedback
            onPress={() =>
              toNavigate == 'Back' ? goBack() : navigation.navigate(toNavigate)
            }>
            <BackIcon
              name="return-up-back"
              // name="arrow-back-outline"
              size={responsive.rf(4)}
              color={Colors.dark}
            />
          </TouchableWithoutFeedback>
        ) : null}

        <View style={{alignItems: 'center', width: showBack ? '90%' : '100%'}}>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={{
              fontSize: FontSize.small_tow,
              color: Colors.dark,
              fontFamily: 'Roboto-Regular',
              marginLeft: responsive.rf(-1.1),
            }}>
            {heading}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Header;
