import {Link, Stack} from "expo-router"
import {StyleSheet} from "react-native"

import {Text, View} from "@/src/components/Themed"
import {getTranslation} from "../locale/changeLanguage";

export default function NotFoundScreen() {
    return (
        <>
            <Stack.Screen options={{title: getTranslation("notfound_title")}}/>
            <View style={styles.container}>
                <Text style={styles.title}>{getTranslation("notfound_text")}</Text>
                <Link href="/" style={styles.link}>
                    <Text style={styles.linkText}>{getTranslation("notfound_link")}</Text>
                </Link>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 20
    },
    title: {
        fontSize: 20,
        fontWeight: "bold"
    },
    link: {
        marginTop: 15,
        paddingVertical: 15
    },
    linkText: {
        fontSize: 14,
        color: "#2e78b7"
    }
})
