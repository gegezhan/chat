/**
 * 忘记密码页面
 */
import React, { Component } from 'react';
import {
    Text,
    View,
    TextInput,
    TouchableOpacity
} from 'react-native';
import { styles } from './style/index';

type Props = {};
export default class ForgetPwd extends Component<Props> {
    constructor(props){
        super(props);
        this.state = {
            method: 'phone',
        }
    }
    /**
     * 找回密码
     * @returns {*}
     */
    submit = () => {

    }

    /**
     * 找回密码方式修改
     */
    methodChange = (method) => {
        this.setState({method})
    }

    /**
     * 找回密码
     */
    retrieveElem = (method) => {
        let elem = '';
        if(method === 'mail'){
            elem = (
                <View style={styles.retrieve_wrap}>
                    <View style={styles.input_wrap}>
                        <TextInput
                            autoFocus={false}
                            placeholder='输入邮箱地址'
                            style={styles.form_user}
                            inlineImageLeft='email'
                            underlineColorAndroid='transparent'
                        />
                    </View>
                    <View style={styles.form_submit}>
                        <TouchableOpacity onPress={this.submit} style={styles.form_submit_btn}>
                            <Text style={styles.form_submit_text}>
                                发送验证码到邮箱
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )
        } else {
            elem = (
                <View style={styles.retrieve_wrap}>
                    <View style={styles.phone_wrap}>
                        <TextInput
                            autoFocus={false}
                            placeholder='手机号'
                            inlineImageLeft='email'
                            underlineColorAndroid='transparent'
                            style={styles.phone}
                        />
                        <TouchableOpacity onPress={this.submit}>
                            <Text style={styles.get_identify_text}>
                                获取验证码
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TextInput
                            autoFocus={false}
                            placeholder="验证码"
                            style={styles.identify_code}
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
            )
        }
        return elem;
    }


    render() {
        const { method } = this.state;
        return (
            <View style={styles.form}>
                <View style={styles.retrieve_method}>
                    <TouchableOpacity onPress={(e) => this.methodChange('phone', e)} style={ method === 'phone' ? styles.retrieve_selected : styles.retrieve_unselected}>
                        <Text style={styles.retrieve_text}>
                            手机找回
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={(e) => this.methodChange('mail', e)} style={ method === 'mail' ? styles.retrieve_selected : styles.retrieve_unselected}>
                        <Text style={styles.retrieve_text}>
                            邮箱找回
                        </Text>
                    </TouchableOpacity>
                </View>
                {
                    this.retrieveElem(method)
                }

            </View>
        );
    }
}
