import React, { useState, useEffect } from 'react'

export function UpdatedComponent(OriginalComponent) {
    function NewComponent() {
        const text = "I am Shreyansh Jain, a Computer Science student at NIT Raipur from batch 2025. Currently working as Associate Software Engineer Intern at Tekion Corp working in the Accounting team as a FE Intern.";
        const [showMore, setShowMore] = useState(false)        
        return <OriginalComponent text={text} showMore={showMore} setShowMore={setShowMore} />
    }
    return NewComponent;
}

export default UpdatedComponent;