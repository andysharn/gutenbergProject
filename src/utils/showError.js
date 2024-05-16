import {ToastAndroid} from 'react-native';

export const showError = error => {
  ToastAndroid.show(error, ToastAndroid.SHORT);
};
