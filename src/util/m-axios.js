
/**
 * 
 */
import axios from 'axios';
import { Modal } from 'antd';
import { getCookie } from './cookie.js';

let mAxios = {
    jsonp() {

    },
    ajax(option) {
        !option.type && (option.type = 'get');
        option.data = option.data || {};
        console.log(option.data);
        // option.data.token = getCookie('token');
        return new Promise((reslove, reject) => {
            axios({
                url: option.url,
                method: option.type,
                // baseURL: 'http://w22h582907.iask.in:26347',
                baseURL: 'http://118.31.3.85:8080',
                // withCredentials: true,
                // headers: {'X-Requested-With': 'XMLHttpRequest'},
                params: option.data,
                // timeout: 3000
            }).then(function(res) {
                const data = res.data;
                if('000' === data.resultCode) {
                    reslove(data);
                } else if('001' === data.resultCode) {
                    Modal.error({
                        title: '错误信息',
                        content: data.resultDesc,
                        okText: '确认',
                        cancelText: '取消',
                    });
                    reject(data);
                } else {
                    Modal.error({
                        title: '错误信息',
                        content: data.resultDesc,
                        okText: '确认',
                        cancelText: '取消',
                    });
                }
            }).catch(function(e) {
                console.error(e);
            });
        });
    }
}

export default mAxios;
