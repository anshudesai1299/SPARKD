import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Dashboard from '../screens/Dashboard';
import Linegraph from '../screens/Linegraph';
import Gauge from '../screens/Gauge'
import Dropdown from '../screens/Dropdown';
import Sidebar from '../screens/Sidebar';
import Dssdropdown from '../screens/Dssdropdown';
import WindForce from '../screens/WindForce';
import Checkbox from '../screens/Checkbox';

import Environment from '../screens/Environment';
import Operational from '../screens/Operational';
import Maintenance from '../screens/Maintenance';
import VesselPerformance from '../screens/VesselPerformance';


const stackNavigatorOptions = {
    headerShown:false
}
const AppNavigator = createStackNavigator({
    Login:{screen:Login},
    Register:{screen:Register},
    Dashboard:{screen:Dashboard},
    Linegraph:{screen:Linegraph},
    Gauge:{screen:Gauge},
    Dropdown:{screen:Dropdown},
    Sidebar:{screen:Sidebar},
    Dssdropdown:{screen:Dssdropdown},
    WindForce:{screen:WindForce},
    Checkbox:{screen:Checkbox},
    VesselPerformance:{screen:VesselPerformance},
    Environment:{screen:Environment},
    Operational:{screen:Operational},
    Maintenance:{screen:Maintenance},
},
{
    defaultNavigationOptions : stackNavigatorOptions
}  
);
export default createAppContainer(AppNavigator);