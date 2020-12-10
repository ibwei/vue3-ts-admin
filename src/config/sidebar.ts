import {
  UserOutlined,
  DashboardOutlined,
  BorderlessTableOutlined,
  WifiOutlined,
  ClusterOutlined
} from '@ant-design/icons-vue'
const Sidebar = [
  {
    key: '0',
    title: '系统管理',
    icon: ClusterOutlined,
    routePath: '/system',
    children: [
      {
        key: '0-1',
        title: '用户管理',
        icon: '',
        routePath: '/system/user'
      },
      {
        key: '0-2',
        title: '角色管理',
        routePath: '/system/role'
      },
      {
        key: '0-3',
        title: '菜单管理',
        routePath: '/system/role'
      },
      {
        key: '0-4',
        title: '部门管理',
        routePath: '/system/department'
      },
      {
        key: '0-5',
        title: '客户端管理',
        routePath: '/system/client'
      }
    ]
  },
  {
    key: '1',
    title: '系统监控',
    icon: DashboardOutlined,
    routePath: '/borrow',
    children: [
      {
        key: '1-1',
        title: '监控面板',
        routePath: '/borrow/release'
      },
      {
        key: '1-2',
        title: '系统日志',
        routePath: '/borrow/current'
      },
      {
        key: '1-3',
        title: '登录日志',
        routePath: '/borrow/history'
      }
    ]
  },
  {
    key: '2',
    title: '网关管理',
    icon: WifiOutlined,
    routePath: '/lend',
    children: [
      {
        key: '2-1',
        title: '网关用户',
        routePath: '/lend/current'
      },
      {
        key: '2-2',
        title: '网关日志',
        routePath: '/lend/history'
      },
      {
        key: '2-3',
        title: '限流规则',
        routePath: '/lend/history'
      },
      {
        key: '2-4',
        title: '限流日志',
        routePath: '/lend/history'
      },
      {
        key: '2-5',
        title: ' 黑名单管理',
        routePath: '/lend/history'
      },
      {
        key: '2-6',
        title: '黑名单日志',
        routePath: '/lend/history'
      }
    ]
  },
  {
    key: '3',
    title: '其他模块',
    icon: BorderlessTableOutlined,
    routePath: '/assets'
  },
  {
    key: '4',
    title: '个人中心',
    icon: UserOutlined,
    routePath: '/user',
    children: [
      {
        key: '4-0',
        title: '基本信息',
        routePath: '/user/base'
      },
      {
        key: '4-1',
        title: ' 安全设置',
        routePath: '/user/security'
      },
      {
        key: '4-2',
        title: '支付设置',
        routePath: '/user/pay'
      }
    ]
  }
]
type SidebarType = typeof Sidebar
export { SidebarType }
export default Sidebar
