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
    isExpanded: number,
    expandedSetter: Function,
    index: number,
    posts: IPost[]
}

export interface IBlogCardProps {
    post: IPost,
}

export interface ITagFilterProps {
    setter: Function,
    list: string[]
}