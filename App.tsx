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
    return notifee.onForegroundEvent(({type, detail}) => {
      switch (type) {
        case EventType.DISMISSED:
          console.log('User dismissed notification', detail.notification);
          break;
        case EventType.PRESS:
          console.log('User pressed notification', detail.notification);
          break;
      }
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
