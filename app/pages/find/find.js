/**
 * desc：find
 * author：Yanshu Lee
 * date： 2018/4/3
 */
import React, {PropTypes, Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    Dimensions,
    Image,
    ImageBackground
} from 'react-native';
import {Photos,getArrayItems} from "./photo"

export default class find extends React.Component {

    constructor(props) {

        super(props);
    }

    state = {
        arr:[1,2,3,4,5,6,7,8],
        photoArr:   [
            {mainPhoto:require("../../images/debug/main.png"),name:"陈独秀",sex:"男"},
            {mainPhoto:require("../../images/debug/photo1.png"),name:"李时珍",sex:"女"},
            {mainPhoto:require("../../images/debug/photo2.png"),name:"李大钊",sex:"女"},
            {mainPhoto:require("../../images/debug/photo3.png"),name:"哆啦A梦",sex:"女"},
            {mainPhoto:require("../../images/debug/photo4.png"),name:"小虎",sex:"女"},
            {mainPhoto:require("../../images/debug/photo5.png"),name:"小明",sex:"男"},
            {mainPhoto:require("../../images/debug/photo6.png"),name:"韩梅梅",sex:"女"},
            {mainPhoto:require("../../images/debug/photo7.png"),name:"李雷",sex:"女"},
            {mainPhoto:require("../../images/debug/photo8.png"),name:"孙悟空",sex:"女"},
            {mainPhoto:require("../../images/debug/photo9.png"),name:"霍金",sex:"男"},
            {mainPhoto:require("../../images/debug/photo10.png"),name:"阿尔萨斯",sex:"女"},
            {mainPhoto:require("../../images/debug/photo11.png"),name:"李宇春",sex:"女"},
            {mainPhoto:require("../../images/debug/photo12.png"),name:"胡歌",sex:"男"},
            {mainPhoto:require("../../images/debug/photo13.png"),name:"霍建华",sex:"男"},
            {mainPhoto:require("../../images/debug/photo14.png"),name:"林心如",sex:"女"},
            {mainPhoto:require("../../images/debug/photo15.png"),name:"没有人",sex:"女"},
        ],
        display:"none",
        sign:"flex",
        showImage:require("../../images/debug/main.png"),
        name:"",
        sex:""
    };

    static navigationOptions = ({navigation}) => ({
        header: null,
    });

    showInfo(showImage){

        this.setState({
            sign:"flex",
            display:"flex",
        },()=>{
            this.setState({
                display:"flex",
                sign:"none",
                showImage:showImage.mainPhoto,
                name:showImage.name,
                sex:showImage.sex,
            })
        })

    }

    another_Batch=()=>{
        this.setState({
            sign:"none",
            display:"none",
            name:""
        },()=>{
            this.setState({
                arr:getArrayItems(this.state.arr,16),
                photoArr:getArrayItems(this.state.photoArr,16),
                sign:"flex",
            })
        })
    };

    render() {
        return (
            <View style={[styles.containter,]}>
                <View style={styles.photos_Containter}>
                    <Photos sign={this.state.sign} display={this.state.display}  arr={this.state.arr} photoArr={this.state.photoArr} showInfo={this.showInfo.bind(this)}/>

                </View>
                <View style={[styles.centerInfo,{display:this.state.name==""?"none":"flex"}]}>
                    <ImageBackground source={this.state.showImage} style={styles.centerImage}/>
                    <Text>个人资料</Text>
                    <Text>姓名:{this.state.name}</Text>
                    <Text>性别:{this.state.sex}</Text>
                    <Text>添加好友</Text>
                </View>
                <TouchableOpacity onPress={this.another_Batch} style={styles.btn_turn}>
                    <Text style={{color:"#333"}}>换一批</Text>
                </TouchableOpacity>
            </View>
        );
    }
}




const styles = StyleSheet.create({
    containter:{
        flex:1,
        backgroundColor:"#e5ea7f",
        justifyContent:"center",
        alignItems:"center"
    },
    photo:{
        justifyContent:'center',
        alignItems:"center"
    },
    btn_turn:{
        position:"absolute",
        width:100,
        height:40,
        bottom:20,
        right:20,
        backgroundColor:"pink",
        justifyContent:"center",
        alignItems:"center"},
    centerInfo:{
        width:Dimensions.get("window").width/2,
        height:Dimensions.get("window").width/2,
        backgroundColor:"#fff",position:"absolute",
        borderRadius:Dimensions.get("window").width/2,
        justifyContent:'center',
        alignItems:"center"},
    photos_Containter:{
        width:Dimensions.get("window").width,
        height:Dimensions.get("window").width,
        borderRadius:Dimensions.get("window").width,
        position:"relative"
    },
    centerImage:{
        width:80,height:80,borderRadius:40,overflow:"hidden"
    }
});