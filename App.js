import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native'
import { TrxIdProvider } from './src/contexts/trxId'
import { UserNameProvider } from './src/contexts/userName'
import tw from './src/library/tailwind'
import { HomeScreen, WebScreen, SuccessScreen, FailScreen } from './src/screens'
import { Android } from './src/utils/platform'

const Stack = createNativeStackNavigator()

export default function App() {
    return (
        <UserNameProvider>
            <TrxIdProvider>
                {/******************** main view part ***********************/}
                <SafeAreaView style={tw`${style.root}`}>
                    <StatusBar style="auto" />
                    <NavigationContainer>
                        <Stack.Navigator
                            screenOptions={{
                                headerShown: false,
                            }}>
                            {/************** screen **************/}
                            <Stack.Screen name="home" component={HomeScreen} />
                            <Stack.Screen name="webview" component={WebScreen} />
                            <Stack.Screen name="success" component={SuccessScreen} />
                            <Stack.Screen name="fail" component={FailScreen} />
                            {/*************** end ***************/}
                        </Stack.Navigator>
                    </NavigationContainer>
                </SafeAreaView>
                {/******************** end view part ***********************/}
            </TrxIdProvider>
        </UserNameProvider>
    )
}

const style = {
    root: `flex-1 bg-white pt-[${Android ? 30 : 10}px]`,
}
