import React from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';

class AlbumList extends React.Component {
    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(
                (response) => (console.log(response.data))
            );
    }
    // we need some logics to handle when http requests completes, rerender the component to show th data
    render() {
        return (
            <View>
                <Text>AlbumList</Text>
            </View>
        )
    }
}

export default AlbumList;