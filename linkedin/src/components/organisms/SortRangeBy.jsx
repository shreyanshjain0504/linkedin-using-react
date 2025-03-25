import React from 'react'
import SortDisplay from '../molecules/SortDisplay'
import RangeDisplay from '../molecules/RangeDisplay'

export default function SortRangeBy() {
  return (
    <>
      <div className="sort-by">
        <SortDisplay />
        <hr />
        <RangeDisplay />
      </div>
    </>
  )
}