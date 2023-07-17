import {Text, View} from "react-native";
import {Stack} from "expo-router";

export default function PrivacyScreen() {
    return (
        <View className="flex-1 justify-items-center items-center">
            <Stack.Screen options={{title: "Privacy Screen"}}/>
            <Text>Privacy Policy Screen</Text>
        </View>
    )
}