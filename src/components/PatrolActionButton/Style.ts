import { ImageStyle, TextStyle, ViewStyle } from 'react-native';
import { primaryColor } from '../../layouts/themes/Main';

export const iconImage: ImageStyle = {
    height: 40,
    width: 40,
    alignSelf: 'center',
};

export const iconText: TextStyle = {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 10,
};

export const iconHolder: ViewStyle = {
    alignSelf: 'center',
    flexDirection: 'column',
};

export const iconButton: ViewStyle = {
    alignSelf: 'center',
    borderRadius: 10,
    height: 120,
    justifyContent: 'center',
    overflow: 'hidden',
    width: '100%',
};
