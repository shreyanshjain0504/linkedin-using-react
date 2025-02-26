import React, { useState, useEffect } from 'react'

export function UpdatedComponent(OriginalComponent) {
    function NewComponent() {
        const [showBanner, setShowBanner] = useState(false);
        useEffect(() => {
            const timer = setTimeout(() => {
                setShowBanner(true);
            }, 30000);

            return () => clearTimeout(timer);
        }, []);

        const handleRefresh = () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            setTimeout(() => {
                window.location.reload();
            }, 500);
        };
        return <OriginalComponent handleRefresh={handleRefresh} showBanner={showBanner}/>
    }
    return NewComponent;
}

export default UpdatedComponent;