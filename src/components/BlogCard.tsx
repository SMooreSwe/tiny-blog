import React from 'react'
import { IBlogCardProps } from '../types'

const BlogCard = ({ title, body }: IBlogCardProps) => {
  return (
    <section className='blogSection__blogcard'>
        <h3 className=''>{title}</h3>
        <p>{body}</p>
    </section>
  )
}

export default BlogCard