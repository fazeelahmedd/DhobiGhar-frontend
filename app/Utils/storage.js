import AsyncStorage from '@react-native-async-storage/async-storage';

export const setValueInStorage = async (key, data) => {
    console.log("Saved", key, typeof data)
    try {
        typeof data != 'object' ?
            await AsyncStorage.setItem(key, data).then((res) => console.log("Saved", res)) :
            await AsyncStorage.setItem(key, JSON.stringify(data))
    } catch (e) {
        console.log("Error while saving data @AsyncStorage", e)
    }
}

export const getValueFromStorage = async (key) => {
    try {
        const jsonValue = await AsyncStorage.getItem(key)
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        console.log("Error while getting data @AsyncStorage", e)
    }
}