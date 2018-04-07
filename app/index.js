/**
 * android homePage
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ImageBackground,
    Dimensions,
    TextInput,
    TouchableOpacity
} from 'react-native';
import { styles } from './pages/login/style/index.js';
import App from './app'

const {width, height} = Dimensions.get('window');

type Props = {};
export default class HomePage extends Component<Props> {

    render() {
        return (
            <App/>
        );
    }
}
