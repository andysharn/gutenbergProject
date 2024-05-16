import React, {useState, useEffect} from 'react';
import NetInfo from '@react-native-community/netinfo';
import {getData, setData} from '../utils/asyncStorage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from '../context/AuthContext';



export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [connected, setConnected] = useState(true);
  const [loading, setLoading] = useState(false);
  const [login, setLogin] = useState(false);
  const [searchItem,setSearchItem]=useState(null);
  const [startSearch,setStartSearch]=useState(false); 

  useEffect(() => {
    // creating a listner for checking Internet connection
    NetInfo.addEventListener(status => {
      setConnected(status.isConnected);
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        login,
        user,
        connected,
        loading,
        setUser,
        setConnected,
        setLoading,
        searchItem,
        setSearchItem,
        startSearch,
        setStartSearch,
        logoutUser: async () => {
          await AsyncStorage.clear();
          setUser(prev => (prev = null));
        },

        startLoginUser: async (userData = null) => {
          // update userWatchlist when user open
          let currentUser = await getData('users');
          if (currentUser) {
            setUser(prev => (prev = currentUser));
          } else {
            if (userData) {
              await setData('users', userData);
              setUser(prev => (prev = userData));
            }
          }

          if (userData) {
            setLogin(prev => (prev = !prev));
          }
        },
        openLinkInChrome: async type => {
          try {
            if (type == 1) {
              // type 1 for t&c
              await Linking.openURL('https://www.tradevade.com/terms.html');
            } else {
              await Linking.openURL('https://www.tradevade.com/privacy.html');
            }
          } catch (error) {
            console.error('Failed to open link in Chrome:', error);
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};
