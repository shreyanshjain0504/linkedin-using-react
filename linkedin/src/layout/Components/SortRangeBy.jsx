import React from 'react'
import SortDisplay from './SortDisplay'
import RangeDisplay from './RangeDisplay'

export default function SortRangeBy({ postArray, setPostArray }) {
  return (
    <>
        <div className="sort-by">
            <SortDisplay postArray={postArray} setPostArray={setPostArray} />
            <hr />
            <RangeDisplay postArray={postArray} setPostArray={setPostArray} />
        </div>
    </>
  )
}