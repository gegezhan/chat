import React, {PropTypes, Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    Dimensions,
    ImageBackground
} from 'react-native';




function Photo1({photo,showInfo}) {
    return(
        //左上
        <TouchableOpacity
            onPress={()=>showInfo(photo)}
            style={styles.photo1}>
            <ImageBackground style={{flex:1}} source={photo.mainPhoto}/>
        </TouchableOpacity>
    )
}

function Photo2({photo,showInfo}) {
    return(
        //左下
        <TouchableOpacity
            onPress={()=>showInfo(photo)}
            style={styles.photo2}>
            <ImageBackground style={{flex:1}} source={photo.mainPhoto}/>
        </TouchableOpacity>
    )
}
function Photo3({photo,showInfo}) {
    return(
        //右上
        <TouchableOpacity
            onPress={()=>showInfo(photo)}
            style={styles.photo3}>
            <ImageBackground style={{flex:1}} source={photo.mainPhoto}/>
        </TouchableOpacity>
    )
}
function Photo4({photo,showInfo}) {
    return(
        //右下
        <TouchableOpacity
            onPress={()=>showInfo(photo)}
            style={styles.photo4}>
            <ImageBackground style={{flex:1}} source={photo.mainPhoto}/>
        </TouchableOpacity>
    )
}
function Photo5({photo,showInfo}) {
    return(
        //上
        <TouchableOpacity
            onPress={()=>showInfo(photo)}
            style={styles.photo5}>
            <ImageBackground style={{flex:1}} source={photo.mainPhoto}/>
        </TouchableOpacity>
    )
}
function Photo6({photo,showInfo}) {
    return(
        //下
        <TouchableOpacity
            onPress={()=>showInfo(photo)}
            style={styles.photo6}>
            <ImageBackground style={{flex:1}} source={photo.mainPhoto}/>
        </TouchableOpacity>
    )
}
function Photo7({photo,showInfo}) {
    return(
        //左
        <TouchableOpacity
            onPress={()=>showInfo(photo)}
            style={styles.photo7}>
            <ImageBackground style={{flex:1}} source={photo.mainPhoto}/>
        </TouchableOpacity>
    )
}
function Photo8({photo,showInfo}) {
    return(
        //右
        <TouchableOpacity
            onPress={()=>showInfo(photo)}
            style={styles.photo8}>
            <ImageBackground style={{flex:1}} source={photo.mainPhoto}/>
        </TouchableOpacity>
    )
}




function getArrayItems(arr, num) {
    //新建一个数组,将传入的数组复制过来,用于运算,而不要直接操作传入的数组;
    var temp_array = new Array();
    for (var index in arr) {
        temp_array.push(arr[index]);
    }
    //取出的数值项,保存在此数组
    var return_array = new Array();
    for (var i = 0; i<num; i++) {
        //判断如果数组还有可以取出的元素,以防下标越界
        if (temp_array.length>0) {
            //在数组中产生一个随机索引
            var arrIndex = Math.floor(Math.random()*temp_array.length);
            //将此随机索引的对应的数组元素值复制出来
            return_array[i] = temp_array[arrIndex];
            //然后删掉此索引的数组元素,这时候temp_array变为新的数组
            temp_array.splice(arrIndex, 1);
        } else {
            //数组中数据项取完后,退出循环,比如数组本来只有10项,但要求取出20项.
            break;
        }
    }
    return return_array;
}

    class Photos extends Component{
        /**
         * 当组件接收到新的属性和状态改变的话，都会触发调用 shouldComponentUpdate(...)
         * （不能够使用setState()来改变属性 多次调用）
         */
        shouldComponentUpdate()
        {
            if(this.props.display=="none"&&this.props.sign=="none"){
                return true
            }else {
                return false
            }
        }
        render() {
            const {arr,photoArr,showInfo}=this.props;
            let Arr = getArrayItems(arr, 8);
            let PhotoArr = getArrayItems(photoArr, 8);
            let return_array = [];
            for (let i in Arr) {
                if (Arr[i] == 1) return_array.push(<Photo1 key={i} photo={photoArr[i]} showInfo={showInfo}/>);
                if (Arr[i] == 2) return_array.push(<Photo2 key={i} photo={photoArr[i]} showInfo={showInfo}/>);
                if (Arr[i] == 3) return_array.push(<Photo3 key={i} photo={photoArr[i]} showInfo={showInfo}/>);
                if (Arr[i] == 4) return_array.push(<Photo4 key={i} photo={photoArr[i]} showInfo={showInfo}/>);
                if (Arr[i] == 5) return_array.push(<Photo5 key={i} photo={photoArr[i]} showInfo={showInfo}/>);
                if (Arr[i] == 6) return_array.push(<Photo6 key={i} photo={photoArr[i]} showInfo={showInfo}/>);
                if (Arr[i] == 7) return_array.push(<Photo7 key={i} photo={photoArr[i]} showInfo={showInfo}/>);
                if (Arr[i] == 8) return_array.push(<Photo8 key={i} photo={photoArr[i]} showInfo={showInfo}/>);
            }
            return (
                    <View style={{flex:1}}>
                        {return_array}

                    </View>
            )
        }
    }


