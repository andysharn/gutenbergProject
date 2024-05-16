import React, { useState } from 'react';
import {View, Image} from 'react-native';
import {Colors, responsive} from '../utils/theme';

const BookCard = ({item}) => {
  
  return (
    <View>
      <Image
        source={{uri: item.formats['image/jpeg']??"https://www.insticc.org/node/TechnicalProgram/56e7352809eb881d8c5546a9bbf8406e.png"}} // if no preview available
        style={{
          resizeMode: 'cover',
          height: responsive.rf(30),
          borderRadius: responsive.rf(1),
        }}
      />
    </View>
  );
};
export default BookCard;
