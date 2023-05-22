import React, { useRef } from 'react'
import { ITagFilterProps } from '../types'

const TagFilter = ({list, setter}: ITagFilterProps) => {
    const filterChoice = useRef<HTMLSelectElement | null>(null)
    
  return (
    <select ref={filterChoice} onChange={() => setter(filterChoice.current!.value)}>
        <option value={list}>all</option>
        {list && list.map((filterOption) =>{
            return(
            <option key={filterOption} value={filterOption}>{filterOption}</option>
            )
        })}
    </select>
  )
}

export default TagFilter