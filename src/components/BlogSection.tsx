import React from 'react'
import { IBlogSectionProps } from '../types'
import BlogCard from './BlogCard'
import { capitalise } from '../utils/utils'

const BlogSection = ({ title, posts }: IBlogSectionProps) => {
  return (
    <div className='gallery__blogSection'>
        <h2>{capitalise(title)}</h2>
        {posts && posts.map((post) => {
            return(
            <BlogCard key={post.id} post={post}/>
        )}
        )}
    </div>
  )
}

export default BlogSection