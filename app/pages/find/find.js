/**
 * desc：find
 * author：Yanshu Lee
 * date： 2018/4/3
 */
import React, {PropTypes, Component} from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

export default class find extends React.Component {

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
                    寻找更多
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