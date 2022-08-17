import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import { MAIN_PADDING, MAIN_WHITE, SECOND_WHITE } from '../../../constatnts'

function AvaDescriptionComponent() {
    return (
        <View style={styles.lowContainer}>
            <View style={styles.highContainer}>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    lowContainer: {
        height: 200,
        width: '100%',
        backgroundColor: SECOND_WHITE
    },
    highContainer: {
        height: 200,
        width: '100%',
        paddingHorizontal: MAIN_PADDING,
        borderBottomEndRadius: 60,
        backgroundColor: MAIN_WHITE

    }
})

export default AvaDescriptionComponent