import {test} from 'node:test'
import assert from 'node:assert/strict'
import {languageHref} from '../src/features/site-templates/catalog/creationai/routing.ts'
test('独立与宿主语言切换保留页面、查询与锚点',()=>{
 assert.equal(languageHref('/contact','','zh','demo=1','#form'),'/en/contact?demo=1#form')
 assert.equal(languageHref('/en/contact','/en','en','demo=1','#form'),'/contact?demo=1#form')
 assert.equal(languageHref('/templates/creationai/site/blog','/templates/creationai/site','zh','','#article'),'/templates/creationai/site/en/blog#article')
 assert.equal(languageHref('/templates/creationai/site/en','/templates/creationai/site/en','en','',''),'/templates/creationai/site')
 assert.equal(languageHref('/','','zh','',''),'/en')
 assert.equal(languageHref('/en','/en','en','',''),'/')
})
