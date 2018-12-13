import { ACTION_CLOSE_DETAIL } from '../action.js';

const defaultState = {
    // 控制 列表页面 中详情页面是否 展现
    mSlideVisible: false,
    // 控制 详情页面 关闭开启动画 (抽屉)
    drawerVisible: false
}

const reducer = (state = defaultState, action) => {
    const newState = JSON.parse(JSON.stringify(state));
    if(action.type === 'update-detail-show') {
        newState.mSlideVisible = action.visible;
    } else if(action.type === 'update-animation-drawer') {
        newState.drawerVisible = action.visible;
    }
    return newState;
}
export default reducer;