/*
 * @Description: 
 * @Version: 1.0
 * @Autor: 王强
 * @Date: 2020-05-25 10:59:29
 * @LastEditors: 王强
 * @LastEditTime: 2020-05-25 14:09:53
 */
/**
 * 存储localStorage
 */
export const setStore = (name, content) => {
    if (!name) return;
    if (typeof content !== 'string') {
        content = JSON.stringify(content);
    }
    window.localStorage.setItem(name, content);
}

/**
 * 获取localStorage
 */
export const getStore = name => {
    if (!name) return;
    return window.localStorage.getItem(name);
}

/**
 * 删除localStorage
 */
export const removeStore = name => {
    if (!name) return;
    window.localStorage.removeItem(name);
}

/**
 * 函数防抖
 */
// export const debounce = (fn, delay) => {
//     // 记录上一次的延时器
//     var timer = null;
//     var delay = delay || 200;
//     return function() {
//         var args = arguments;
//         var that = this;
//         // 清除上一次延时器
//         clearTimeout(timer)
//         timer = setTimeout(function() {
//             fn.apply(that, args)
//         }, delay);
//     }
// }

/**
 * 函数节流
 */
// export const throttle = (fn, delay) => {
//     var lastTime;
//     var timer;
//     var delay = delay || 200;
//     return function() {
//         var args = arguments;
//         // 记录当前函数触发的时间
//         var nowTime = Date.now();
//         if (lastTime && nowTime - lastTime < delay) {
//             clearTimeout(timer);
//             timer = setTimeout(function() {
//                 // 记录上一次函数触发的时间
//                 lastTime = nowTime;
//                 // 修正this指向问题
//                 fn.apply(this, args);
//             }, delay);
//         } else {
//             lastTime = nowTime;
//             fn.apply(this, args);
//         }
//     }
// }

/*
 * 日期格式化
 * 使用方式：
 *  let date = new Date()
 *  dateFormat("YYYY-mm-dd HH:MM:SS", date)
 *  2019-06-06 19:45:11
 *  let date1 = new Date()
 *  dateFormat("YYYY/mm/dd HH:MM:SS", date1)
 *  2019/11/08 16:41:24
 */
export const dateFormat = (fmt, date) => {
    let ret;
    let opt = {
        "Y+": date.getFullYear().toString(), // 年
        "m+": (date.getMonth() + 1).toString(), // 月
        "d+": date.getDate().toString(), // 日
        "H+": date.getHours().toString(), // 时
        "M+": date.getMinutes().toString(), // 分
        "S+": date.getSeconds().toString() // 秒
            // 有其他格式化字符需求可以继续添加，必须转化成字符串
    };
    for (let k in opt) {
        ret = new RegExp("(" + k + ")").exec(fmt);
        if (ret) {
            fmt = fmt.replace(ret[1], (ret[1].length === 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
        };
    };
    return fmt;
}

/*
 * 时间戳转化为日期格式
 * 参数一：时间戳
 * 参数二：分隔符 如'/','-'
 * timeStampTurnTime(new Date().getTime()/1000)
 * 2019-11-08 16:52:42
 * timeStampTurnTime(new Date().getTime()/1000,'/')
 * 2019/11/08 16:52:42
 */
export const timeStampTurnTime = (timeStamp, fmt = '-') => {
    if (timeStamp > 0) {
        var date = new Date();
        date.setTime(timeStamp * 1000);
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        m = m < 10 ? ('0' + m) : m;
        var d = date.getDate();
        d = d < 10 ? ('0' + d) : d;
        var h = date.getHours();
        h = h < 10 ? ('0' + h) : h;
        var minute = date.getMinutes();
        var second = date.getSeconds();
        minute = minute < 10 ? ('0' + minute) : minute;
        second = second < 10 ? ('0' + second) : second;
        return y + fmt + m + fmt + d + ' ' + h + ':' + minute + ':' + second;
    }
}