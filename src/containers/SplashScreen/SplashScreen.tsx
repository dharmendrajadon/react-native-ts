import * as React from 'react';
import { View, Text, Image } from 'react-native';
import LogoImage from '../../../assets/images/logo.png';
import CityImage from '../../../assets/images/city.png';
import * as Styles from './Style';

interface IProps {
    navigation: any;
}

class SplashScreen extends React.Component<IProps> {

    public static navigationOptions = {
        header: null,
    };

    constructor(props: IProps) {
        super(props);
    }


    public componentDidMount() {
        setTimeout(() => {
            this.props.navigation.navigate('Dashboard');
        }, 2000);
    }

    public render() {
        return (
            <View style={Styles.page}>
                <Image source={LogoImage} style={Styles.logo} />
                <Image source={CityImage} style={Styles.city} />
                <View style={Styles.footer}>
                    <Text style={Styles.footerText}>LOADING</Text>
                </View>
            </View>
        );
    }
}

export default SplashScreen;
