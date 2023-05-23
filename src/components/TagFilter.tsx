import React, { useRef } from 'react'
import { ITagFilterProps } from '../types'
import { capitalise } from '../utils/utils'

const TagFilter = ({list, setter}: ITagFilterProps) => {
    const filterChoice = useRef<HTMLSelectElement | null>(null)
    
  return (
    <select ref={filterChoice} onChange={() => setter(filterChoice.current!.value)} className='tagFilter'>
        <option value={list}>All</option>
        {list && list.map((filterOption) =>{
            return(
            <option key={filterOption} value={filterOption}>{capitalise(filterOption)}</option>
            )
        })}
    </select>
  )
}

export default TagFilter