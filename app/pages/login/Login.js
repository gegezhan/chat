/**
 * 登录注册页
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ImageBackground,
    TextInput,
    TouchableOpacity
} from 'react-native';
import SignIn from './SignIn';
import SignUp from './SignUp';
import ForgetPwd from "./ForgetPwd";

type Props = {};
export default class Login extends Component<Props> {
    constructor(props){
        super(props);
        this.state = {
            status: 'sign-in'
        }
    }

    /**
     * 登录触发
     * @returns {*}
     */
    submit = () => {
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

    static navigationOptions = ({navigation}) => ({
        header: null,
    });

    /**
     * 根据登录注册页面状态返回 dom
     */
    loginStatus = () => {
        const { status } = this.state;
        let component = '';
        if(status === 'sign-in'){
            component = <SignIn signUp={this.signUp} forgetPassword={this.forgetPassword} submit={this.submit}/>
        }else if(status === 'sign-up'){
            component = <SignUp signIn={this.signIn}/>
        }else if(status === 'forget-pwd'){
            component = <ForgetPwd/>
        }
        return component;
    }

    render() {
        return (
            <ImageBackground style={styles.container} source= {require('../../images/background/blue.jpeg')}>
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
const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
    },
    logo_wrap: {
        width: 141,
        height: 141,
        top: 100,
        borderRadius: 141,
        borderColor: '#fff',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo_dot: {
        width: 100,
        height: 100,
        borderColor: '#fff',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo_text: {
        fontSize: 60,
        textAlign: 'center',
        margin: 10,
        color: '#fff',
    },
    logo_sub_text: {
        fontSize: 16,
        textAlign: 'center',
        margin: 10,
        color: '#fff',
        marginTop: 110
    },

    form: {
        top: 10
    },
    input_wrap: {
        width: 300,
        flexDirection: 'row',
        height: 50,
        borderColor: 'transparent',
        borderBottomColor: '#ccc',
        borderWidth: 1,
    },
    icon: {
        width: 24,
        height: 30,
        top: 10,
        marginLeft: 10,
        marginRight: 5
    },
    form_user: {
        height: 50,
        borderColor: 'transparent',
        borderWidth: 1,
        flex: 1,
    },
    form_pwd: {
        height: 50,
        borderColor: 'transparent',
        borderWidth: 1,
        flex: 1,
    },
    form_submit: {
        top: 30,
    },
    form_submit_btn: {
        padding: 8,
        backgroundColor: '#48ebf3',
        opacity: 0.5,
        borderRadius: 5,
        borderColor: '#fff',
        borderWidth: 1,
    },
    form_submit_text: {
        fontSize: 16,
        textAlign: 'center'
    },
    forget_wrap: {
        width: 300,
        top: 50,
        flexDirection: 'row'
    },
    forget_pwd_wrap: {
        flex: 1,
    },
    forget_pwd: {
        textAlign: 'left',
    },
    new_user: {
        textAlign: 'right',
    }
});
