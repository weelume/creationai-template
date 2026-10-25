'use client'
import {Shell} from '../Shell'
import {Hero,Problems,Metrics,Workflow,Testimonials,Faq} from '../Sections'
import {Features,Inspirations} from '../CreativeDemo'
import type {SiteTemplatePageProps} from '../../../types'
export default function HomePage(props:SiteTemplatePageProps){return <Shell {...props}><Hero locale={props.locale}/><Problems {...props}/><Features locale={props.locale}/><Metrics locale={props.locale}/><Workflow locale={props.locale}/><Inspirations locale={props.locale}/><Testimonials locale={props.locale}/><Faq locale={props.locale}/></Shell>}
