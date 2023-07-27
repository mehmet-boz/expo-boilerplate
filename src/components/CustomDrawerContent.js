import {View} from "react-native";
import {DrawerContentScrollView, DrawerItem} from "@react-navigation/drawer";
import {t} from "../locale/changeLanguage";
import {router, useNavigation} from "expo-router";


const CustomDrawerContent = (props) => {
    const navigation = useNavigation()

    return (
        <View style={{flex: 1}}>
            <View style={{flex: 1}}>
                <DrawerContentScrollView {...props}>
                    <DrawerItem
                        label={t("home")}
                        onPress={() => router.push("(tabs)")}
                    />
                    <DrawerItem
                        label={t("settings")}
                        onPress={() => router.push("two")}
                    />
                    <DrawerItem
                        label="Modal"
                        onPress={() => router.push("/pages/modal")}
                    />
                </DrawerContentScrollView>
            </View>

        </View>
    );
}

export default CustomDrawerContent;