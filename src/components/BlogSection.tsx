import React from 'react'
import { IBlogSectionProps } from '../types'
import BlogCard from './BlogCard'

const BlogSection = ({ title, posts }: IBlogSectionProps) => {
  return (
    <div className='gallery__blogSection'>
        <h2>{title}</h2>
        {posts && posts.map((post) => {
            return(
            <BlogCard key={post.id} title={post.title} body={post.body}/>
        )}
        )}
    </div>
  )
}

export default BlogSection