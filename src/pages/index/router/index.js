import Vue from 'vue'
import Router from 'vue-router'

//import HelloWorld from '@/components/HelloWorld'

import Nav from '../../../components/Nav'

import LoginTable from '../../../components/LoginTable'
import Addressmanagement from '../../../components/PersonAddressmsg'
import Bindphone from '../../../components/PersonBIndPhone'
import Myaccount from '../../../components/PersonAccount'
import Myorder from '../../../components/PersonOrderEmpty'
import Orderevaluation from '../../../components/Personevaluation'
import Personaldata from '../../../components/PersData'
import Shopcardel from '../../../components/Shopcardel'
import Shoppingcartempty from '../../../components/Shoppingcart_empty'
import ShopCarDetel from '../../../components/ShopCarDetel'
import ShopCarrechargeok from '../../../components/ShopCarrechargeok'
import Mycollection from '../../../components/PersonCollection'
import Modifypassword from '../../../components/PersonBind'
import Mymessage from '../../../components/PersonMessage'
import Opinionfeedback from '../../../components/Personfeedback'
import Mywallet from '../../../components/PersonWallet'
import AboutFride from '../../../components/AboutFride'
import Delshapinfenlei from '../../../components/Delshapinfenlei'
import Delmerchant from '../../../components/Del详情'
import Integralorder from '../../../components/PersonOrderDel'
import My_points from '../../../components/PersonPoints'
import Prepaidcardexchange from '../../../components/Prepaidcardexchange'
import Jifen from '@/components/Jfendel'
import Libaiwu from '../../../components/LibaiwuDel'
import Shouye from '../../../components/shouye'
import Index from '@/modules/Index'
import Logoin from '@/modules/logoin'
import Nosel from '@/modules/404'
import PersonCenter from '@/modules/PersonCenter'
import Tongcheng from '@/components/Tongcheng'
import shopcar from '@/modules/shopcar'
import logoreg from '@/modules/logoreg'
import logosel from '@/modules/logosel'
Vue.use(Router)

export default new Router({
	mode: "history",
	routes: [{
		path: '/',

		component: Index,
		meta: {
			breadcrumbName: "首页"
		},
		children: [{
			path: '/',
			name: 'Shouye',
			component: Shouye,
			meta: {
				breadcrumbName: "首页"
			},
		}, {
			path: '/tongcheng',
			name: 'Tongcheng',
			component: Tongcheng,
			meta: {
				breadcrumbName: "同城"
			},
		}, {
			path: '/Delshapinfenlei',
			name: 'Delshapinfenlei',
			component: Delshapinfenlei,
		},{
			path: '/zzz',
			name: 'libaiwu',
			component: Libaiwu,
			meta: {
				breadcrumbName: "礼拜五"
			},
		}, {
			path: '/jifen',
			name: 'jifen',
			component: Jifen,
			meta: {
				breadcrumbName: "积分商城"
			},
		}, {
			path: '/AboutFride',
			name: 'AboutFride',
			component: AboutFride,
		}, {
			path: '/Delmerchant',
			name: 'Delmerchant',
			component: Delmerchant,
		}]
	}, {
		path: '/logoreg',
		name: 'logoreg',
		component: logoreg,
	}, {
		path: '/logosel',
		name: 'logosel',
		component: logosel,
	},{
		path: '/shopcar',
		component: shopcar,
		children: [{
			path: '/',
			name: "detl",
			component: Shopcardel
		}, {
			path: '/shopcar/ShopCarDetel',
			name: "ShopCarDetel",
			component: ShopCarDetel
		}, {
			path: '/shopcar/ShopCarrechargeok',
			name: "ShopCarrechargeok",
			component: ShopCarrechargeok
		}]
	}, {
		path: '/logoin',

		component: Logoin,
		children: [{
			path: '/',
			name: 'logoinMain',
			component: LoginTable
		}]
	}, {
		path: '*',
		name: '404',
		component: Nosel,
	}, {
		path: '/nav',
		name: 'nav',
		component: Nav,
	}, {
		path: '/person',

		component: PersonCenter,
		children: [{
				path: '/',
				name: 'myaccount', //我的订单
				component: Myaccount,
			}, {
				path: '/person/myorder', //我的账户
				name: 'Myorder',
				component: Myorder,
			},
			{
				path: '/person/Orderevaluation', //订单评价
				name: 'Order-evaluation',
				component: Orderevaluation,
			}, {
				path: '/person/Personaldata', //个人资料
				name: 'personal_data',
				component: Personaldata,
			}, {
				path: '/person/Addressmanagement', //地址管理
				name: 'Addressmanagement_empty',
				component: Addressmanagement,
			}, {
				path: '/person/Bindphone', //绑定手机
				name: 'Bind-phone',
				component: Bindphone,
			},
			{
				path: '/person/Mycollection', //我的收藏Modifypassword
				name: 'Mycollection',
				component: Mycollection,
			}, {
				path: '/person/Modifypassword', //Modifypassword修改密码  Mymessage
				name: 'Modifypassword',
				component: Modifypassword,
			}, {
				path: '/person/Mymessage', // Mymessage 我的消息 
				name: 'Mymessage',
				component: Mymessage,
			}, {
				path: '/person/Opinionfeedback', //Opinionfeedback 意见反馈Mywallet
				name: 'Opinionfeedback',
				component: Opinionfeedback,
			}, {
				path: '/person/Mywallet', //Mywallet 我的钱包
				name: 'Mywallet',
				component: Mywallet,
			}, {
				path: '/person/Integralorder', //Mywallet 我的钱包Integralorder
				name: 'Integralorder',
				component: Integralorder,
			}, {
				path: '/person/My_points', //My_points 我的积分
				name: 'My_points',
				component: My_points,
			}, {
				path: '/person/Prepaidcardexchange', //Prepaidcardexchange 充值卡兑换
				name: 'Prepaidcardexchange',
				component: Prepaidcardexchange,
			},

		]
	}]
})