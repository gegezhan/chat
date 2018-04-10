/**
 * 获取验证码按钮组件
 */
import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity
} from 'react-native';
import { styles } from './style/index';

type Props = {};
export default class GetIdentify extends Component<Props> {

    constructor(props){
        super(props);
        this.state = {
            timing: false,
            timingCount: 10,
            retrieveTxt: '获取验证码'
        }
    }

    /**
     * 获取验证码
     */
    getRetrieveCode = () => {
        this.timer = window.setInterval(this.timingChange, 1000);
        this.setState({
            timing: true
        })
    }

    /**
     * 倒计时函数
     */
    timingChange = () => {
        const { timingCount } = this.state;
        if(timingCount === 0){
            window.clearInterval(this.timer);
            this.setState({
                timingCount: 10,
                retrieveTxt: '获取验证码',
                timing: false
            })
        }else{
            this.setState({
                timingCount: timingCount - 1,
                retrieveTxt: timingCount || '获取验证码'
            })
        }
    }

    render() {
        return (
            <TouchableOpacity onPress={this.getRetrieveCode} disabled={this.state.timing}>
                <Text style={styles.get_identify_text}>
                    {this.state.retrieveTxt}
                </Text>
            </TouchableOpacity>
        );
    }
}
