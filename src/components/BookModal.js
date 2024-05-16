import React from 'react';
import {Colors, responsive, FontSize} from '../utils/theme';
import {Button, Image, Linking,View, Text} from 'react-native';

const BookModal = ({selectedBook}) => {
  return (
    <View
      style={{
        backgroundColor: Colors.light,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        borderTopRightRadius: responsive.rf(2),
        borderTopLeftRadius: responsive.rf(2),
        padding: responsive.rf(2),
        zIndex: 103,
      }}>
      <View
        style={{
          padding: responsive.rf(0.5),
          paddingBottom: responsive.rf(2),
          paddingLeft: responsive.rf(1),
          width: '99%',
        }}>
        <Text
          ellipsizeMode="tail"
          numberOfLines={1}
          style={{
            fontFamily: 'Roboto-Medium',
            fontSize: FontSize.small,
            color: Colors.dark,
            marginBottom: responsive.rf(1),
          }}>
          {selectedBook ? selectedBook.title : null}
        </Text>
      </View>

      <View
        style={{
          alignSelf: 'center',
          backgroundColor: Colors.selected,
          padding: responsive.rf(1),
          alignItems: 'center',
          marginBottom: responsive.rf(2),
          borderRadius: responsive.rf(1),
        }}>
        <Image
          source={{
            uri: selectedBook
              ? selectedBook.formats['image/jpeg'] ??
                'https://www.insticc.org/node/TechnicalProgram/56e7352809eb881d8c5546a9bbf8406e.png'
              : null,
          }} // if no preview available
          style={{
            resizeMode: 'cover',
            height: responsive.rf(29),
            width: responsive.rf(18),
            borderRadius: responsive.rf(1),
          }}
        />
      </View>

      <Button
        title="Read"
        onPress={async () => {
          Linking.openURL(selectedBook.formats['text/html']);
        }}
      />
    </View>
  );
};
export default BookModal;
