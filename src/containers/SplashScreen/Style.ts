import { ImageStyle, ViewStyle, TextStyle } from 'react-native';
import { primaryColor } from '../../layouts/themes/Main';

export const page: ViewStyle = {
    backgroundColor: '#FFFFFF',
    flex: 1,
    flexDirection: 'column',
    height: '100%',
    position: 'absolute',
    top: 0,
    width: '100%',
    zIndex: 1000,
};

export const logo: ImageStyle = {
    alignSelf: 'center',
    height: 180,
    position: 'relative',
    top: 80,
    width: 180,
};

export const city: ImageStyle = {
    bottom: 60,
    position: 'relative',
    resizeMode: 'contain',
    width: '100%',
};

export const footer: ViewStyle = {
    backgroundColor: primaryColor,
    bottom: 0,
    height: 60,
    position: 'absolute',
    width: '100%',
};

export const footerText: TextStyle = {
    color: '#FFFFFF',
    fontWeight: '700',
    letterSpacing: 8,
    textAlign: 'center',
};
