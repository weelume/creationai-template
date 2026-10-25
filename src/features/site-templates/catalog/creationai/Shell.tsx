'use client'
import Link from 'next/link'
import {usePathname,useSearchParams,useRouter} from 'next/navigation'
import {Suspense,useState,type ReactNode} from 'react'
import {MotionConfig,AnimatePresence,motion} from 'framer-motion'
import {useCreationaiHost} from './host'
import {nav} from './data'
import type {SiteTemplatePageProps} from '../../types'
import {languageHref} from './routing'
import './theme.css'
export function Shell({children,locale='zh',basePath}:SiteTemplatePageProps&{children:ReactNode}){
 const host=useCreationaiHost(),[menu,setMenu]=useState(false)
 const en=locale==='en'
 const href=(slug:string)=>`${basePath}/${slug}`.replace(/\/$/,'')||'/'
 const [notice,setNotice]=useState('')
 return <MotionConfig reducedMotion="user"><div className="ca-root" lang={en?'en':'zh-CN'}>
  <header className="ca-nav"><Link href={href('')} className="ca-brand" onClick={()=>setMenu(false)}>{host.logo&&<img src={host.logo} alt=""/>}<span>{host.brandName[locale]}</span></Link>
   <nav aria-label={en?'Main navigation':'主导航'}>{nav.map(([slug,label])=><Link key={slug} href={href(slug)}>{label[locale]}</Link>)}</nav>
   <div className="ca-nav-actions"><Suspense fallback={<span>{en?'中文':'EN'}</span>}><LanguageLink basePath={basePath} locale={locale}/></Suspense><Link className="ca-pill" href={href('contact')}>{en?'Start Now':'开始创作'}</Link><button className="ca-menu" aria-label={en?'Toggle menu':'切换菜单'} aria-expanded={menu} onClick={()=>setMenu(!menu)}>{menu?'×':'☰'}</button></div>
   <AnimatePresence>{menu&&<motion.nav className="ca-mobile-nav" initial={{height:0,opacity:0}} animate={{height:'auto',opacity:1}} exit={{height:0,opacity:0}}>{nav.map(([slug,label])=><Link key={slug} href={href(slug)} onClick={()=>setMenu(false)}>{label[locale]}</Link>)}</motion.nav>}</AnimatePresence>
  </header><main id="ca-main">{children}</main>
  <footer className="ca-footer"><div className="ca-container"><div className="ca-footer-top"><div><Link className="ca-brand" href={href('')}>{host.logo&&<img src={host.lightLogo||host.logo} alt=""/>}{host.brandName[locale]}</Link><p>{en?'Explore focal points, contrast and composition. Turn your ideas into thumbnails worth a closer look.':'探索视觉焦点、色彩对比与构图，让每一个创意更值得被看见。'}</p><small>{en?'CREATIVE WORKFLOW SANDBOX · DEMO':'创意工作流沙盒 · 演示模板'}</small></div><form onSubmit={e=>{e.preventDefault();setNotice(en?'Validated locally. No email was sent or saved.':'本地校验通过，未发送、未保存邮箱。');console.debug('[creationai] newsletter',{step:'validation',result:'passed',sent:false})}}><h3>{en?'Join the creative sandbox':'加入创意沙盒'}</h3><p>{en?'Explore visual research, layout presets and creative workflows.':'了解视觉研究、构图预设与创意流程。'}</p><label className="ca-sr" htmlFor="ca-newsletter">{en?'Email':'邮箱'}</label><div className="ca-input-row"><input id="ca-newsletter" type="email" required placeholder={en?'Enter your creator email':'输入你的邮箱'}/><button>{en?'SUBSCRIBE':'订阅'}</button></div><p role="status">{notice}</p></form></div>
   <div className="ca-footer-links">{[
    {title:en?'DIAGNOSTIC HUB':'设计工具',links:[['features',en?'Gaze Heatmaps':'焦点热力图'],['features',en?'Contrast Analyzer':'对比度分析'],['features',en?'Layer Isolation':'图层分离'],['features',en?'Export Presets':'导出预设']]},
    {title:en?'CREATOR ANALYTICS':'创作者指南',links:[['blog',en?'Visual Research':'视觉研究'],['blog/visual-hierarchy',en?'Contrast Playbook':'构图指南'],['blog/mobile-contrast',en?'Mobile Guidelines':'手机端设计'],['library',en?'Creator Inspirations':'创作灵感']]},
    {title:en?'PRODUCT SUITE':'产品',links:[['pricing',en?'Pricing Tiers':'价格方案'],['library',en?'Interactive Showcase':'互动展示'],['features',en?'Design Workflow':'设计流程'],['contact',en?'Start Creating':'开始创作']]},
    {title:en?'PLATFORM':'平台',links:[['about',en?'About':'关于我们'],['privacy',en?'Privacy Policy':'隐私政策'],['terms',en?'Terms of Service':'服务条款'],['contact',en?'Contact':'联系我们']]},
   ].map(group=><div key={group.title}><h4>{group.title}</h4>{group.links.map(([slug,label])=><Link key={slug+label} href={href(slug)}>{label}</Link>)}</div>)}</div>
   <div className="ca-footer-bottom"><span>© 2026 {host.brandName[locale]} · {en?'All rights reserved.':'保留所有权利。'}</span><button onClick={()=>window.scrollTo({top:0,behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'})}>{en?'Back to Top':'返回顶部'}</button></div>{host.filing}
  </div></footer>{host.marketplaceHref&&<Link className="ca-marketplace" href={host.marketplaceHref} aria-label={host.marketplaceAriaLabel?.[locale]}>{(host.lightLogo||host.logo)&&<img src={host.lightLogo||host.logo} alt=""/>}<span>{host.brandName[locale]}</span></Link>}
 </div></MotionConfig>
}

function LanguageLink({basePath,locale='zh'}:SiteTemplatePageProps){const path=usePathname(),query=useSearchParams(),router=useRouter(),other=languageHref(path,basePath,locale,query.toString(),'');return <Link href={other} onClick={e=>{e.preventDefault();router.push(other+window.location.hash)}} aria-label={locale==='en'?'切换到中文':'Switch to English'}>{locale==='en'?'中文':'EN'}</Link>}
