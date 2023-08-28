import { useNavigation } from '@react-navigation/native'
import { useLocalSearchParams } from 'expo-router'
import { ActivityIndicator, View } from 'react-native'
import { WebView } from 'react-native-webview'

export default function App() {
    const navigation = useNavigation()
    const payment_url = useLocalSearchParams()

    const handleNavigationStateChange = (state) => {
        const { url } = state
        if (url.includes('success')) {
            navigation.navigate('success')
        } else if (url.includes('fail')) {
            navigation.navigate('fail')
        }
    }

    return (
        <View style={{ flex: 1 }}>
            <WebView
                source={{ uri: payment_url.url }}
                javaScriptEnabled={true}
                onError={(error) => console.error('WebView Error:', error)}
                onNavigationStateChange={handleNavigationStateChange}
                startInLoadingState={true}
                renderLoading={() => (
                    <View style={{ flex: 1 }}>
                        <ActivityIndicator size="large" color="lightskyblue" />
                    </View>
                )}
            />
        </View>
    )
}
