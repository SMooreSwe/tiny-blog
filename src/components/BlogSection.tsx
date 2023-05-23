import React, { useRef } from 'react'
import { IBlogSectionProps } from '../types'
import BlogCard from './BlogCard'
import { capitalise } from '../utils/utils'

const BlogSection = ({ title, posts }: IBlogSectionProps) => {
  const panelTitle = useRef<HTMLSpanElement>(null)
  return (
    <div className='gallery__blogSection accordion-panel'>
        <h2>
          <button>
            <span ref={panelTitle}>
              {capitalise(title)}
            </span>
          </button>
        </h2>
        <div className='accordion-content'>
          {posts && posts.map((post) => {
              return(
              <BlogCard key={post.id} post={post}/>
          )}
          )}
        </div>
    </div>
  )
}

export default BlogSection