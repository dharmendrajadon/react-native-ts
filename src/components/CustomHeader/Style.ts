import { ImageStyle, ViewStyle, TextStyle } from 'react-native';
import {
    primaryColor
} from '../../layouts/themes/Main';

export const headerHolder: ViewStyle = {
    backgroundColor: '#eaeaea',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    minHeight: 56,
    padding: 8,
    width: '100%',
    zIndex: 10000,
};

export const backButton: ImageStyle = {
    height: 32,
    width: 32,
    tintColor: primaryColor,
}

export const title: TextStyle = {
    flex: 1,
    alignSelf: 'center',
    color: '#ee0000',
    fontSize: 26,
    fontWeight: '700',
    textAlign: 'center',
};

export const menuButton: ImageStyle = {
    height: 32,
    width: 32,
    tintColor: primaryColor,
};
