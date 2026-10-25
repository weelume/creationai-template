'use client'
import {createContext,useContext,type ReactNode} from 'react'
export type Bilingual={zh:string;en:string}
export interface CreationaiHostConfig {brandName:Bilingual;logo?:string;lightLogo?:string;marketplaceHref?:string;marketplaceLabel?:Bilingual;marketplaceAriaLabel?:Bilingual;filing?:ReactNode}
const Context=createContext<CreationaiHostConfig>({brandName:{zh:'Creation.AI',en:'Creation.AI'},logo:'/templates/creationai/images/mark.svg'})
export function CreationaiHostProvider({children,...config}:CreationaiHostConfig&{children:ReactNode}){return <Context.Provider value={config}>{children}</Context.Provider>}
export const useCreationaiHost=()=>useContext(Context)
