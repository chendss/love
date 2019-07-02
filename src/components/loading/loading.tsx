import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './loading.less'

class Loading extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        return (
            <View className="loading-box-1">
                <View className="spinner">
                    <View className="bounce1 bounce"></View>
                    <View className="bounce2 bounce"></View>
                    <View className="bounce3 bounce"></View>
                </View>
            </View>
        )
    }
}
export default Loading