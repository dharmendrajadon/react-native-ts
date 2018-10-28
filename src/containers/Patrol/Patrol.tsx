import * as React from 'react';
import { View, Text, Image, Alert, GeolocationReturnType, GestureResponderEvent } from 'react-native';
import { HeaderProps } from 'react-navigation';
import MapView, { PROVIDER_GOOGLE, Region } from 'react-native-maps';

import CustomHeader from '../../components/CustomHeader/CustomHeader';
import IconPatrol from '../../../assets/images/ic_patrol.png';
import IconStart from '../../../assets/images/ic_start.png';
import IconStop from '../../../assets/images/ic_stop.png';
import IconIncident from '../../../assets/images/ic_incident.png';
import IconSOS from '../../../assets/images/ic_sos.png';
import PatrolActionButton from '../../components/PatrolActionButton/PatrolActionButton';
import * as Styles from './Style';
import { getCurrentLocation, getRegionFromLocation } from '../../shared/StringUtils';

interface IProps {
    navigation: any;
}

interface IState {
    defaultRegion: Region;
}

class Patrol extends React.Component<IProps, IState> {

    public static navigationOptions = {
        header: (props: HeaderProps) => <CustomHeader {...props} />,
    };

    constructor(props: IProps) {
        super(props);

        this.state = {
            defaultRegion: {
                latitude: 0,
                longitude: 0,
                latitudeDelta: 0,
                longitudeDelta: 0
            }
        }
    }

    public componentDidMount() {
        // Fetch user's current location
        getCurrentLocation().then((location: GeolocationReturnType) => {
            this.setState({
                defaultRegion: getRegionFromLocation(location)
            });
        }).catch((error) => {
            Alert.alert(error);
        });
    }

    public NavigationHandler = (event: GestureResponderEvent, type: string) => {
        // Do Nothing
        switch (type) {
            case 'PATROL':
                this.props.navigation.navigate('Patrol');
                break;

            default:
                Alert.alert(`${type} Not Available`);
                break;
        }
    }

    public render() {
        return (
            <View style={Styles.page}>
                <View style={Styles.pageHeadingHolder}>
                    <Image source={IconPatrol} style={Styles.pageHeadingImage} />
                    <Text style={Styles.pageHeadingText}>PATROL</Text>
                </View>
                <MapView
                    showsUserLocation={true}
                    provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                    style={Styles.mapHolder}
                    region={this.state.defaultRegion}
                >
                </MapView>
                <View style={Styles.patrolActionHolder}>
                    <View style={Styles.patrolActionRow}>
                        <View style={Styles.patrolActionView}>
                            <PatrolActionButton
                                icon={IconStart}
                                text="Start Patrol"
                                color={Styles.patrolStart}
                                onPress={this.NavigationHandler}
                            />
                        </View>
                        <View style={Styles.patrolActionView}>
                            <PatrolActionButton
                                icon={IconStop}
                                text="Stop Patrol"
                                color={Styles.patrolStop}
                                onPress={this.NavigationHandler}
                            />
                        </View>
                    </View>
                    <View style={{ ...Styles.patrolActionRow, marginTop: 20 }}>
                        <View style={Styles.patrolActionView}>
                            <PatrolActionButton
                                icon={IconIncident}
                                text="Incident"
                                color={Styles.patrolIncident}
                                onPress={this.NavigationHandler}
                            />
                        </View>
                        <View style={Styles.patrolActionView}>
                            <PatrolActionButton
                                icon={IconSOS}
                                text="SOS"
                                color={Styles.patrolSOS}
                                onPress={this.NavigationHandler}
                            />
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

export default Patrol;