export {Photos,getArrayItems}

const styles = StyleSheet.create({
    photo1:{
        width:Dimensions.get("window").width/5,
        height:Dimensions.get("window").width/5,
        borderRadius:Dimensions.get("window").width/5,
        left:Dimensions.get("window").width/4.6,
        top:Dimensions.get("window").width/4.6,
        marginTop:-Dimensions.get("window").width/10,
        marginLeft:-Dimensions.get("window").width/10,
        position:"absolute",
        overflow:"hidden"
    },
    photo2:{
        width:Dimensions.get("window").width/5,
        height:Dimensions.get("window").width/5,
        borderRadius:Dimensions.get("window").width/5,
        left:Dimensions.get("window").width/4.6,
        bottom:Dimensions.get("window").width/4.6,
        marginBottom:-Dimensions.get("window").width/10,
        marginLeft:-Dimensions.get("window").width/10,
        position:"absolute",
        overflow:"hidden"
    },
    photo3:{
        width:Dimensions.get("window").width/5,
        height:Dimensions.get("window").width/5,
        borderRadius:Dimensions.get("window").width/5,
        right:Dimensions.get("window").width/4.6,
        top:Dimensions.get("window").width/4.6,
        marginTop:-Dimensions.get("window").width/10,
        marginRight:-Dimensions.get("window").width/10,
        position:"absolute",
        overflow:"hidden"
    },
    photo4:{
        width:Dimensions.get("window").width/5,
        height:Dimensions.get("window").width/5,
        borderRadius:Dimensions.get("window").width/5,
        right:Dimensions.get("window").width/4.6,
        bottom:Dimensions.get("window").width/4.6,
        marginBottom:-Dimensions.get("window").width/10,
        marginRight:-Dimensions.get("window").width/10,
        position:"absolute",
        overflow:"hidden"
    },
    photo5:{
        width:Dimensions.get("window").width/5,
        height:Dimensions.get("window").width/5,
        borderRadius:Dimensions.get("window").width/5,
        left:Dimensions.get("window").width/2,
        top:0,
        marginLeft:-Dimensions.get("window").width/10,
        position:"absolute",
        overflow:"hidden"
    },
    photo6:{
        width:Dimensions.get("window").width/5,
        height:Dimensions.get("window").width/5,
        borderRadius:Dimensions.get("window").width/5,
        left:Dimensions.get("window").width/2,
        bottom:0,
        marginLeft:-Dimensions.get("window").width/10,
        position:"absolute",
        overflow:"hidden"
    },
    photo7:{
        width:Dimensions.get("window").width/5,
        height:Dimensions.get("window").width/5,
        borderRadius:Dimensions.get("window").width/5,
        left:0,
        top:Dimensions.get("window").width/2,
        marginTop:-Dimensions.get("window").width/10,
        position:"absolute",
        overflow:"hidden"
    },
    photo8:{
        width:Dimensions.get("window").width/5,
        height:Dimensions.get("window").width/5,
        borderRadius:Dimensions.get("window").width/5,
        right:0,
        top:Dimensions.get("window").width/2,
        marginTop:-Dimensions.get("window").width/10,
        position:"absolute",
        overflow:"hidden"
    }
});








