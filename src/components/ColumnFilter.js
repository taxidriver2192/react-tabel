import React from 'react'

export const ColumFilter = ({ column }) => {
    const {filterValue, setFilter } = column
  return (
    <span>
        Search: {' '}
        <input value={filterValue || ''}
        onChange={(e) => setFilter(e.target.value)}/>
    </span>
  )
}
