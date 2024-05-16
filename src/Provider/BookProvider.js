import React, {useState} from 'react';
import {BookContext} from '../context/BookContext';
import { fetchBookByCategory, fetchBySearch, fetchingNextPage } from '../server/server';
import { showError } from '../utils/showError';

export const BookProvider = ({children}) => {
  const [searchItem, setSearchItem] = useState(null);
  const [startSearch, setStartSearch] = useState(false);
  const [loading, setLoading] = useState(true);
  const [bookData, setBookData] = useState([]);
  const [nextPageUrl, setNextPageUrl] = useState('');
  const [loadingNextPage, setLoadingNextPage] = useState(false);

  return (
    <BookContext.Provider
      value={{
        searchItem,
        bookData,
        setBookData,
        nextPageUrl,
        setNextPageUrl,
        loadingNextPage,
        setLoadingNextPage,
        startSearch,
        setSearchItem,
        loading,
        setLoading,
        setStartSearch,
        loadNextPage: async () => {
          setLoadingNextPage(true);
          setStartSearch(false);
          if (loadingNextPage == true) {
            const response = await fetchingNextPage(nextPageUrl);
            if (response) {
              setNextPageUrl(response.next); // setting up the next url
              setBookData(prevData => [...prevData, ...response.results]);
            } else {
              showError('Something went wrong');
            }
            setLoadingNextPage(false);
          }
        },
        getList: async (data) => {
          setSearchItem(null);
          const response = await fetchBookByCategory(data.categoryName);
          if (response) {
            setBookData(response.results);
            setNextPageUrl(response.next);
            setLoading(false);
          } else {
            showError('Something went wrong, try after some time.');
          }
        },
        searchBook: async () => {
          setLoading(true);
          const response = await fetchBySearch(searchItem);
          if (response) {
            setBookData(response.results);
            setNextPageUrl(response.next);
            setLoading(false);
          } else {
            showError('Something went wrong during search');
          }
        },
      }}>
      {children}
    </BookContext.Provider>
  );
};
