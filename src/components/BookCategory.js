import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {responsive, Colors, FontSize} from '../utils/theme';

const BookCategory = ({iconName, categoryName}) => {
  return (
    <View
      style={{
        width: '99%',
        backgroundColor: 'white',
        marginBottom: responsive.rf(2.5),
        padding: responsive.rf(1.5),
        borderRadius: responsive.rf(1.5),
        elevation: responsive.rf(0.5),
        shadowColor: Colors.danger,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '95%',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: responsive.rf(7),
              alignItems: 'center',
              padding: responsive.rf(1),
              marginRight: responsive.rf(1),
            }}>
            <Icon
              name={iconName}
              size={responsive.rf(3.5)}
              color={Colors.secondary}
            />
          </View>

          <Text
            style={{
              fontFamily: 'Roboto-Regular',
              fontSize: FontSize.small,
              color: Colors.dark,
            }}>
            {categoryName}
          </Text>
        </View>
        <Icon
          name={'arrow-right'}
          size={responsive.rf(2.5)}
          color={Colors.secondary}
        />
      </View>
    </View>
  );
};
export default BookCategory;
