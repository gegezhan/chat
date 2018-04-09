/**
 * 登录注册页
 */
import React, { Component } from 'react';
import {
    Text,
    View,
    ImageBackground,
} from 'react-native';
import SignIn from './SignIn';
import SignUp from './SignUp';
import ForgetPwd from "./ForgetPwd";
import { styles } from './style/index';

type Props = {};
export default class Login extends Component<Props> {
    constructor(props){
        super(props);
        this.state = {
            status: 'sign-in'
        }
    }

    static navigationOptions = ({navigation}) => ({
        header: null,
    });

    /**
     * 登录触发
     * @returns {*}
     */
    submit = (userData) => {
        console.log('userData', userData);
        this.props.navigation.navigate("Tab")
    }

    /**
     * 返回登录页
     */
    signIn = () => {
        this.setState({
            status: 'sign-in'
        })
    }

    /**
     * 跳转到新用户注册页面
     */
    signUp = () =>{
        this.setState({
            status: 'sign-up'
        })
    }

    /**
     * 跳转到忘记密码页面
     */
    forgetPassword = () => {
        this.setState({
            status: 'forget-pwd'
        })
    }

    /**
     * 根据登录注册页面状态返回 dom
     */
    loginStatus = () => {
        const { status } = this.state;
        let component = '';
        if(status === 'sign-in'){
            component = <SignIn signUp={this.signUp} forgetPassword={this.forgetPassword} submit={this.submit}/>
        }else if(status === 'sign-up'){
            component = <SignUp signIn={this.signIn} submit={this.submit}/>
        }else if(status === 'forget-pwd'){
            component = <ForgetPwd/>
        }
        return component;
    }

    render() {
        return (
            <ImageBackground style={styles.container} source= {require('../../images/background/linear.jpeg')}>
                <View>
                    <View style={styles.logo_wrap}>
                        <View style={styles.logo_dot}>
                            <Text style={styles.logo_text}>M</Text>
                        </View>
                    </View>
                    <Text style={styles.logo_sub_text}>
                        Enjoy your life ~
                    </Text>
                </View>
                {
                    this.loginStatus()
                }
            </ImageBackground>
        );
    }
}
