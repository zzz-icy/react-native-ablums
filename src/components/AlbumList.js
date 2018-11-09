import React from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends React.Component {

    state = {
        albums: []
    }

    componentDidMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            // .then(response => console.log(response.data));
            .then(
                (response) => (this.setState({
                    albums: response.data
                }))
            )
    }
    renderAlbums() {
        this.state.albums.map((album) => (
            <AlbumDetail key={album.title} albumInfo={item} />
        ))
    }

    // we need some logics to handle when http requests completes, rerender the component to show th data
    render() {
        // const { albums } = this.state;
        // if (albums === []) return 'nodata';
        console.log(albums);
        return (
            <View>
                {this.renderAlbums()}
            </View>
        )
    }
}

export default AlbumList;