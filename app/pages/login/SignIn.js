/**
 * 登录页面
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

type Props = {};
export default class SignIn extends Component<Props> {

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
    submit = () => {
        this.props.submit ? this.props.submit() : null;
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
const styles = StyleSheet.create({
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
