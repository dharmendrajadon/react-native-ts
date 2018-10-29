import * as React from 'react';
import { createStackNavigator } from 'react-navigation';
import Splash from '../containers/SplashScreen/SplashScreen';
import Dashboard from '../containers/Dashboard/Dashboard';
import Patrol from '../containers/Patrol/Patrol';
import Scanner from '../containers/Scanner/Scanner';

const RootStack = createStackNavigator(
    {
        Dashboard,
        Splash,
        Patrol,
        Scanner
    },
    {
        initialRouteName: 'Splash',
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
