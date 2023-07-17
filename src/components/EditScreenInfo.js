import React from "react"
import {StyleSheet} from "react-native"
import {MonoText} from "./StyledText"
import {Text, View} from "./Themed"
import {getTranslation} from "../locale/changeLanguage";


export default function EditScreenInfo({path}) {
    return (
        <View>
            <View style={styles.getStartedContainer}>
                <Text
                    style={styles.getStartedText}
                    lightColor="rgba(0,0,0,0.8)"
                    darkColor="rgba(255,255,255,0.8)"
                >
                    {getTranslation("screen_info_text")}
                </Text>

                <View
                    style={[styles.codeHighlightContainer, styles.homeScreenFilename]}
                    darkColor="rgba(255,255,255,0.05)"
                    lightColor="rgba(0,0,0,0.05)"
                >
                    <MonoText>{path}</MonoText>
                </View>

                <Text
                    style={styles.getStartedText}
                    className="text-md text-green-600 dark:text-cyan-300 mt-5 font-bold"
                >
                    {getTranslation("screen_info_styled")}
                </Text>
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    getStartedContainer: {
        alignItems: "center",
        marginHorizontal: 50
    },
    homeScreenFilename: {
        marginVertical: 7
    },
    codeHighlightContainer: {
        borderRadius: 3,
        paddingHorizontal: 4
    },
    getStartedText: {
        fontSize: 17,
        lineHeight: 24,
        textAlign: "center"
    },
})
