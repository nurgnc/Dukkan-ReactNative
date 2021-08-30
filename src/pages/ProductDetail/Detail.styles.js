import {StyleSheet, Dimensions} from 'react-native';

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width: deviceSize.width,
        height: deviceSize.height / 3,
        resizeMode: 'contain',
        backgroundColor: 'white',
    },
    bodyContainer: {
        padding: 10,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
    },
    desc: {
        fontStyle: 'italic',
        marginVertical: 10,
    },
    price: {
        fontWeight: 'bold',
        fontSize: 22,
        textAlign: 'right',
    },
})