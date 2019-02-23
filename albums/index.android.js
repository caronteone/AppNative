// Import a library to create component
import React from 'react';
import { Text, AppRegistry } from 'react-native';

// create component
const App = () => (
        <Text> Some Text </Text>
    );
//render it to device
AppRegistry.registerComponent('albums', () => App);
