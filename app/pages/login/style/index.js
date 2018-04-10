import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
    },
    //logo
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

    //表单
    form: {
        top: 10,
        alignItems: 'center',
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
        width: 30,
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
        width: 300,
        padding: 8,
        backgroundColor: '#f3c9d6',
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
    },
    to_sign_in: {
        textAlign: 'center',
    },
    //找回密码
    retrieve_method: {
        width: 300,
        flexDirection: 'row',
    },
    retrieve_selected: {
        flex: 1,
        padding: 8,
        backgroundColor: '#fff',
        opacity: 0.5,
        borderColor: '#fff',
        borderWidth: 1,
    },
    retrieve_unselected: {
        flex: 1,
        padding: 8,
        backgroundColor: '#f3c9d6',
        opacity: 0.5,
        borderColor: '#fff',
        borderWidth: 1,
    },
    retrieve_text: {
        fontSize: 16,
        textAlign: 'center',
        color: '#000'
    },
    retrieve_wrap: {
        top: 30
    },
    phone_wrap: {
        height: 50,
        flexDirection: 'row'
    },
    phone: {
        borderColor: 'transparent',
        borderBottomColor: '#ccc',
        borderWidth: 1,
        width: 200,
        flexDirection: 'row'
    },
    get_identify_text: {
        textAlign: 'center',
        width: 100,
        height: 40,
        top: 10,
        padding: 8,
        backgroundColor: '#f3c9d6',
        opacity: 0.5,
        borderRadius: 5,
        borderColor: '#fff',
        borderWidth: 1,
    },
    identify_code: {
        width: 200,
        borderColor: 'transparent',
        borderBottomColor: '#ccc',
        borderWidth: 1,
    }
});
