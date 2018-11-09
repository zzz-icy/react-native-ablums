import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
    const { containerStyle } = styles;
    return (
        <View style={containerStyle}>
            {props.children}
        </View>
    );
}

const styles = {
    containerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: "#ddd",
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginRight: 5,
        marginLeft: 5,
        marginTop: 10,
        backgroundColor: '#fff'
    }
}


// The shadowOffset value changes the location of the shadow with respect to the element's frame. An offset of (2,2) will put the shadow 2 pixels to the right and 2 pixels down with respect to the element. An offset of (15,45) will put the shadow 15 pixels to the right and 45 pixels down. These can also be negative values if you want the shadow to be to the top or left of the element.

// And by pixels I mean units. Based off the original (non-retina) pixel sizes of apple devices.

export default Card;