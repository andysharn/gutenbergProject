import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';
import {Alerts} from './alerts';

// # for storing data to device local storage
export const setData = async (key, value) => {
  try {
    let storeValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, storeValue);
  } catch (e) {
    Alert.alert(Alerts.read_data);
    console.log('the error is', e);
  }
};

export const multiSetData = async value => {
  // let dataSet_one = ['key1','value1'];
  // let dataSet_two = ['key2','value2'];
  // value = [dataSet_one,dataSet_two]
  try {
    await AsyncStorage.setItem(value);
  } catch (e) {
    Alert.alert(Alerts.read_data);
  }
};

// # for reading data from local storage
export const getData = async key => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    Alert.alert(Alerts.read_data);
  }
};

// # for deleting particular data
export const deleteData = async key => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    Alert.alert(Alerts.delete_data);
  }
};

// # for deleting all data from local storage
export const deleteAllData = async () => {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    Alert.alert(Alerts.delete_data);
  }
};
