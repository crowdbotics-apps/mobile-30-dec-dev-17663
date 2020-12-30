import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen116575Navigator from '../features/BlankScreen116575/navigator';
import BlankScreen116574Navigator from '../features/BlankScreen116574/navigator';
import BlankScreen016573Navigator from '../features/BlankScreen016573/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen116575: { screen: BlankScreen116575Navigator },
BlankScreen116574: { screen: BlankScreen116574Navigator },
BlankScreen016573: { screen: BlankScreen016573Navigator },

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
