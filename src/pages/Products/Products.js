import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import Config from 'react-native-config';

const Products = () => {
    const renderProduct = ({item}) => null;
    return (
        <View style={styles.container}>
        <FlatList 
            data={null}
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
