import React from 'react'
import { IBlogCardProps } from '../types'

const BlogCard = (props: IBlogCardProps) => {
    const { title, body, tags } = props.post
  return (
    <section className='blogSection__blogcard'>
        <h3 className=''>{title}</h3>
        <p>{body}</p>
        <div className='blogcard__tagWrapper'>
            <div>Tags:</div>
            {tags && tags.map(tag => {
                return (
                    <div key={tag}>{tag}</div>
                )
            })}
        </div>
    </section>
  )
}

export default BlogCard