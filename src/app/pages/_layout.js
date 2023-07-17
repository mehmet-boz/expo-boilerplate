import {Stack} from "expo-router";

export default function PagesLayout() {
    return (
        <Stack>
            <Stack.Screen name="modal" options={{headerShown: false, presentation: "modal"}}/>
        </Stack>
    )
}