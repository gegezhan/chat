/**
 * desc：11
 * author：yanshu
 * date： 2018/4/3
 */
import React, { Component,PureComponent} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native';
import {StackNavigator, TabNavigator, TabBarBottom,} from 'react-navigation';
import Login from "./components/SignIn"


import Message from './pages/messgae/message'
import World from './pages/world/world'
import Groups from './pages/groups/groups'
import Find from './pages/find/find'


class TabBarItem extends PureComponent {
    render() {
        return (
            <Image
                source={this.props.normalImage}
                style={{tintColor: this.props.tintColor, width: 20, height: 20}}
            />
        );
    }
}
const color = {
    theme: '#e82190',
    border: '#e0e0e0',
    background: '#f3f3f3'
};
const lightContentScenes = ['Home', 'Coupons', 'Order', 'Mine', 'Pay']

class RootScene extends PureComponent {
    constructor() {
        super()
    }

    render() {
        return (
            <Navigator/>
        );
    }
}
const HomeIcon = require('./images/tabbar/index1.png');
const CouponsIcon = require('./images/tabbar/index2.png');
const OrderIcon = require('./images/tabbar/index3.png');
const MineIcon = require('./images/tabbar/index4.png');

const Tab = TabNavigator(
    {
        Message: {
            screen: Message,
            navigationOptions: ({navigation}) => ({
                tabBarLabel: '消息',
                tabBarIcon: ({focused, tintColor}) => (
                    <TabBarItem
                        tintColor={tintColor}
                        normalImage={HomeIcon}
                        selectedImage={HomeIcon}
                    />
                )
            }),
        },
        Groups: {
            screen: Groups,
            navigationOptions: ({navigation}) => ({
                tabBarLabel: '列表',
                tabBarIcon: ({focused, tintColor}) => (
                    <TabBarItem
                        tintColor={tintColor}
                        normalImage={CouponsIcon}
                        selectedImage={CouponsIcon}
                    />
                )
            }),
        },
        Find: {
            screen: Find,
            navigationOptions: ({navigation}) => ({
                tabBarLabel: '更多',
                tabBarIcon: ({focused, tintColor}) => (
                    <TabBarItem
                        tintColor={tintColor}
                        normalImage={OrderIcon}
                        selectedImage={OrderIcon}
                    />
                )
            }),
        },
        World: {
            screen: World,
            navigationOptions: ({navigation}) => ({
                tabBarLabel: '世界',
                tabBarIcon: ({focused, tintColor}) => (
                    <TabBarItem
                        tintColor={tintColor}
                        normalImage={MineIcon}
                        selectedImage={MineIcon}
                    />
                )
            }),
        },
    },
    {
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        swipeEnabled: false,
        animationEnabled: false,
        backBehavior: 'none',
        lazy: true,
        tabBarOptions: {
            activeTintColor: color.theme,
            inactiveTintColor: '#979797',
            showIcon: true,
            upperCaseLabel: false,
            style: {backgroundColor: '#ffffff'},
        },
    }
);



const Navigator = StackNavigator(
    {
        Login: {screen: Login},
        Tab: {screen: Tab},
    },
    {
        headerMode: 'screen',
    }
)
export default Navigator;