import {createDrawerNavigator} from '@react-navigation/drawer';
import {Home} from '../screens';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
  );
}
