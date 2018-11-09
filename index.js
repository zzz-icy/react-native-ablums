/** @format */
// In the latest version of React Native you must import React from 'react' package

import React from 'react';
import { AppRegistry } from 'react-native';
import { View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';
import { name as appName } from './app.json';

const App = () => (
    <View>
        <Header headerText='Albums' />
        <AlbumList />
    </View>
)

// register at least one component
AppRegistry.registerComponent(appName, () => App);
