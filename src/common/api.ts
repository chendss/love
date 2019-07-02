import { Where } from './common'
import './interface'


// Get({
//     url: 'https://www.baidu.com',
//     success: ret => {
//         console.log(ret.data);
//     }
// })
// Post({
//     success: ret => {
//         wx.vrequest({
//             url: 'https://wx5bbe79dd056cb238.mssnn.cn/v2/client/init',
//             data: 'code=' + ret.code,
//             dataType: 'json',
//             method: 'POST',
//             header: {
//                 'Content-Type': 'application/x-www-form-urlencoded'
//             },
//             success: res => {
//                 console.log('[post.res]', res);
//             }
//         })
//     }
// })

class Api {
    get: Function
    post: Function
    wxGet: Function
    wxPost: Function
    constructor() {
        const wx: IWx = Api.wx()
        this.wxGet = wx.vrequest
        this.wxPost = wx.login
        this.post = function () { }
        this.get = function () { }
    }
    static wx(): IWx {
        let result: IWx = {
            login: function () { },
            vrequest: function () { }
        }
        if (Where('微信')) {
            result = require('./v-request.js').default as IWx
        }
        return result
    }
}
const api = new Api()
export const Get = Where('微信') ? api.wxGet : api.get
export const Post = Where('微信') ? api.wxPost : api.post
