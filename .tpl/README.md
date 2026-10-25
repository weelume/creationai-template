# Creation.AI 创意封面模板

中英双语响应式创意平台前端，包含首页、功能、价格、灵感库、博客、三篇文章、联系、关于和政策，共 12 页面、24 路由。默认中文，英文位于 /en，语言切换保留页面、查询和锚点。

## 准备与运行
Node 24.16.0、pnpm 9.15.4，版本见 .nvmrc 和 package.json。使用 pnpm install --frozen-lockfile；pnpm dev 启动开发服务，默认 http://127.0.0.1:43540。生产使用 pnpm build 后 pnpm start；PORT 可指定端口，HOSTNAME 可指定监听地址。Ctrl+C 停止本次服务，不关闭其他实例。不需要业务后端或秘密配置。

## 检查与修改
pnpm typecheck、pnpm lint、pnpm test、pnpm build。规则入口 .tpl/project.json；修改入口 .tpl/customization.json。品牌在 host.tsx，内容在 data.ts，主题在 theme.css，公共交互在 Sections.tsx / CreativeDemo.tsx，Shell.tsx 管理导航页脚，pages/ 组合页面，src/app/[[...slug]]/page.tsx 选择路由。均按 features/site-templates/catalog/creationai 组织。共享包通过 pnpm bundle 生成，使用 package.json exports 中的 template 与 host 合同。

## 能力与边界
具有 30 秒创作者循环条、四段 sticky 功能导航、画布标记、预设导出、本地文件选择、2.2 秒统计、三步制作流程、扫描热区、设备预览、吸附轮播、评价卡片重算反馈和 FAQ 动效。表单仅本地校验；文件不上传；AI、点击率、PSD 与打包均为显式演示。导出仅产生 JSON 说明文件。没有持久化、真实邮件、AI 后端、计费和外部工具集成。

图片与字体本地托管；来源和权利边界见 docs/ASSETS.json、docs/LICENSE.md。参考站有不完整链接及错用英语学习 FAQ，已按创意工具主题提供双语内容；新增内页为同风格演示内容。动效尚未完成全部三端逐帧对照，详见 docs/MOTION.md。截图工具实际输出小于配置视口，元数据记录真实像素，不放大。源码公开不等于取得参考素材商业再分发许可；listed=false。

正式交付保留源码、锁文件、.tpl 与素材，不提交 node_modules、缓存、日志或秘密。Git 地址见 template.json。源码提交后 bundle；包与源码 ZIP 分别追溯同一源码提交。不得将构建通过称为完整复刻验收通过。
