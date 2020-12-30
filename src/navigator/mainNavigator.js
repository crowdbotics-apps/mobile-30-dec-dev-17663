import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CopyOfBlankScreen116580Navigator from '../features/CopyOfBlankScreen116580/navigator';
import BlankScreen016579Navigator from '../features/BlankScreen016579/navigator';
import BlankScreen116578Navigator from '../features/BlankScreen116578/navigator';
import BlankScreen016576Navigator from '../features/BlankScreen016576/navigator';
import BlankScreen116575Navigator from '../features/BlankScreen116575/navigator';
import BlankScreen116574Navigator from '../features/BlankScreen116574/navigator';
import BlankScreen016573Navigator from '../features/BlankScreen016573/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
CopyOfBlankScreen116580: { screen: CopyOfBlankScreen116580Navigator },
BlankScreen016579: { screen: BlankScreen016579Navigator },
BlankScreen116578: { screen: BlankScreen116578Navigator },
BlankScreen016576: { screen: BlankScreen016576Navigator },
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
