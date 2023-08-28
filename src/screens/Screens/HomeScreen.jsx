import { useNavigation } from '@react-navigation/native'
import { useState, useContext } from 'react'
import { Home } from '../../components'
import TrxId from '../../contexts/trxId'

export default function HomeScreen() {
    const [price, setPrice] = useState()
    const { setTrxId } = useContext(TrxId)
    const navigation = useNavigation()

    const webUrl = 'payment/success'

    const apiV1 = ''
    const token = ''

    const handlePayment = async (uId, sId, amount) => {
        console.log('presss')

        try {
            const response = await fetch(`${apiV1}`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            })

            const log = await response.json()

            if (response.ok) {
                setTrxId(log.trx_id)

                if (log.result) {
                    navigation.navigate('webview', { url: log.payment_url })
                }
            } else {
                console.log(log.context + '!')
            }
        } catch {
            console.log('Please check your internet connection!')
        }
    }

    return (
        <>
            <Home price={price} setPrice={setPrice} handlePayment={handlePayment} />
        </>
    )
}
