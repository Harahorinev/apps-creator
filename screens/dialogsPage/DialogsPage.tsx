import * as React from 'react'
import { Button, Text, View, StyleSheet } from 'react-native'
import { MAIN_PADDING, MAIN_WHITE } from '../../constatnts'
import UserDialogComponent from './components/UserDialgComponent'

function DialogsPage({ navigation }: { navigation: any }) {
    return (
        <View style={styles.container}>
            <UserDialogComponent
                name='Anton'
                lastMessage='Privet Privet Privet Privet Privet Privet Privet Privet Privet Privet '
                navigation={navigation.goBack}
            />
            <UserDialogComponent
                name='Masha'
                lastMessage='Ya tut!'
                navigation={navigation.goBack}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        paddingHorizontal: MAIN_PADDING,
        paddingVertical: 10,
        backgroundColor: MAIN_WHITE
    }
})

export default DialogsPage