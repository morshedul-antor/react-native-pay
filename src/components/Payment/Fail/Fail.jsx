import React, { useContext } from 'react'
import { View, Text } from 'react-native'
import TrxId from '../../../contexts/trxId'

export default function Fail() {
    const { trxId } = useContext(TrxId)

    return (
        <View>
            <Text>Payment Fail</Text>
            <Text>{trxId}</Text>
        </View>
    )
}
