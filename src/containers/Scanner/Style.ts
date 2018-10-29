import { ViewStyle, TextStyle, Dimensions } from 'react-native';

export const page: ViewStyle = {
    backgroundColor: '#CCCCCC',
    flex: 1,
    flexDirection: 'column',
    height: '100%',
    position: 'absolute',
    top: 0,
    width: '100%',
    zIndex: 1000,
};

export const scanViewHolder: ViewStyle = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 2,
    backgroundColor: '#896c51',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
};

export const scanView: ViewStyle = {
    height: 160,
    width: 160,
    borderColor: '#FFFFFF',
    borderWidth: 2,
    overflow: 'hidden',
};

export const camera: ViewStyle = {
    width: 160,
    height: 160,
    zIndex: 1,
};

export const scanTextHelp: TextStyle = {
    color: '#FFFFFF',
    width: 140,
    marginTop: 16,
    fontSize: 13,
    textAlign: 'center',
    justifyContent: 'center',
    fontWeight: '500',
};
