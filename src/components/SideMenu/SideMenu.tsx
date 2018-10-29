import * as React from 'react';
import {
    View,
    Text,
    ScrollView,
    GestureResponderEvent,
    Alert
} from 'react-native';
import * as Styles from './Style';
import { TEXT_PATROL, TEXT_SCHEDULE, TEXT_ATTENDANCE } from '../../shared/Constants';

interface IProps {
    navigation: any;
}

class SideMenu extends React.Component<IProps> {

    public static navigationOptions = {
        header: null,
    };

    constructor(props: IProps) {
        super(props);
    }

    public NavigationHandler = (event: GestureResponderEvent, type: string) => {
        // Do Nothing
        switch (type) {
            case TEXT_PATROL:
                this.props.navigation.navigate(type);
                break;

            default:
                Alert.alert(`${type} Not Available`);
                break;
        }
    }

    render() {

        return (
            <View style={Styles.container}>
                <ScrollView>
                    <View style={Styles.section}>
                        <View style={Styles.item}>
                            <Text
                                onPress={(event) => this.NavigationHandler(event, TEXT_PATROL)}
                            >{TEXT_PATROL}</Text>
                        </View>
                        <View style={Styles.item}>
                            <Text
                                onPress={(event) => this.NavigationHandler(event, TEXT_SCHEDULE)}
                            >{TEXT_SCHEDULE}</Text>
                        </View>
                        <View style={Styles.item}>
                            <Text
                                onPress={(event) => this.NavigationHandler(event, TEXT_ATTENDANCE)}
                            >{TEXT_ATTENDANCE}</Text>
                        </View>
                    </View>
                    <View style={Styles.section}>
                        <View style={Styles.item}>
                            <Text
                                onPress={(event) => this.NavigationHandler(event, 'Contact Us')}
                            >Contact Us</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default SideMenu;
