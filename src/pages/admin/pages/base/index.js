import { Component } from 'react';
import { mAxios } from '@/util';

class Base extends Component {

    url = {
        query: '',
        add: '',
        update: '',
        delete: '',
        detail: ''
    }

    urlData = {
        query: '',
        add: '',
        update: '',
        delete: '',
        detail: ''
    }

    query = () => {
        return new Promise((reslove, rejects) => {
            mAxios.ajax({
                url: this.url.query,
                data: this.urlData.query,
            }).then(data => {
                this.initData(data);
                // reslove(data);
            });
        });
    }

    add = () => {
        mAxios.ajax({
            url: this.addUrl,
            data: this.addData,

        }).then(data => {

        });
    }

    delete = () => {
        mAxios.ajax({
            url: this.deleteUrl,
            data: this.deleteData
        }).then(data => {

        })
    }

    cancle = () => {
        this.props.history.go(-1);
    }
}

export default Base;