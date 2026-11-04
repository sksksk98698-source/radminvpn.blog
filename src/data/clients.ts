export interface ProxyClient {
  id: string;
  name: string;
  platforms: ('windows' | 'macos' | 'android' | 'ios' | 'linux')[];
  kernel: string;
  features: string[];
  recommendedFor: string;
  isPopular?: boolean;
  downloadUrl: string;
  officialSource: string;
  guideUrl?: string;
}

export const proxyClients: ProxyClient[] = [
  {
    id: 'clash-verge-rev',
    name: 'Clash Verge Rev',
    platforms: ['windows', 'macos', 'linux'],
    kernel: 'Mihomo (Clash.Meta)',
    features: ['内置 Mihomo 内核', '智能规则分流', '系统代理与 TUN 模式', '支持中文与深色模式'],
    recommendedFor: 'Windows / Mac 电脑端首选，适合新手与进阶全场景用户',
    isPopular: true,
    downloadUrl: 'https://github.com/clash-verge-rev/clash-verge-rev/releases',
    officialSource: 'GitHub Releases'
  },
  {
    id: 'shadowrocket',
    name: 'Shadowrocket（小火箭）',
    platforms: ['ios'],
    kernel: '自研高性能核心',
    features: ['支持 SS / VLESS / Trojan / Hysteria2', '节点一键订阅与测速', '规则分流与去广告', 'iOS 首选代理工具'],
    recommendedFor: 'iPhone / iPad 用户首选必备客户端（美区 App Store 约 $2.99）',
    isPopular: true,
    downloadUrl: 'https://apps.apple.com/us/app/shadowrocket/id932747118',
    officialSource: 'Apple App Store'
  },
  {
    id: 'v2rayn',
    name: 'v2rayN',
    platforms: ['windows'],
    kernel: 'Xray / sing-box / Mihomo',
    features: ['经典多内核支持', '支持全协议批量测速', '轻量低资源占用', '适合复杂订阅管理'],
    recommendedFor: 'Windows 传统极客与多协议用户',
    isPopular: true,
    downloadUrl: 'https://github.com/2dust/v2rayN/releases',
    officialSource: 'GitHub Releases'
  },
  {
    id: 'v2rayng',
    name: 'v2rayNG',
    platforms: ['android'],
    kernel: 'Xray-core',
    features: ['安卓经典客户端', '全协议订阅解析', '应用分流规则配置', '稳定轻量零广告'],
    recommendedFor: 'Android 安卓手机首选客户端，兼容所有主流机场',
    isPopular: true,
    downloadUrl: 'https://github.com/2dust/v2rayNG/releases',
    officialSource: 'GitHub Releases'
  },
  {
    id: 'flclash',
    name: 'FlClash',
    platforms: ['windows', 'android', 'macos', 'linux'],
    kernel: 'Mihomo',
    features: ['Flutter 跨平台界面', '极简高颜值 UI', '规则分流与订阅管理', '多平台操作一致'],
    recommendedFor: '追求简洁美观多端统一界面的用户',
    downloadUrl: 'https://github.com/chen08209/FlClash/releases',
    officialSource: 'GitHub Releases'
  },
  {
    id: 'hiddify',
    name: 'Hiddify',
    platforms: ['windows', 'android', 'macos', 'ios', 'linux'],
    kernel: 'sing-box',
    features: ['现代跨平台客户端', '自动节点优选', '远程配置与智能路由', '新手零门槛一键导入'],
    recommendedFor: '全平台新手用户，尤其适合直接导入多种订阅',
    downloadUrl: 'https://github.com/hiddify/hiddify-app/releases',
    officialSource: 'GitHub Releases'
  },
  {
    id: 'karing',
    name: 'Karing',
    platforms: ['windows', 'macos', 'android', 'ios'],
    kernel: 'sing-box',
    features: ['跨平台支持', '多订阅聚合管理', 'Apple App Store 上架', '规则自动更新'],
    recommendedFor: '需要 iOS 免外区账号或跨设备同步配置的用户',
    downloadUrl: 'https://github.com/KaringX/karing/releases',
    officialSource: 'GitHub / App Store'
  },
  {
    id: 'stash',
    name: 'Stash',
    platforms: ['ios', 'macos'],
    kernel: 'Clash 规则引擎',
    features: ['Clash 订阅完美兼容', '策略组定制', '按需连接与自动化', '界面精美细腻'],
    recommendedFor: '习惯 Clash 配置的苹果全家桶用户',
    downloadUrl: 'https://apps.apple.com/us/app/stash-rule-based-proxy/id1596063349',
    officialSource: 'Apple App Store'
  }
];
