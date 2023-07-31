import {StatusBar} from "expo-status-bar"
import {Platform, StyleSheet} from "react-native"

import EditScreenInfo from "@/src/components/EditScreenInfo"
import {Text, View} from "@/src/components/Themed"
import {t} from "../../locale/changeLanguage";
import {Stack} from "expo-router";

export default function PrivacyScreen() {
    return (
        <View style={styles.container}>
            <Stack.Screen options={{headerShown: true}}/>

            <Text style={styles.title}>{t("privacy_title")}</Text>
            <View
                style={styles.separator}
                lightColor="#eee"
                darkColor="rgba(255,255,255,0.1)"
            />
            <EditScreenInfo path="/privacy.js"/>

            {/* Use a light status bar on iOS to account for the black space above the modal */}
            <StatusBar style={Platform.OS === "ios" ? "light" : "auto"}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    title: {
        fontSize: 20,
        fontWeight: "bold"
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: "80%"
    }
})
