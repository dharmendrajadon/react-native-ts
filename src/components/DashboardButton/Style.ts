import { ImageStyle, TextStyle, ViewStyle } from 'react-native';
import { primaryColor } from '../../layouts/themes/Main';

export const iconImage: ImageStyle = {
    height: 24,
    width: 24,
};

export const iconText: TextStyle = {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
    marginLeft: 10,
};

export const iconHolder: ViewStyle = {
    alignSelf: 'center',
    flexDirection: 'row',
};

export const iconButton: ViewStyle = {
    alignSelf: 'center',
    backgroundColor: primaryColor,
    borderRadius: 10,
    height: 64,
    justifyContent: 'center',
    overflow: 'hidden',
    width: 240,
};
