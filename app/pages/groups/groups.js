/**
 * desc：groups
 * author：Yanshu Lee
 * date： 2018/4/4
 */
import React, {PropTypes, Component} from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

export default class groups extends React.Component {

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
                <Text>
                    好友列表
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containter:{
        flex:1,backgroundColor:"pink",justifyContent:'center',alignItems:"center"
    }
});