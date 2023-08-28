import AsyncStorage from '@react-native-async-storage/async-storage'
import { useState, useEffect, createContext } from 'react'

const TrxId = createContext('')

export const TrxIdProvider = ({ children }) => {
    const [trxId, updateTrxId] = useState('')

    useEffect(() => {
        async function fetchData() {
            const data = await AsyncStorage.getItem('trx')
            updateTrxId(data)
        }
        fetchData()
    }, [])

    const setTrxId = async (value) => {
        await AsyncStorage.setItem('trx', JSON.stringify(value))
        updateTrxId(JSON.stringify(value))
    }

    return <TrxId.Provider value={{ trxId, setTrxId }}>{children}</TrxId.Provider>
}

export default TrxId
