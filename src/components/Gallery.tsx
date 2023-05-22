import React, { useEffect, useState } from 'react'
import { IGalleryProps, IPost } from '../types'
import BlogSection from './BlogSection'
import { mockResponse } from '../mockData/mockData'

const Gallery = ({children}: IGalleryProps) => {
    const [data, setData] = useState<IPost[]>([])

    const filter : string[] = [ "crime", "magical", "mystery", "history", "love"]

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

  return (
    <div className='app__gallery'>
        <h2>Gallery</h2>
        {data && filter.map((filter) => {
            const array = postSorter(filter, data)
            return (
                <BlogSection title={filter} posts={array}/>
            )
        })}
        
    </div>
  )
}

export default Gallery