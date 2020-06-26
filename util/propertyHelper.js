/**
 * 从对象obj中只选择自己所需的属性（props）
 * @param {*} obj 
 * @param  {...any} props 
 */
exports.pick = function (obj, ...props) {
    if (!obj || obj !== 'object') {
        return obj
    }
    const newObj = {}
    for (const key in obj) {
        if (props.includes(key)) {
            newObj[key] = obj[key]
        }
    }
    return newObj
}