import React, { useEffect, useState } from 'react'
import { IGalleryProps, IPost } from '../types'
import BlogSection from './BlogSection'
import TagFilter from './TagFilter'
import { filter, fetchData } from '../utils/utils'

const Gallery = ({children}: IGalleryProps) => {
    const [data, setData] = useState<IPost[]>([])
    const [isExpanded, setIsExpanded ] = useState<number>(0)
    const [filterOptions, setFilterOptions] = useState<string[]>(filter)
    
    useEffect(() => {
        fetchData()
            .then(response => setData(response.posts))
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
        setIsExpanded(0);
    }

    const expandedSetter = (indexNumber: number) => {
        setIsExpanded(indexNumber)
    }

  return (
    <div className='app__gallery'>
        <h2>Choose a Subject</h2>
        <TagFilter list={filter} setter={filterSetter}/>
        <div className='accordion'>
            {data && filterOptions.map((filter, index) => {
                const array = postSorter(filter, data)
                return (
                    <BlogSection key={filter} title={filter} posts={array} expandedSetter={expandedSetter} isExpanded={isExpanded} index={index}/>
                )
            })}
        </div>
    </div>
  )
}

export default Gallery
