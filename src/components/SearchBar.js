import React, {useContext} from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import {FontSize, responsive, Colors} from '../utils/theme';
import Icon from 'react-native-vector-icons/AntDesign';
import { BookContext } from '../context/BookContext';

const SearchBar = ({navigation}) => {
  const {searchItem,setStartSearch} = useContext(BookContext);
  console.log('the serch item is =====',searchItem)
  return (
    <TouchableWithoutFeedback
      onPress={() =>{ 
        setStartSearch(false); 
        navigation.navigate('SearchScreen')}}>
      <View
        style={{
          width: '90%',
          alignSelf: 'center',
          flexDirection: 'row',
          alignItems: 'center',
          padding: responsive.rf(1.5),
          borderRadius: responsive.rf(1.5),
          borderWidth: responsive.rf(0.1),
          marginBottom: responsive.rf(1),
        }}>
        <View>
          <Icon
            name={'search1'}
            size={responsive.rf(3.5)}
            color={Colors.secondary}
          />
        </View>

        <Text
          style={{
            fontFamily: 'Roboto-Light',
            color: searchItem?Colors.dark:Colors.gray,
            fontSize: FontSize.read,
            marginLeft: responsive.rf(1),
          }}>
          {searchItem ?searchItem: 'Search by title or author'}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};
export default SearchBar;
