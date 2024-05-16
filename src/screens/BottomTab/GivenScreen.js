import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Colors, FontSize, responsive} from '../../utils/theme';
import {bookCategory} from '../../constant/constant';
import BookCategory from '../../components/BookCategory';

const GivenScreen = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.light,
      }}>
      {/* Heading */}
      <View
        style={{
          padding: responsive.rf(1.5),
          marginTop: responsive.rf(2),
          width: '95%',
          alignSelf: 'center',
          borderRadius: responsive.rf(3),
        }}>
        <Text
          style={{
            color: Colors.primary,
            fontSize: FontSize.large,
            fontFamily: 'Roboto-Medium',
          }}>
          Gutenberg Project{' '}
        </Text>
      </View>

      {/* Book Category */}
      <View
        style={{
          width: '90%',
          alignSelf: 'center',
          marginTop: responsive.rf(2),
        }}>
        {bookCategory.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => {
                navigation.navigate("BookList",{data:item})
              }}>
              <BookCategory
                iconName={item.iconName}
                categoryName={item.categoryName}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};
export default GivenScreen;
