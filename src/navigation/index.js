import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useUserContext} from '../context/UserContex';
import auth from '@react-native-firebase/auth';

// FireBase Auth

// //import navigators
import AppNavigator from './AppNavigator';
import AuthNavigator from './AuthNavigator';
import DrawerNavigator from './DrawerNavigator';
import {useDrawerContext} from '../context/DrawerContex';
import {useLoadingContext} from '../context/LoadingContext';
export default AppContainer = ({theme}) => {
  const {user, setUser} = useUserContext();
  const {isOpen} = useDrawerContext();
  const {loading, setLoading} = useLoadingContext();
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(_userAuth);
    return subscriber; // unsubscribe on unmount
  }, []);

  const _userAuth = async cred => {
    setLoading(true);
    if (!cred?.uid) setUser();
    else {
      setUser(cred);
    }

    setLoading(false);
  };

  return (
    <>
      {/* {loading && <Loading />} */}
      <NavigationContainer theme={theme}>
        {isOpen && <DrawerNavigator />}

        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </>
  );
};
