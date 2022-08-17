import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { MAIN_PADDING, MAIN_WHITE, SECOND_WHITE } from '../../../constatnts'
import Post from './PostComponent'

function PostsContainer() {
    return (
        <View style={styles.lowPostsContainer}>
            <View style={styles.hightPostsContainer}>
                <Post postText='qweqwe1'/>
                <Post postText='qweqwe2'/>
                <Post postText='qweqwe3'/>
                <Post postText='qweqwe4'/>
                <Post postText='qweqwe5'/>
                <Post postText='qweqwe6'/>
                <Post postText='qweqwe7'/>
                <Post postText='qweqwe8'/>
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    lowPostsContainer: {
        height: '100%',
        width: '100%',
        backgroundColor: MAIN_WHITE,
    },
    hightPostsContainer: {
        height: '100%',
        width: '100%',
        paddingHorizontal: MAIN_PADDING,
        paddingVertical: 30,
        borderTopLeftRadius: 60,
        backgroundColor: SECOND_WHITE
    }
})

export default PostsContainer