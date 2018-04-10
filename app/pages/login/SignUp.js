/**
 * 注册页面 by:sylvia
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
import GetIdentify from './GetIdentify';

type Props = {};
export default class SignUp extends Component<Props> {

    constructor(props){
        super(props);
        this.state = {
            user: '',
            password: '',
            rePassword: '',
            timing: false,
            timingCount: 10,
            retrieveTxt: '获取验证码'
        }
        this.timer = '';
    }

    /**
     * 登录触发
     * @returns {*}
     */
    submit = () => {
        const { user, password, rePassword } = this.state;
        if(password !== rePassword){
            console.log('密码不一致，请重新确认！');
            return;
        }
        let userData = {
            user: user,
            password: password,
            rePassword: rePassword
        };
        this.props.submit ? this.props.submit(userData) : null;
    }

    /**
     * 返回登录页
     */
    signIn = () => {
        this.props.signIn ? this.props.signIn() : null
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
                        underlineColorAndroid='transparent'
                        value={this.state.user}
                        onChangeText={(user) => this.setState({user})}
                    />
                </View>
                <View style={styles.phone_wrap}>
                    <View style={styles.phone}>
                        <Image
                            source={require('../../images/login/retrieve.png')}
                            style={styles.icon}
                        />
                        <TextInput
                            autoFocus={false}
                            placeholder='验证码'
                            underlineColorAndroid='transparent'
                            style={styles.form_user}
                        />
                    </View>

                    <GetIdentify/>
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
                        value={this.state.password}
                        onChangeText={(password) => this.setState({password})}
                        secureTextEntry={true}
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
                        value={this.state.rePassword}
                        onChangeText={(rePassword) => this.setState({rePassword})}
                        secureTextEntry={true}
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

