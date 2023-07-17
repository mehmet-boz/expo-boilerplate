import FontAwesome from "@expo/vector-icons/FontAwesome"
import {Link, Tabs} from "expo-router"
import {Pressable, useColorScheme} from "react-native"
import Colors from "../../constants/Colors";
import {getTranslation} from "../../locale/changeLanguage";
import {useNavigation} from "@react-navigation/native";

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props) {
    return <FontAwesome size={28} style={{marginBottom: -3}} {...props} />
}

export default function TabLayout() {
    const colorScheme = useColorScheme()
    const navigation = useNavigation()
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: getTranslation("home"),
                    tabBarIcon: ({color}) => <TabBarIcon name="home" color={color}/>,
                    headerLeft: () => (
                        <Pressable onPress={() => {
                            console.log(navigation)

                            navigation.openDrawer()
                        }}>
                            {({pressed}) => (
                                <FontAwesome
                                    name="bars"
                                    size={25}
                                    color={Colors[colorScheme ?? "light"].text}
                                    style={{marginLeft: 15, opacity: pressed ? 0.5 : 1}}
                                />
                            )}
                        </Pressable>

                    ),
                    headerRight: () => (
                        <Link href="/pages/modal" asChild>
                            <Pressable>
                                {({pressed}) => (
                                    <FontAwesome
                                        name="info-circle"
                                        size={25}
                                        color={Colors[colorScheme ?? "light"].text}
                                        style={{marginRight: 15, opacity: pressed ? 0.5 : 1}}
                                    />
                                )}
                            </Pressable>
                        </Link>
                    )
                }}
            />
            <Tabs.Screen
                name="two"
                options={{
                    title: getTranslation("settings"),
                    tabBarIcon: ({color}) => <TabBarIcon name="gear" color={color}/>
                }}
            />
        </Tabs>
    )
}
