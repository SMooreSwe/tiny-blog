import { ReactNode } from "react"

export interface IPost {
    id: number,
    title: string,
    body: string,
    userId: number,
    tags: string[],
    reactions: number,
}

export interface IAPIResponse {
    posts: IPost[]
}

export interface IGalleryProps {
    children?: ReactNode
}

export interface IBlogSectionProps {
    title: string,
    posts: IPost[]
}

export interface IBlogCardProps {
    title: string,
    body: string,
}

export interface ITagFilterProps {
    setter: Function,
    list: string[]
}