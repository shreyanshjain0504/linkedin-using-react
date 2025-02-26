import React from 'react'

const formatDate = (date) => {
    const yyyy = date.getFullYear();
    let mm = date.getMonth() + 1;
    let dd = date.getDate();
    return `${dd.toString().padStart(2, '0')}/${mm.toString().padStart(2, '0')}/${yyyy}`;
}

export default formatDate