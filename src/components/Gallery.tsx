import React, { useEffect, useState } from 'react'
import { IGalleryProps, IPost } from '../types'
import BlogSection from './BlogSection'
import { mockResponse } from '../mockData/mockData'
import TagFilter from './TagFilter'

const Gallery = ({children}: IGalleryProps) => {
    const [data, setData] = useState<IPost[]>([])
    
    const filter : string[] = [ "crime", "magical", "mystery", "history", "love"]
    const [filterOptions, setFilterOptions] = useState<string[]>(filter)
    
    useEffect(() => {
      const posts = mockResponse.posts
      setData(posts)

    }, [])
  
    const postSorter = (filterTag: string, postArray : IPost[]) => {
        const filteredArray : IPost[] = []
        postArray.forEach(post => {
            if(post.tags.includes(filterTag)) {
                filteredArray.push(post)
            }
        })
        return filteredArray;
    }

    const filterSetter = (value : string) => {
        setFilterOptions(value.split(','))
    }

  return (
    <div className='app__gallery'>
        <h2>Gallery</h2>
        <TagFilter list={filter} setter={filterSetter}/>
        {data && filterOptions.map((filter) => {
            const array = postSorter(filter, data)
            return (
                <BlogSection key={filter} title={filter} posts={array}/>
            )
        })}
        
    </div>
  )
}

export default Gallery