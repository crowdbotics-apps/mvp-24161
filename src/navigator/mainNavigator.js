import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps198801Navigator from '../features/Maps198801/navigator';
import Additem198800Navigator from '../features/Additem198800/navigator';
import Maps198796Navigator from '../features/Maps198796/navigator';
import UserProfile198792Navigator from '../features/UserProfile198792/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps198801: { screen: Maps198801Navigator },
Additem198800: { screen: Additem198800Navigator },
Maps198796: { screen: Maps198796Navigator },
UserProfile198792: { screen: UserProfile198792Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
