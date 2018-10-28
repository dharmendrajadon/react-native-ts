import { ImageStyle, ViewStyle } from 'react-native';

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
    height: 140,
    position: 'relative',
    top: 60,
    width: 140,
};

export const buttonHolder: ViewStyle = {
    flexDirection: 'column',
    height: 280,
    justifyContent: 'space-evenly',
    marginTop: 80,
    zIndex: 2
};

export const city: ViewStyle = {
    bottom: 0,
    height: 280,
    overflow: 'hidden',
    position: 'absolute',
    width: '100%',
    zIndex: 1
};
