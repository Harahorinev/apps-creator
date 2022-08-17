import * as React from 'react'
import { Button, Text, View } from 'react-native'

function SecondScreen({ navigation }: {navigation: any}) {
    return (
        <View>
            <Button onPress={() => navigation.goBack()} title="Go back home" />
            <Text>RRRRRRR</Text>
            <Text>RRRRRRR</Text>
            <Text>RRRRRRR</Text>
        </View>
    )
}

export default SecondScreen