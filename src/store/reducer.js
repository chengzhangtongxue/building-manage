const defaultState = {
    currentFirstNav: 'myBuilding',
    // 办公桌面
    officeDesktop: [
        {
            key: 'admin',
            title: '办公桌面1',
            children: [
                {
                    key: 'building1',
                    title: '桌面1',
                    path: '/admin/building-list'
                },
                {
                    key: 'building2',
                    title: '桌面2',
                    path: '/admin/building-list-window'
                }
            ]
        }
    ],
    // 我的楼宇
    myBuilding: [
        {
            key: 'admin',
            title: '楼宇',
            children: [
                {
                    key: 'building-list',
                    title: '楼宇信息',
                    path: '/admin/building-list'
                },
                {
                    key: 'building-list-window',
                    title: '楼宇列表与窗口',
                    path: '/admin/building-list-window'
                }
            ]
        },
        {
            key: 'officeDesktop2',
            title: '招租',
            children: [
                {
                    key: 'let1',
                    title: '来访客户信息',
                    path: '/admin/visiting-customer-info'
                },
                {
                    key: 'let2',
                    title: '来访客户记录',
                    path: '/admin/customer-record'
                },
            ]
        },
        {
            key: 'officeDesktop3',
            title: '合同',
            children: [
                {
                    key: 'contract1',
                    title: '合同列表',
                    path: '/admin/contract-list-money'
                },
                {
                    key: 'contract2',
                    title: '合同租期',
                    path: '/admin/contract-lease'
                },
                {
                    key: 'contract3',
                    title: '合同联系人',
                    path: '/admin/contract-contacts'
                },
                {
                    key: 'contract4',
                    title: '合同账单',
                    path: '/admin/contract-bill'
                },
            ]
        },
        {
            key: 'officeDesktop4',
            title: '收付款',
            children: [
                {
                    key: 'receive-payment1',
                    title: '收付款计划',
                    path: '/admin/receive-payment-plan'
                },
                {
                    key: 'receive-payment2',
                    title: '合同租期',
                    path: '/admin/contract-record'
                },
                {
                    key: 'receive-payment3',
                    title: '收付款记录',
                    path: '/admin/contract-total'
                }
            ]
        }
    ],
    // 数据报表
    dataReport: [
        {
            key: 'admin',
            title: '收据报表',
            children: [
                {
                    key: 'receive-payment1',
                    title: '收据报表1',
                    path: '/admin/receive-payment-plan'
                },
                {
                    key: 'receive-payment2',
                    title: '收据报表2',
                    path: '/admin/contract-record'
                },
                {
                    key: 'receive-payment3',
                    title: '收据报表3',
                    path: '/admin/contract-total'
                }
            ]
        }
    ],
    // 系统设置
    systemSet: [
        {
            key: 'admin',
            title: '系统设置',
            children: [
                {
                    key: 'receive-payment1',
                    title: '系统设置1',
                    path: '/admin/receive-payment-plan'
                },
                {
                    key: 'receive-payment2',
                    title: '系统设置2',
                    path: '/admin/contract-record'
                },
                {
                    key: 'receive-payment3',
                    title: '系统设置3',
                    path: '/admin/contract-total'
                }
            ]
        }
    ]
    //
    
}

export default function(state =  defaultState, action) {
    if(action.type === 'change-second-nav-content') {
        let newState = JSON.parse(JSON.stringify(state));
        newState.currentFirstNav = action.flag;
        return newState;
    }

    return state;
}