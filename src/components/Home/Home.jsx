import { Octicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import tw from '../../library/tailwind'

export default function Home(props) {
    const navigation = useNavigation()

    return (
        <View style={tw`flex-1 justify-center items-center bg-white`}>
            <Octicons style={tw`mx-auto mt-[-60px] mb-[0px]`} name="device-mobile" size={44} color="black" />
            <Text style={tw`font-700 text-[18px] mb-[10px]`}>React Native Expo Payment</Text>

            <TextInput
                style={tw`bg-light text-dark w-60 p-4`}
                keyboardType="number-pad"
                onChangeText={(e) => props.setPrice(parseInt(e))}
                required
            />

            <TouchableOpacity onPress={() => props.handlePayment()}>
                <Text style={tw`log_btn`}>Payment</Text>
            </TouchableOpacity>

            <Text>{props.price}</Text>

            <TouchableOpacity onPress={() => navigation.navigate('success')}>
                <Text style={tw`p-4 bg-green2`}>Success</Text>
            </TouchableOpacity>
        </View>
    )
}
