/**
 * 注册页面
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

type Props = {};
export default class SignUp extends Component<Props> {

    /**
     * 登录触发
     * @returns {*}
     */
    submit = () => {

    }
    static navigationOptions = ({navigation}) => ({
        header: null,
    });

    signIn = () => {
        this.props.signIn ? this.props.signIn() : null
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
                        placeholder="邮箱或手机号"
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
                        placeholder="密码"
                        style={styles.form_pwd}
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
                        placeholder="确认密码"
                        style={styles.form_pwd}
                        underlineColorAndroid='transparent'
                    />
                </View>
                <View style={styles.form_submit}>
                    <TouchableOpacity onPress={this.submit} style={styles.form_submit_btn}>
                        <Text style={styles.form_submit_text}>
                            注册
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.forget_wrap}>
                    <TouchableOpacity onPress={this.signIn} style={styles.forget_pwd_wrap}>
                        <Text style={styles.to_sign_in}>返回登录页</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    //表单样式
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
    to_sign_in: {
        textAlign: 'center',
    },
});
