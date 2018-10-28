import { ImageStyle, ViewStyle, TextStyle } from 'react-native';
import {
    primaryColor,
    colorPatrolStart,
    colorPatrolStop,
    colorPatrolIncident,
    colorPatrolSOS
} from '../../layouts/themes/Main';

export const headerHolder: ViewStyle = {
    backgroundColor: '#eaeaea',
    minHeight: 56,
    padding: 8,
    width: '100%',
    zIndex: 10000,
};

export const title: TextStyle = {
    color: '#ee0000',
    fontSize: 26,
    fontWeight: '700',
    textAlignVertical: 'center',
    textAlign: 'center'
};
