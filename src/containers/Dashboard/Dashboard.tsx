import * as React from 'react';
import { View, Image, GestureResponderEvent, Alert } from 'react-native';
import DashboardButton from '../../components/DashboardButton/DashboardButton';

import LogoImage from '../../../assets/images/logo.png';
import CityImage from '../../../assets/images/city_gray.png';
import IconAttendance from '../../../assets/images/ic_attendance.png';
import IconPatrol from '../../../assets/images/ic_patrol.png';
import IconSchedule from '../../../assets/images/ic_schedule.png';
import * as Styles from './Style';
import {
    TEXT_PATROL,
    TEXT_SCHEDULE,
    TEXT_ATTENDANCE
} from '../../shared/Constants';

interface IProps {
    navigation: any;
}

class Dashboard extends React.Component<IProps> {

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

    public render() {
        return (
            <View style={Styles.page}>

                <Image source={LogoImage} style={Styles.logo} />

                <View style={Styles.buttonHolder}>
                    <DashboardButton
                        onPress={this.NavigationHandler}
                        icon={IconPatrol}
                        text={TEXT_PATROL} />
                    <DashboardButton
                        onPress={this.NavigationHandler}
                        icon={IconSchedule}
                        text={TEXT_SCHEDULE} />
                    <DashboardButton
                        onPress={this.NavigationHandler}
                        icon={IconAttendance}
                        text={TEXT_ATTENDANCE} />
                </View>
                <View style={Styles.city}>
                    <Image source={CityImage} style={{ flex: 1, width: '100%' }} />
                </View>
            </View>
        );
    }
}

export default Dashboard;
