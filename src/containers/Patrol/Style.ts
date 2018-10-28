import { ImageStyle, ViewStyle, TextStyle } from 'react-native';
import {
    primaryColor,
    colorPatrolStart,
    colorPatrolStop,
    colorPatrolIncident,
    colorPatrolSOS
} from '../../layouts/themes/Main';

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

export const pageHeadingHolder: ViewStyle = {
    flexDirection: 'row',
    padding: 20
};

export const pageHeadingText: TextStyle = {
    color: primaryColor,
    fontSize: 20,
    fontWeight: '700',
    marginLeft: 10,
};

export const pageHeadingImage: ImageStyle = {
    height: 24,
    tintColor: primaryColor,
    width: 24,
};

export const mapHolder: ViewStyle = {
    alignItems: 'center',
    height: '40%',
    justifyContent: 'flex-end',
    width: '100%',
    zIndex: 1,
};

export const patrolActionHolder: ViewStyle = {
    backgroundColor: '#f3f4f5',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 20,
    paddingBottom: 20,
    position: 'absolute',
    bottom: 0,
    zIndex: 2,
};

export const patrolActionRow: ViewStyle = {
    flexDirection: 'row',
    width: '100%'
};

export const patrolActionView: ViewStyle = {
    paddingLeft: 10,
    paddingRight: 10,
    width: '50%'
};

export const patrolStart = colorPatrolStart;
export const patrolStop = colorPatrolStop;
export const patrolIncident = colorPatrolIncident;
export const patrolSOS = colorPatrolSOS;