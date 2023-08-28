import { useContext, useEffect, useState } from 'react'
import { Success } from '../../components'
import TrxId from '../../contexts/trxId'

export default function SuccessScreen() {
    const [pay, setPay] = useState({})
    const { trxId } = useContext(TrxId)

    const apiV1 = ''
    const token = ''

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${apiV1}`, {
                    method: 'GET',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                })

                const data = await response.json()

                if (response.ok) {
                    setPay(data)
                    console.log('tx', data)
                }
            } catch {
                console.log('Please check your internet connection!')
            }
        }
        fetchData()
    }, [])

    return (
        <>
            <Success pay={pay} />
        </>
    )
}
