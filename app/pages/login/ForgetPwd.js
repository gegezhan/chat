/**
 * 忘记密码页面
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
export default class ForgetPwd extends Component<Props> {

    /**
     * 登录触发
     * @returns {*}
     */
    submit = () => {

    }

    static navigationOptions = ({navigation}) => ({
        header: null,
    });

    render() {
        return (
            <View style={styles.form_wrap}>
                <View style={styles.input_wrap}>
                    <Image
                        source={require('../../images/login/user_b.png')}
                        style={styles.icon}
                    />
                    <TextInput
                        autoFocus={false}
                        placeholder="输入邮箱或手机"
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
                            找回密码
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
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
