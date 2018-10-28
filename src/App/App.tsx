import * as React from 'react';
import { createStackNavigator } from 'react-navigation';
import Splash from '../containers/SplashScreen/SplashScreen';
import Dashboard from '../containers/Dashboard/Dashboard';
import Patrol from '../containers/Patrol/Patrol';

const RootStack = createStackNavigator(
    {
        Dashboard,
        Splash,
        Patrol,
    },
    {
        initialRouteName: 'Patrol',
        /* The header config from HomeScreen is now here */
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
    }
);

class App extends React.Component {

    public render() {
        return <RootStack />;
    }
}

export default App;
