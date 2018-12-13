/**
 * 设置cookie
 * @param {*} name 
 * @param {*} value 
 * @param {*} hour  默认一个小时
 */
export function setCookie(name, value, hour = 1) {
    const d = new Date();
    d.setTime(d.getTime() + (hour * 1 * 60 * 60 * 1000));
    const expires = 'expires=' + d.toUTCString();
    document.cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value) + '; ' + expires;
}

/**
 * 获取cookie
 * @param {*} name 
 */
export function getCookie(name) {
    const cookieName = encodeURIComponent(name),
        cookieStart = document.cookie.indexOf(cookieName);
    let cookieValue = '';
    if(cookieStart > -1) {
        let cookieEnd = document.cookie.indexOf(';', cookieStart);
        if(-1 === cookieEnd) {
            cookieEnd = document.cookie.length;
        }
        cookieValue = decodeURIComponent(document.cookie.substring(cookieStart + cookieName.length + 1, cookieEnd));
    }
    return cookieValue;
}