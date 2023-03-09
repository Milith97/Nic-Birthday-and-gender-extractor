import { View, ImageBackground } from 'react-native'
import React from 'react'

const Background = ({}) => {
    return (
        <View>
            <ImageBackground source={require("./Img/lanka.png")} style={{height: '100%'}} />

        </View>
    )
}
export default Background;