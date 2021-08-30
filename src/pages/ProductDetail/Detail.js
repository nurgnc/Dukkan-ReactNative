import React from 'react'
import { Text, View, Image } from 'react-native'
import styles from './Detail.styles'
import useFetch from '../../hooks/useFetch/useFetch'
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';
import { API } from '../../common'

const Detail = ({ route }) => {
    const { id } = route.params;
    const { loading, error, data } = useFetch(`${API}/${id}`)

    if (loading) {
        return <Loading />
    }

    if (error) {
        return <Error />
    }

    return (
        <View style={styles.container}>
            <Image source={{ uri: data.image }} style={styles.image} />
            <View style={styles.bodyContainer}>
                <Text style={styles.title}>{data.title}</Text>
                <Text style={styles.desc}>{data.description}</Text>
                <Text style={styles.price}>{data.price} TL</Text>
            </View>
        </View>
    )
}

export default Detail
