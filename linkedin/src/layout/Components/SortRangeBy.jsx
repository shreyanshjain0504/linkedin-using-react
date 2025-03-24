import React, { useRef, useEffect } from 'react'
import SortDisplay from './SortDisplay'
import RangeDisplay from './RangeDisplay'

export default function SortRangeBy({ startDate, setStartDate, endDate, setEndDate }) {
  return (
    <>
        <div className="sort-by">
            <SortDisplay />
            <hr />
            <RangeDisplay startDate={startDate} 
                          setStartDate={setStartDate} 
                          endDate={endDate} 
                          setEndDate={setEndDate}  
            />
        </div>
    </>
  )
}