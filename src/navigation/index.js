import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';

// FireBase Auth

// //import navigators
import AppNavigator from './AppNavigator';

export default AppContainer = ({theme}) => {
  //   const {loading, setLoading} = useLoading();
  //   const {user, setUser} = useUser();
  //   useEffect(() => {
  //     const subscriber = auth().onAuthStateChanged(_userAuth);
  //     return subscriber; // unsubscribe on unmount
  //   }, []);

  //   const _userAuth = async cred => {
  //     setLoading(true);
  //     if (!cred?.uid) setUser();
  //     else {
  //       setUser(cred);
  //     }

  //     setLoading(false);
  //   };

  return (
    <>
      {/* {loading && <Loading />} */}
      <NavigationContainer theme={theme}>
        <AppNavigator />
      </NavigationContainer>
    </>
  );
};
