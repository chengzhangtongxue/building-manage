import { Component } from 'react';
import { mAxios } from '../../../../util';

class Base extends Component {
    queryUrl = ''
    addUrl = ''
    updateUrl = ''
    deleteUrl = ''
    detailUrl = ''
    un_lockUrl = ''

    queryUrlData = {
        pageSize: 1,
        pageIndex: 20
    };
    addUrlData = ''
    updateUrlData = ''
    deleteUrlData = ''
    detailUrlData = ''
    un_lockUrlData = ''

    constructor() {
        super();
        // this.add = this.add.bind(this);
    }
    state = {
        // 很多页面用到的 id 值 比如 floorId , 等
        id: '',
        // 正在加载
        loading: false,
        // 详情弹窗出现
        mSlideVisible: false,
        /**
         * 选中表格行后的更多操作
         */
        listHeaderPop: {
            total: 0,
            flag: false,
        },
        detailHeaderCon: {
            title: '',
            list: []
        },
        // 分页
        pagination: {},
        // 确认框
        modal: {
            show: false,
            close: () => {
                let { modal } = this.state;
                modal.show = false;
                this.setState({
                    modal
                });
            }
        }
    }

    /** 选择的数据集合 */
    selectedData = []

    /**
     * 列表头部操作
     */
    listHeaderOption = {
        btns: [
            {
                title: '筛选',
                handle: () => {
                    console.log('筛选', this)
                }
            },
            {
                type: 'btn-add',
                btnType: 'primary',
                title: '新增楼宇',
                handle: () => {
                    console.log('btn-add', this);
                }
            },
            {
                type: 'more',
            }
        ],
        checkHandle: {
            handle: () => {
                let { checkedHandle } = this.state;
                checkedHandle.flag = false;
                this.setState({
                    checkedHandle
                });
            }
        }
    }

    /**
     * 基类的 url 地址
     * 
     */
    url = {
        query: '',
        add: '',
        update: '',
        delete: '',
        detail: ''
    }

    /**
     * 基类的url 数据
     */
    urlData = {
        query: '',
        add: '',
        update: '',
        delete: '',
        detail: ''
    }

    /**
     * 基类的查询
     */
    query = () => {
        return new Promise((reslove, rejects) => {
            mAxios.ajax({
                // url: this.url.query,
                // data: this.urlData.query,
                url: this.queryUrl,
                data: this.queryUrlData
            }).then(data => {
                // this.initData(data);
                reslove(data);
            });
        });
    }

    /**
     * 基类的新增
     */
    add = () => {
        this.showLoading();
        return new Promise((reslove, rejects) => {
            mAxios.ajax({
                url: this.addUrl,
                data: this.addUrlData,
            }).then(data => {
                reslove(data);
            });
        });
    }

    /**
     * 删除
     */
    delete = () => {
        return new Promise((reslove, rejects) => {
            mAxios.ajax({
                url: this.deleteUrl,
                data: this.deleteUrlData
            }).then(data => {
                reslove(data);
            })
        });
    }

    /**
     * 详情
     */
    detail = () => {
        return new Promise((reslove, rejects) => {
            mAxios.ajax({
                url: this.detailUrl,
                data: this.detailUrlData
            }).then(reslove);
        })
    }

    /**
     * 锁定或 解锁
     */
    un_lock = () => {
        return new Promise((reslove, rejects) => {
            mAxios.ajax({
                url: this.un_lockUrl,
                data: this.un_lockUrlData
            }).then(data => {
                reslove(data);
            });
        });
    }

    /**
     * 返回-取消
     */
    cancle = () => {
        // this.props.history.go(-1);
        window.history.go(-1);
    }

    /**
     * 显示loading加载
     */
    showLoading = () => {
        this.setState({
            loading: true
        });
        setTimeout(() => {
            (this.state & this.state.loading) && this.setState({
                loading: false
            });
        }, 3000);
    }
    /**
     * 隐藏loading 加载
     */
    hideLoading = () => {
        this.setState({
            loading: false
        });
    }

    /**
     *  关闭详情侧滑
     */
    closeMSlideVisible = () => {
       this.setState({
            mSlideVisible: false
       }); 
    }
}

export default Base;