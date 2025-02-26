import React, { useState, useEffect } from 'react'

export function UpdatedComponent(OriginalComponent) {
    function NewComponent() {
        useEffect(() => {
            localStorage.removeItem('filter')
        }, [posts]);
        
        if (localStorage.getItem('filter')) {
            console.log('enter!');
            posts = JSON.parse(localStorage.getItem('filter'));
            localStorage.removeItem('filter')
        }
        return <OriginalComponent />
    }
    return NewComponent;
}

export default UpdatedComponent;