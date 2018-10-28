import * as React from 'react';
import { HeaderProps } from 'react-navigation';
import { View, Text } from 'react-native';

import * as Styles from './Style';

const header = (props: HeaderProps) => {

    return (
        <View style={Styles.headerHolder}>
            <Text style={Styles.title}>Guard Tour</Text>
        </View>
    )
};

export default header;