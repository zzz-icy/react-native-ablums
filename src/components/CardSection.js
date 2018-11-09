import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
    const { containerStyle } = styles;
    return (
        <View style={containerStyle}>
            {props.children}
        </View>
    );
}

const styles = {
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        background: "#fff",
        justifyContent: 'flex-start',
        // display: 'flex',
        flexDirection: 'row',
        borderColor: "#ddd",
        position: 'relative'
    }
}

export default CardSection;