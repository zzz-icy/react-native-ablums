import React from 'react';
import { Text, View } from 'react-native';

const Header = () => {
    const { textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle} >
            <Text style={textStyle}>Albums!</Text>
        </View>

    )
}

const styles = {
    viewStyle: {
        backgroundColor: '#f8f8f8',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 70,
        paddingTop: 35,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2
    },
    textStyle: {
        fontSize: 20
    }
}


export default Header;


