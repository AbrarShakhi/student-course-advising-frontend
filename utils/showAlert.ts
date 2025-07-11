import { Alert, Platform } from "react-native";


export default function showAlert(title: string, message: string) {
    if (Platform.OS === "web") {
        window.alert(`${title}\n\n${message}`);
    } else {
        Alert.alert(title, message);
    }
}