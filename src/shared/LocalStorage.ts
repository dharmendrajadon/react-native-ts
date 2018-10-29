import { AsyncStorage } from 'react-native';

export const setIsPatrolling = async (isPatrolling: boolean): Promise<boolean> => {
    try {
        const isPatrollingValue = isPatrolling === true ? 'true' : 'false';
        await AsyncStorage.setItem('@IS_PATROLLING', isPatrollingValue);
        return Promise.resolve(true);
    } catch (error) {
        return Promise.reject(error);
    }
};

export const getIsPatrolling = async (): Promise<boolean> => {
    try {
        //const isPatrollingValue = isPatrolling === true ? 'true' : 'false';
        const isPatrollingValue = await AsyncStorage.getItem('@IS_PATROLLING');
        return Promise.resolve(isPatrollingValue === 'true' ? true : false);
    } catch (error) {
        return Promise.reject(error);
    }
};
