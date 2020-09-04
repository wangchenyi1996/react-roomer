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
 * 函数防抖--不立即执行
 */
export const debounce = (fn, delay) => {
    // 记录上一次的延时器
    let timer = null;
    let delay1 = delay || 200;
    return function () {
        var args = arguments;
        var that = this;
        // 清除上一次延时器
        clearTimeout(timer)
        timer = setTimeout(function () {
            fn.apply(that, args)
        }, delay1);
    }
}

/**
 * 函数防抖--立即执行
 */
export const debounce2 = (func, wait, immediate) => {
    let timer;
    return function () {
        let context = this;
        let args = arguments;
        if (timer) clearTimeout(timer);
        if (immediate) {
            var callNow = !timer;
            timer = setTimeout(() => {
                timer = null;
            }, wait)
            if (callNow) func.apply(context, args)
        } else {
            timer = setTimeout(function () {
                func.apply(context, args)
            }, wait);
        }
    }
}

/**
 * 防抖函数，返回函数连续调用时，空闲时间必须大于或等于 wait，func 才会执行
 *
 * @param  {function} func        回调函数
 * @param  {number}   wait        表示时间窗口的间隔
 * @param  {boolean}  immediate   设置为ture时，是否立即调用函数
 * @return {function}             返回客户调用函数
 */
export function deBounce(func, wait = 50, immediate = true) {
    let timer, context, args

    // 延迟执行函数
    const later = () => setTimeout(() => {
        // 延迟函数执行完毕，清空缓存的定时器序号
        timer = null
        // 延迟执行的情况下，函数会在延迟函数中执行
        // 使用到之前缓存的参数和上下文
        if (!immediate) {
            func.apply(context, args)
            context = args = null
        }
    }, wait)

    // 这里返回的函数是每次实际调用的函数
    return function (...params) {
        // 如果没有创建延迟执行函数（later），就创建一个
        if (!timer) {
            timer = later()
            // 如果是立即执行，调用函数
            // 否则缓存参数和调用上下文
            if (immediate) {
                func.apply(this, params)
            } else {
                context = this
                args = params
            }
            // 如果已有延迟执行函数（later），调用的时候清除原来的并重新设定一个
            // 这样做延迟函数会重新计时
        } else {
            clearTimeout(timer)
            timer = later()
        }
    }
}

/**
 * 函数节流
 */
export const throttle = (fn, delay) => {
    var lastTime;
    var timer;
    let delay1 = delay || 200;
    return function () {
        var args = arguments;
        // 记录当前函数触发的时间
        var nowTime = Date.now();
        if (lastTime && nowTime - lastTime < delay1) {
            clearTimeout(timer);
            timer = setTimeout(() => {
                // 记录上一次函数触发的时间
                lastTime = nowTime;
                // 修正this指向问题
                fn.apply(this, args);
            }, delay1);
        } else {
            lastTime = nowTime;
            fn.apply(this, args);
        }
    }
}


/*
 * 日期格式化
 * 使用方式：
 *  let date = new Date()
 *  dateFormat("YYYY-mm-dd HH:MM:SS", date)
 *  2019-06-06 19:45:11
 *  let date1 = new Date()
 *  dateFormat("YYYY/mm/dd HH:MM", date1)
 *  2019/11/08 16:41
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

/**
 * @description: 深拷贝
 * @param {type} 
 * @return: 
 * @author: 王强
 * @LastEditTime: 
 */

export function deepClone(obj) {
    let copy = obj instanceof Array ? [] : {}
    for (let i in obj) {
      if (obj.hasOwnProperty(i)) {
        copy[i] = typeof obj[i] === 'object' ? deepClone(obj[i]) : obj[i]
      }
    }
    return copy
  }