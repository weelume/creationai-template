/** 语言切换仅替换当前语言基路径，保留页面、查询和锚点。 */
export function languageHref(pathname:string,basePath:string,locale:'zh'|'en',search:string,hash:string):string {
 const root=locale==='en'?basePath.replace(/\/en$/,''):basePath
 const suffix=basePath?pathname.slice(basePath.length):pathname
 const target=(locale==='en'?root:root+'/en')+'/'+suffix.replace(/^\//,'')
 return (target.replace(/\/$/,'')||'/')+(search?'?'+search.replace(/^\?/,''):'')+hash
}
