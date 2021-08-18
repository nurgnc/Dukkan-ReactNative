import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import Config from 'react-native-config';
import axios from 'axios';

import ProductCard from '../../components/ProductCard/ProductCard'

const Products = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetcData();
    }, []);

    const fetcData = async () => {
        const {data : productData} = await axios.get("https://fakestoreapi.com/products");
        setData(productData);
    }

    const renderProduct = ({item}) => <ProductCard product={item}/>;

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
