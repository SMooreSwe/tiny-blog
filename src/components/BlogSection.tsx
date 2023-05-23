import React, { useRef} from 'react'
import { IBlogSectionProps } from '../types'
import BlogCard from './BlogCard'
import { capitalise } from '../utils/utils'

const BlogSection = ({ title, posts, index, expandedSetter, isExpanded }: IBlogSectionProps) => {
  const panelHeading = useRef<HTMLHeadingElement>(null)
  const panelContent = useRef<HTMLDivElement>(null)

  const expandedChecker = () => {
    const check = index === isExpanded ? true : false
    return check
  }

  return (
    <div className='gallery__blogSection accordion__panel' onClick={() => expandedSetter(index)}>
        <h2 ref={panelHeading}>
          <button 
            className='accordion__trigger' 
            aria-controls='accordion__content'
            aria-expanded={expandedChecker()}>
            <span className='accordion__title'>
              {capitalise(title)}
            </span>
            <img src={require(`../../public/${title}.svg`)} alt={`${title} icon`} className='accordion__icon' aria-hidden={true}/>
          </button>
        </h2>
        <div className='accordion__content' ref={panelContent} role='region' aria-labelledby='panelHeading' aria-hidden={index === 0 ? false : true}>
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