import FontAwesome from "@expo/vector-icons/FontAwesome"
import {DarkTheme, DefaultTheme, ThemeProvider} from "@react-navigation/native"
import {useFonts} from "expo-font"
import {SplashScreen} from "expo-router"
import {useEffect} from "react"
import {useColorScheme} from "react-native"
import {Provider} from "react-redux";
import {store} from "../store";
import {Drawer} from "expo-router/drawer";
import CustomDrawerContent from "../components/CustomDrawerContent";


export {
    // Catch any errors thrown by the Layout component.
    ErrorBoundary
} from "expo-router"

export const unstable_settings = {
    initialRouteName: "(tabs)"
}

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
    const [loaded, error] = useFonts({
        SpaceMono: require("../../assets/fonts/SpaceMono-Regular.ttf"),
        ...FontAwesome.font
    })

    // Expo Router uses Error Boundaries to catch errors in the navigation tree.
    useEffect(() => {
        if (error) throw error
    }, [error])

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync()
        }
    }, [loaded])

    if (!loaded) {
        return null
    }

    return <RootLayoutNav/>
}

function RootLayoutNav() {
    const colorScheme = useColorScheme()
    return (
        <Provider store={store}>
            <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
                <Drawer drawerContent={props => <CustomDrawerContent {...props} />}
                        screenOptions={{
                            headerShown: false,
                            drawerActiveBackgroundColor: "#f5f4ff",
                            drawerActiveTintColor: "#4E40A1",
                            drawerInactiveTintColor: "#333",
                            drawerLabelStyle: {
                                fontSize: 16
                            }
                        }}>
                </Drawer>
            </ThemeProvider>
        </Provider>
    )
}
