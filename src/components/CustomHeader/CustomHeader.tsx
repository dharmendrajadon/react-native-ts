import * as React from 'react';
import { View, Image, Text, TouchableWithoutFeedback, Alert } from 'react-native';
import { HeaderProps } from 'react-navigation';

import ChevronLeft from '../../../assets/images/ic_chevron_left.png';
import IconMenu from '../../../assets/images/ic_menu.png';
import * as Styles from './Style';

const header = (props: HeaderProps) => {

    return (
        <View style={Styles.headerHolder}>
            <TouchableWithoutFeedback onPress={() => props.navigation.goBack(null)}>
                <Image source={ChevronLeft} style={Styles.backButton} />
            </TouchableWithoutFeedback>
            <Text style={Styles.title}>Guard Tour</Text>
            <TouchableWithoutFeedback onPress={() => Alert.alert('Application Menu')}>
                <Image source={IconMenu} style={Styles.menuButton} />
            </TouchableWithoutFeedback>
        </View>
    )
};

export default header;