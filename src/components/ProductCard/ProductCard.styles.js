import React from 'react'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: '#bdbdbd',
        margin: 10,
        backgroundColor: 'white',
        flexDirection: 'row',
    },
    image: {
        width: 100,
        minHeight: 100,
        resizeMode: 'contain',
    },
    bodyContainer: {
        flex: 1,
        padding: 5,
        justifyContent: 'space-between',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 17,
    },
    price: {
        textAlign: 'right',
        fontSize: 15,
        fontStyle: 'italic',
    },
});