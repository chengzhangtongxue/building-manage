import React, { Component } from 'react';
import './index.less';
import { Row, Col, Button, Icon, Tabs, Collapse, Table, List, Avatar, Modal } from 'antd';
import SDetailMoreHandle from '../../components/s-detail-more-handle/s-detail-more-handle';
import BtnDownPopLi from '../btn-down-pop-li/btn-down-pop-li';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

class DetailHeaderBtns extends Component {
    // 为刷新按钮添加动画效果
    state = {
        refreshClassName: 'b-refresh'
    }

    // static contextTypes = PropTypes.object.isRequired;
    /**
     * 刷新按钮事件
     */
    refresh = () => {
        this.setState({
            refreshClassName: 'active b-refresh'
        });
        setTimeout(() => {
            this.setState({
                refreshClassName: 'b-refresh'
            });
        }, 1000);
        this.props.option.refresh();
    }
    render() {
        console.log(this.props.option,'===');
        return (
            <div className="component-ui-detail-header">
                <div className="con">
                    <div className="header-title">
                        <div className="img">
                            <Icon type="file-text" theme="twoTone" />
                        </div>
                        <div className="title">{this.props.option.title}</div>
                    </div>
                    <div className="btns">
                        {
                            this.props.option.btns && this.props.option.btns.map((item,key) => {
                                if(item.title === '更多') {
                                    return <SDetailMoreHandle key={key} list={ 
                                                <BtnDownPopLi>
                                                    {
                                                        this.props.option.moreBtn.map((innerItem, innerKey) => {
                                                            return <div key={innerKey} onClick={ innerItem.handle }>{innerItem.title}</div>
                                                        })
                                                    }
                                                </BtnDownPopLi>
                                            }/>
                                } else {
                                    return <Button key={key} icon={item.icon} onClick={item.handle}>{item.title}</Button>
                                }
                            })
                        }

                        <Icon className={ this.state.refreshClassName } onClick={ this.refresh } type="sync" ></Icon>
                        <Icon className="b-close" onClick={this.props.close} type="close"/>
                    </div>
                </div>

                <Row style={{marginTop: 10}}>
                        <Col className="t-center" span={4}>
                            <div className="item-name">租赁面积</div>
                            <div className="num">2018m²</div>
                        </Col>
                        <Col className="t-center" span={4}>
                            <div className="item-name">出租率</div>
                            <div className="num">90%</div>
                        </Col>
                        <Col className="t-center" span={4}>
                            <div className="item-name">成交均价</div>
                            <div className="num">3.3元/天/m²</div>
                        </Col>
                        <Col className="t-center" span={4}>
                            <div className="item-name">新增日期</div>
                            <div className="num">2018-02-23</div>
                        </Col>
                        <Col className="t-center" span={4}>
                            <div className="item-name">负责人</div>
                            <div className="num">张建</div>
                        </Col>
                    </Row>
                {
                    this.props.children
                }
            </div>
        )
    }
}

// export default DetailHeaderBtns;

// const mapPropsToState = (state) => {
//     return {

//     }
// }
const mapDispatchToState = (dispatch) => {
    return {
        close() {
            const action = {
                type: 'update-animation-drawer',
                visible: false
            }

            dispatch(action);
        }
    }
}
export default connect(null, mapDispatchToState)(DetailHeaderBtns);