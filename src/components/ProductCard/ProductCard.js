import React from 'react'
import { Text, View, Image } from 'react-native'
import styles from './ProductCard.styles'

const ProductCard = ({product}) => {
    return (
        <View style={styles.container}>
            <Image 
                style={styles.image}
                source={{uri: product.image}}
            />
            <View style={styles.bodyContainer}>
                <Text style={styles.title}>{product.title}</Text>
                <Text style={styles.price}>{product.price} TL</Text>
            </View>
        </View>
    )
}

export default ProductCard


