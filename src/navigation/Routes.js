import React, {useState, useEffect, useContext} from 'react';
import {AuthContext} from '../context/AuthContext';
import MainNavigation from './MainNavigation';
import ShowError from '../screens/others/ShowError';
import IntroPage from '../screens/Auth/IntroPage';

const Routes = () => {
  const {connected, user} = useContext(AuthContext);
  const [introScreen, setIntroScreen] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIntroScreen(false);
    }, 1500);
  }, []);

  if (introScreen) return <IntroPage />;
  if (!connected) return <ShowError />;
  if (user) {
    return <MainNavigation />;
  } else {
    return <MainNavigation />;
    // return <AuthNavigation/>; can buid it in case if want to add user auth
  }
};

export default Routes;
