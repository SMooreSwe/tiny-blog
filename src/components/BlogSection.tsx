import { IBlogSectionProps } from '../types'
import BlogCard from './BlogCard'
import { capitalise } from '../utils/utils'
import { useEffect, useRef } from 'react'

const BlogSection = ({ title, posts, index, expandedSetter, isExpanded }: IBlogSectionProps) => {
  const panel = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if(isExpanded !== index) {
      panel.current!.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isExpanded])

  const expandedChecker = () => {
    const check = index === isExpanded ? true : false
    return check
  }

  return (
    <div className='gallery__blogSection accordion__panel' ref={panel} onClick={() => expandedSetter(index)}>
        <h2>
          <button 
            className='accordion__trigger' 
            aria-controls='accordion__content'
            aria-expanded={expandedChecker()}>
            <span  className='accordion__title'>
              {capitalise(title)}
            </span>
            <img src={require(`../../public/${title}.svg`)} alt={`${title} icon`} className='accordion__icon' aria-hidden={true}/>
          </button>
        </h2>
        <div className='accordion__content' role='region' aria-labelledby='panelHeading' aria-hidden={index === 0 ? false : true}>
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