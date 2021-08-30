import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native'
import ProductCard from '../../components/ProductCard/ProductCard'
import useFetch from '../../hooks/useFetch/useFetch'
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';
import {API} from '../../common'

const Products = ({navigation}) => {
    const {loading, data, error} = useFetch(`${API}`)

    const handleProductSelect = (id) => {
        navigation.navigate("DetailPage", {id})
    };

    const renderProduct = ({ item }) => <ProductCard product={item} onSelect={() => handleProductSelect(item.id)}/>;

    if (loading) {
        return <Loading />
    }

    if (error) {
        return <Error />
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={renderProduct}
            />
        </View>
    )
}

export default Products

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})
