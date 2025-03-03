import React from 'react'

function togglePopup() {
    const overlay = document.getElementById('popupOverlay');
    console.log(overlay);
    overlay.classList.toggle('show');
}

export default togglePopup;