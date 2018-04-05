import {StyleSheet, Dimensions} from "react-native";
export const styles = StyleSheet.create({
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
    form_wrap: {
        top: 40
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
        backgroundColor: '#f3ecec',
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
