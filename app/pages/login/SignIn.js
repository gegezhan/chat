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
import { styles } from './style/index.js';

type Props = {};
export default class SignIn extends Component<Props> {

    /**
     * 登录触发
     * @returns {*}
     */
    submit = () => {
        this.props.navigation.navigate("Tab")
    }

    /**
     * 跳转到新用户注册页面
     */
    signUp = () =>{
        this.props.navigation.navigate("SignUp")
    }

    /**
     * 跳转到忘记密码页面
     */
    forgetPassword = () => {
        this.props.navigation.navigate("SignUp")
    }

    static navigationOptions = ({navigation}) => ({
        header: null,
    });
    render() {
        return (
            <ImageBackground style={styles.container} source= {require('../../images/pur.jpeg')}>
                <View style={styles.logo_wrap}>
                    <View style={styles.logo_dot}>
                        <Text style={styles.logo_text}>M</Text>
                    </View>
                </View>
                <Text style={styles.logo_sub_text}>
                    Enjoy your life ~
                </Text>
                <View style={styles.form_wrap}>
                    <View style={styles.input_wrap}>
                        <Image
                            source={require('../../images/user_b.png')}
                            style={styles.icon}
                        />
                        <TextInput
                            autoFocus={false}
                            placeholder="请输入用户名"
                            style={styles.form_user}
                            inlineImageLeft='email'
                            underlineColorAndroid='transparent'
                        />
                    </View>
                    <View style={styles.input_wrap}>
                        <Image
                            source={require('../../images/pwd_b.png')}
                            style={styles.icon}
                        />
                        <TextInput
                            autoFocus={false}
                            placeholder="请输入密码"
                            style={styles.form_pwd}
                            underlineColorAndroid='transparent'
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
            </ImageBackground>
        );
    }
}
