import {StyleSheet} from 'react-native';

import EditScreenInfo from '@/src/components/EditScreenInfo';
import {Text, View} from '@/src/components/Themed';
import {t} from "../../../locale/changeLanguage";


export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{t("home_title")}</Text>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>

            <EditScreenInfo path="app/(tabs)/index.js"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});
