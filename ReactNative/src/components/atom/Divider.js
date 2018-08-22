import React from 'react'
import { View, StyleSheet } from 'react-native'

const Divider = () => {
    return (
        <View style={styles.divider} />

    )
}
const styles = StyleSheet.create({
    divider: {
        backgroundColor: "#eee",
        height: 5,
        marginTop: 15
    }
})

export default Divider
