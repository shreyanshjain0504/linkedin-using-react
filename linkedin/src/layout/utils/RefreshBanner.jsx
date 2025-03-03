import { useState, useEffect } from "react";

const RefreshBanner = () => {
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
    return (
        <>
            {showBanner && (
                <div className="refresh-popup" onClick={handleRefresh}>
                    New posts
                </div>
            )}
        </>
    );
};

export default RefreshBanner