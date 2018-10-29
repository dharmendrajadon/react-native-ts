import * as React from 'react';
import { View, Text, Alert } from 'react-native';
import { RNCamera } from 'react-native-camera';
import CustomHeader from '../../components/CustomHeader/CustomHeader';

import * as Styles from './Style';
import { HeaderProps } from 'react-navigation';
import { TEXT_SCAN_HELP } from '../../shared/Constants';
import { setIsPatrolling } from '../../shared/LocalStorage';

interface IProps {
    navigation: any;
}

class Scanner extends React.Component<IProps> {

    private camera: RNCamera | null = null;

    public static navigationOptions = {
        header: (props: HeaderProps) => <CustomHeader {...props} />,
    };

    constructor(props: IProps) {
        super(props);
    }

    public render() {
        return (
            <View style={Styles.page}>
                <View style={Styles.scanViewHolder}>
                    <View style={Styles.scanView}>
                        <RNCamera
                            style={Styles.camera}
                            ref={(ref) => { this.camera = ref }}
                            type={RNCamera.Constants.Type.back}
                            permissionDialogTitle={'Permission to use camera'}
                            permissionDialogMessage={'We need your permission to use your camera phone'}
                            onBarCodeRead={(e) => {
                                if (this.camera !== null) {
                                    this.camera.pausePreview();
                                }
                                setIsPatrolling(true).then(() => {
                                    Alert.alert('Patrol Tour Started', e.data,
                                        [
                                            { text: 'OK', onPress: () => this.props.navigation.navigate('Dashboard') }
                                        ],
                                        { cancelable: false }
                                    );
                                }).catch(() => {
                                    Alert.alert('Read Error! Please Scan Again');
                                });
                            }}
                        />
                    </View>
                    <Text style={Styles.scanTextHelp}>{TEXT_SCAN_HELP}</Text>
                </View>
            </View>
        );
    }
}

export default Scanner;
