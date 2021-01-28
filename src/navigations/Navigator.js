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

const stackNavigatorOptions = {
    headerShown:true
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
},
{
    defaultNavigationOptions : stackNavigatorOptions
}  
);
export default createAppContainer(AppNavigator);