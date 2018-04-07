/**
 * desc：Message
 * author：yanshu Lee
 * date： 2018/4/4
 */
import React, {PropTypes, Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions
} from 'react-native';

export default class Message extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }
    static navigationOptions = ({navigation}) => ({
        header: null,
    });


    render() {
        return (
            <View style={styles.containter}>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    containter:{
        flex:1,backgroundColor:"pink",justifyContent:'center',alignItems:"center"
    }
});