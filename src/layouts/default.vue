<template>
	<a-layout id='app'>
		<a-layout-header class="header">
			<div class="logo" />

			<a-menu class='menus' v-model:selectedKeys="selectedKeys1" theme="light" mode="horizontal"
							:style="{ lineHeight: '55px' }">
				<a-menu-item :key="menu.url" v-for='menu in menus'>
					<component :is='menu.icon'></component> {{ menu.text }}
				</a-menu-item>
			</a-menu>
			<div style='background:#fff;float:right;padding-right: 20px;'>
				<a-avatar :size="40">
					<template #icon>
						<AntDesignOutlined />
					</template>
				</a-avatar>
				<span> 管理员</span>
			</div>
		</a-layout-header>
		<a-layout>
			<a-layout-sider width="200" style="background: #fff;overflow-y: auto;overflow-x: hidden;">
				<a-menu v-model:selectedKeys="selectedKeys2" v-model:openKeys="openKeys" mode="inline"
								:style="{ height: '100%', borderRight: 0 }" theme='dark' @click='selectMenu'>
					<template v-for='menu in leftMenus'>
						<a-sub-menu :key='menu.url' v-if='menu.children && menu.children.length'>
							<template #title>
								<AppstoreOutlined />
								<span>{{ menu.text }}</span>
							</template>
							<a-menu-item :key='child.url' v-for='child in menu.children'>{{ child.text }}</a-menu-item>
						</a-sub-menu>
						<template v-else>
							<a-menu-item :key='menu.url'>
								<AppstoreOutlined />
								<span>{{ menu.text }}</span>
							</a-menu-item>
						</template>
					</template>
				</a-menu>
			</a-layout-sider>
			<a-layout style="padding: 0 24px 24px">
				<a-breadcrumb style="margin:8px 0;">
					<a-breadcrumb-item>Home</a-breadcrumb-item>
					<a-breadcrumb-item>List</a-breadcrumb-item>
					<a-breadcrumb-item>App</a-breadcrumb-item>
				</a-breadcrumb>
				<a-layout-content :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }">
					<router-view></router-view>
				</a-layout-content>
			</a-layout>
		</a-layout>
	</a-layout>
</template>
<script lang="ts" setup>
import { WechatOutlined, DingtalkOutlined, AntDesignOutlined, AppstoreOutlined } from '@ant-design/icons-vue';

type MenuType = {
	text: string
	url: string,
	icon?: any,
	children?: MenuType[]
}
const menus = ref<MenuType[]>([
	{
		text: '钉钉平台', url: '/dingtalk', icon: DingtalkOutlined, children: [
			{ text: '系统配置', url: '/config' },
			{ text: '通讯录', url: '/addressbook' },
			{
				text: '考勤系统', url: '/attendance', children: [
					{ text: '考勤组管理', url: '/simplegroups' },
					{ text: '班次管理', url: '/shift' },
					{ text: '排版管理', url: '/schedule/listbyday' },
					{ text: '数据统计', url: '/data' }
				]
			}
		]
	},
	{
		text: '微信平台', url: '/wechat', icon: WechatOutlined, children: [
			{ text: '粉丝管理', url: '/fans' },
			{ text: '素材管理', url: '/resources' },
			{ text: '消息管理', url: '/news' }
		]
	}
])

const selectedKeys1 = ref<string[]>(['/dingtalk'])
const selectedKeys2 = ref<string[]>([])
const openKeys = ref<string[]>([])

const leftMenus = computed(() => {
	return menus.value.filter(d => d.url === selectedKeys1.value[0])[0].children
})

const router = useRouter()

function selectMenu(menu: any) {
	router.push(selectedKeys1.value[0] + menu.keyPath.join(''))
}
</script>
<style>
.ant-layout-header.header {
	display: flex;
	align-items: center;
	padding: 0;
	height: 55px;
}

.ant-layout-header.header .menus {
	flex: 1;
}

#app .logo {
	float: left;
	width: 120px;
	height: 31px;
	margin: 16px 30px 16px 50px;
	background: rgba(255, 255, 255, 0.3);
}

.site-layout-background {
	background: #fff;
}
</style>
