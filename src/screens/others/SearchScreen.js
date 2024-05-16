import React, {useContext} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {Colors, FontSize, responsive} from '../../utils/theme';
import Header from '../../components/Header';
import Icon from 'react-native-vector-icons/AntDesign';
import {BookContext} from '../../context/BookContext';

const SearchScreen = ({navigation}) => {
  const {setSearchItem, searchItem, setStartSearch} = useContext(BookContext);
console.log('seach item-----',searchItem); 
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.light,
      }}>
      <Header navigation={navigation} heading={'Search book'} />

      {/* Search Bar */}
      <View style={style.searchBox}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View>
            <Icon
              name={'search1'}
              size={responsive.rf(3.5)}
              color={Colors.secondary}
            />
          </View>

          <View>
            <TextInput
              style={style.searchText}
              placeholder={'search by title or author'}
              placeholderTextColor={Colors.gray}
              value={searchItem}
              onChangeText={text => setSearchItem(prev=>prev=text)}
              autoFocus={true}
              multiline={false}
            />
          </View>
        </View>
        <View>
          <Text
            onPress={() => {
              setStartSearch(true);
              navigation.goBack();
            }}
            style={{
              fontFamily: 'Roboto-Bold',
              color: Colors.secondary,
            }}>
            Search
          </Text>
        </View>
      </View>
    </View>
  );
};

export default SearchScreen;

const style = StyleSheet.create({
  searchText: {
    fontSize: FontSize.read,
    color: Colors.gray_secondary,
    fontFamily: 'Roboto-Regular',
    marginRight: responsive.rf(1),
    width: responsive.rf(23),
    marginLeft: responsive.rf(1),
  },
  searchBox: {
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    padding: responsive.rf(1.5),
    borderRadius: responsive.rf(1.5),
    borderWidth: responsive.rf(0.1),
    marginBottom: responsive.rf(1),
    justifyContent: 'space-between',
  },
});
