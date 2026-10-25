# 架构

应用采用 React / Next.js，纯前端 feature-based 结构。品牌上下文 host.tsx、双语集合 data.ts、主题 theme.css、路由辅助 routing.ts；公共 Shell 与创意交互组件分离。页面包装器位于 pages，meta.ts 负责注册。站内使用 Next Link，不依赖外部服务。字体与图片位于 public/templates/creationai，展示截图位于 .tpl/assets。
