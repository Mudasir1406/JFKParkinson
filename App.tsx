import React, {useEffect} from 'react';
import {PreferencesContext} from './src/context/PreferencesContext';
import {Provider} from 'react-native-paper';
import AppContanier from './src/navigation/index';
import {CombinedDarkTheme, CombinedDefaultTheme} from './src/Theme/AppTheme';
import SplashScreen from 'react-native-splash-screen';
function App(): JSX.Element {
  const [isThemeDark, setIsThemeDark] = React.useState(false);
  let theme = isThemeDark ? CombinedDarkTheme : CombinedDefaultTheme;
  const toggleTheme = React.useCallback(() => {
    return setIsThemeDark(!isThemeDark);
  }, [isThemeDark]);
  useEffect(() => {
    SplashScreen.hide(); //hides the splash screen on app load.
  }, []);
  const preferences = React.useMemo(
    () => ({
      toggleTheme,
      isThemeDark,
    }),
    [toggleTheme, isThemeDark],
  );
  return (
    <PreferencesContext.Provider value={preferences}>
      <Provider theme={theme}>
        <AppContanier theme={theme} />
      </Provider>
    </PreferencesContext.Provider>
  );
}

export default App;
