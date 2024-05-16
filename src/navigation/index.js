import React from 'react';
import {AuthProvider} from '../Provider/AuthProvider';
import Routes from './Routes';
import {NavigationContainer} from '@react-navigation/native';
import {BookProvider} from '../Provider/BookProvider';

const Providers = () => {
  return (
    <AuthProvider>
      <BookProvider>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </BookProvider>
    </AuthProvider>
  );
};

export default Providers;
