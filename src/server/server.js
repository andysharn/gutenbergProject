import {showError} from '../utils/showError';
const baseAPI = 'http://gutendex.com/';

// For fetching books by category
export const fetchBookByCategory = async bookCategory => {
  return fetch(`${baseAPI}books?topic=${bookCategory}`)
  .then(response => {
    if (!response.ok) {
      throw new Error('Something went wrong',response.status);
    }
    return response.json();
  })
  .then(json => {
    console.log('data got from api is---', json);
    return json;
  })
  .catch(error => {
    showError(error.message);
    console.log(error);
    throw error; // Rethrow the error if you want the calling function to handle it
  });
};

// For fetching books by category
export const fetchingNextPage = async url => {
  return fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Something went wrong',response.status);
    }
    return response.json();
  })
  .then(json => {
    console.log('data got from api is---', json);
    return json;
  })
  .catch(error => {
    showError(error.message);
    console.log(error);
    throw error; // Rethrow the error if you want the calling function to handle it
  });
};

export const fetchBySearch = async searchItem =>{

  const formattedString = searchItem
  .split(" ") // Split the string by spaces
  .map(word => word.toLowerCase()) // Convert each word to lowercase
  .join("%20"); // Join the words with '%20'

  return fetch(`${baseAPI}books?search=${formattedString}`)
  .then(response => {
    if (!response.ok) {
      throw new Error('Something went wrong',response.status);
    }
    return response.json();
  })
  .then(json => {
    console.log('data got from api is---', json);
    return json;
  })
  .catch(error => {
    showError(error.message);
    console.log(error);
    throw error; // Rethrow the error if you want the calling function to handle it
  });
};