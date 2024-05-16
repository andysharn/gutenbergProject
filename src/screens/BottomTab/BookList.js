import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  Modal,
  StyleSheet,
} from 'react-native';
import {Colors, FontSize, responsive} from '../../utils/theme';
import Header from '../../components/Header';
import Loader from '../../components/Loader';
import BookCard from '../../components/BookCard';
import SearchBar from '../../components/SearchBar';
import {BookContext} from '../../context/BookContext';
import {TouchableOpacity} from 'react-native-gesture-handler';
import BookModal from '../../components/BookModal';

const BookList = ({navigation, route}) => {
  const {data} = route.params;
  const {
    startSearch,
    loadNextPage,
    getList,
    searchBook,
    loadingNextPage,
    bookData,
    loading,
    searchItem
  } = useContext(BookContext);
  const [showModal, setShowModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const renderFooter = () => {
    if (!loadingNextPage) return null;
    return <ActivityIndicator size="large" color={Colors.primary} />;
  };

  const renderCard = item => {
    return (
      <View style={styles.card}>
        <TouchableOpacity
          onPress={() => {
            setSelectedBook(prev => (prev = item));
            setShowModal(true);
          }}>
          <BookCard item={item} />
        </TouchableOpacity>
      </View>
    );
  };

  useEffect(() => {
    getList(data);
  }, []);

  useEffect(() => {
    if (startSearch) {
      searchBook();
      console.log('searching for book');
    }
  }, [startSearch]);

  return (
    <View style={{flex: 1, backgroundColor: Colors.light}}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={() => {
          setShowModal(prev => (prev = false));
        }}>
        {
          <View
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              flex: 1,
            }}>
            {/* for closing model if click on blank area*/}
            <Text
              onPress={() => setShowModal(false)}
              style={{
                flex: 1,
              }}>
              .
            </Text>
            <BookModal selectedBook={selectedBook} />
          </View>
        }
      </Modal>

      <Header heading={data.categoryName} navigation={navigation} />
      <SearchBar navigation={navigation} />

      {loading ? (
        <Loader />
      ) : bookData.length ? (
        <FlatList
          data={bookData}
          renderItem={({item}) => renderCard(item)}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
          contentContainerStyle={{alignItems: 'center'}}
          columnWrapperStyle={{justifyContent: 'space-between'}}
          style={{width: '100%'}}
          onEndReachedThreshold={0.1}
          onEndReached={() => bookData.length > 8 && loadNextPage()}
          ListFooterComponent={renderFooter}
        />
      ) : (
        <View
        style={{
            flex:1,
            justifyContent:"center",
            alignItems:"center"
        }}
        >
        <Text style={styles.text}>No result found with {searchItem}</Text>
        </View>
      )}
    </View>
  );
};

export default BookList;

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.selected,
    alignSelf: 'center',
    marginBottom: responsive.rf(2),
    padding: responsive.rf(1),
    borderRadius: responsive.rf(1),
    width: '46%',
  },
  text:{
    fontFamily:"Roboto-Regular",
    fontSize:FontSize.read,
    color:Colors.gray

  }
});
