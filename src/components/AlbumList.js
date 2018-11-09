import React from 'react';
import { ScrollView } from 'react-native';
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
        // remember to return
        return this.state.albums.map((album) => (
            <AlbumDetail key={album.title} album={album} />
        ));
    }

    // we need some logics to handle when http requests completes, rerender the component to show th data

    render() {
        console.log(this.state.albums);
        // if (this.state.albums === []) return <Text>nodata</Text>;
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        )
    }
}

export default AlbumList;