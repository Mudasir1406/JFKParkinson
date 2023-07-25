import React, {useEffect} from 'react';
import {PreferencesContext} from './src/context/PreferencesContext';
import {Provider} from 'react-native-paper';
import AppContanier from './src/navigation/index';
import {CombinedDarkTheme, CombinedDefaultTheme} from './src/Theme/AppTheme';
import SplashScreen from 'react-native-splash-screen';
import UserContextProvider from './src/context/UserContex';
import DrawerContextProvider from './src/context/DrawerContex';
import LoadingContextProvider from './src/context/LoadingContext';
import notifee, {EventType} from '@notifee/react-native';
import {Alert} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import {
  registerDevice,
  requestUserPermission,
} from './src/services/Notifications';
function App(): JSX.Element {
  const [isThemeDark, setIsThemeDark] = React.useState(false);
  let theme = isThemeDark ? CombinedDarkTheme : CombinedDefaultTheme;
  const toggleTheme = React.useCallback(() => {
    return setIsThemeDark(!isThemeDark);
  }, [isThemeDark]);
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  const preferences = React.useMemo(
    () => ({
      toggleTheme,
      isThemeDark,
    }),
    [toggleTheme, isThemeDark],
  );
  useEffect(() => {
    requestUserPermission();
  }, []);
  useEffect(() => {
    registerDevice();
  }, []);
  // useEffect(() => {
  //   return notifee.onForegroundEvent(({type, detail}) => {
  //     switch (type) {
  //       case EventType.DISMISSED:
  //         console.log('User dismissed notification', detail.notification);
  //         break;
  //       case EventType.PRESS:
  //         console.log('User pressed notification', detail.notification);
  //         break;
  //     }
  //   });
  // }, []);
  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    // Assume a message-notification contains a "type" property in the data payload of the screen to open

    messaging().onNotificationOpenedApp(remoteMessage => {
      console.log(
        'Notification caused app to open from background state:',
        remoteMessage.notification,
      );
    });

    // Check whether an initial notification is available
    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
          console.log(
            'Notification caused app to open from quit state:',
            remoteMessage.notification,
          );
          //setInitialRoute(remoteMessage.data.type); // e.g. "Settings"
        }
        //setLoading(false);
      });
  }, []);

  return (
    <LoadingContextProvider>
      <DrawerContextProvider>
        <UserContextProvider>
          <PreferencesContext.Provider value={preferences}>
            <Provider theme={theme}>
              <AppContanier theme={theme} />
            </Provider>
          </PreferencesContext.Provider>
        </UserContextProvider>
      </DrawerContextProvider>
    </LoadingContextProvider>
  );
}

export default App;
