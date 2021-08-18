import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native'
import Config from 'react-native-config';
import axios from 'axios';

import ProductCard from '../../components/ProductCard/ProductCard'
import useFetch from '../../hooks/useFetch/useFetch'

const Products = () => {
    const {loading, data, error} = useFetch("https://fakestoreapi.com/products")

    const renderProduct = ({ item }) => <ProductCard product={item} />;

    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" />
    }

    if (error) {
        return <Text>{error}</Text>
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
