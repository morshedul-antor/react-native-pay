import { View, Text } from 'react-native'

export default function Success(props) {
    return (
        <View>
            <Text>Payment Success</Text>
            <Text>Trx: {props.pay.mer_txnid}</Text>
            <Text>Ammount: ৳{props.pay.amount_bdt}</Text>
        </View>
    )
}
