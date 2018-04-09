/**
 * 登录页面
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity
} from 'react-native';
import { styles } from './style/index';

type Props = {};
export default class SignIn extends Component<Props> {

    constructor(props){
        super(props);
        this.state = {
            status: 'sign-in',
            user: 'sylvia',
            password: '123'
        }
    }

    static navigationOptions = ({navigation}) => ({
        header: null,
    });

    /**
     * 登录触发
     * @returns {*}
     */
    submit = () => {
        const { user, password } = this.state;
        let userData = {
            user: user,
            password: password
        };
        this.props.submit ? this.props.submit(userData) : null;
    }

    /**
     * 跳转到新用户注册页面
     */
    signUp = () =>{
        this.props.signUp ? this.props.signUp() : null;
    }

    /**
     * 跳转到忘记密码页面
     */
    forgetPassword = () => {
        this.props.forgetPassword ? this.props.forgetPassword() : null;
    }

    render() {
        return (
            <View style={styles.form}>
                <View style={styles.input_wrap}>
                    <Image
                        source={require('../../images/login/user_b.png')}
                        style={styles.icon}
                    />
                    <TextInput
                        autoFocus={false}
                        placeholder="请输入用户名"
                        style={styles.form_user}
                        inlineImageLeft='email'
                        underlineColorAndroid='transparent'
                        value={this.state.user}
                        onChangeText={(user) => this.setState({user})}
                    />
                </View>
                <View style={styles.input_wrap}>
                    <Image
                        source={require('../../images/login/pwd_b.png')}
                        style={styles.icon}
                    />
                    <TextInput
                        autoFocus={false}
                        placeholder="请输入密码"
                        style={styles.form_pwd}
                        underlineColorAndroid='transparent'
                        value={this.state.password}
                        onChangeText={(password) => this.setState({password})}
                        secureTextEntry={true}
                    />
                </View>
                <View style={styles.form_submit}>
                    <TouchableOpacity onPress={this.submit} style={styles.form_submit_btn}>
                        <Text style={styles.form_submit_text}>
                            登录
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.forget_wrap}>
                    <TouchableOpacity onPress={this.forgetPassword} style={styles.forget_pwd_wrap}>
                        <Text style={styles.forget_pwd}>忘记密码</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.signUp} style={styles.forget_pwd_wrap}>
                        <Text style={styles.new_user}>新用户注册</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
