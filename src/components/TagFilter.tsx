import React, { useRef } from 'react'
import { ITagFilterProps } from '../types'
import { capitalise, filter } from '../utils/utils'

const TagFilter = ({ filterSetter }: ITagFilterProps) => {
  const filterChoice = useRef<HTMLSelectElement | null>(null)
    
  return (
    <div className='tagFilter'>
      <h3 className='tagFilter__heading'>Choose a Subject:</h3>
      <select ref={filterChoice} onChange={() => filterSetter(filterChoice.current!.value)} className='tagFilter__dropdown'>
          <option value={filter}>All</option>
          {filter && filter.map((filterOption) =>{
              return(
              <option key={filterOption} value={filterOption}>{capitalise(filterOption)}</option>
              )
          })}
      </select>
    </div>
  )
}

export default TagFilter