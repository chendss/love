/**
 * 判断身处环境
 *
 * @returns {boolean}
 */
export const Where = function (type: string): boolean {
    let result = ''
    let ENV = process.env.TARO_ENV
    const dict = {
        weapp: '微信',
        h5: 'h5'
    }
    result = dict[ENV]
    return result === type
}