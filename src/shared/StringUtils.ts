import { GeolocationReturnType } from 'react-native';
import { Region } from 'react-native-maps';

/**
 * Get Current Location
 * @returns {Promise<GeolocationReturnType>} Current GeoLocation Promise
 */
export const getCurrentLocation = async (): Promise<GeolocationReturnType> => {

    return new Promise<GeolocationReturnType>((resolve, reject) => {
        navigator.geolocation.getCurrentPosition((p) => {
            resolve(p);
        }, (e) => {
            reject(e);
        }, {
                timeout: 20000
            });
    });
};

/**
 * Get Region from Geolocation
 * @param location Geolocation from navigator API
 * @returns {Region} React Maps Region
 */
export const getRegionFromLocation = (location: GeolocationReturnType): Region => {

    const distance = location.coords.accuracy / 2;
    const circumference = 40075;
    const oneDegreeOfLatitudeInMeters = 111.32 * 1000;
    const angularDistance = distance / circumference;

    const latitudeDelta = distance / oneDegreeOfLatitudeInMeters;
    const longitudeDelta = Math.abs(Math.atan2(
        Math.sin(angularDistance) * Math.cos(location.coords.latitude),
        Math.cos(angularDistance) - Math.sin(location.coords.latitude) * Math.sin(location.coords.latitude)))

    return {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: Math.max(0, latitudeDelta),
        longitudeDelta: Math.max(0, longitudeDelta)
    };
};
