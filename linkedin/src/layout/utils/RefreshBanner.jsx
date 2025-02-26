import { useState, useEffect } from "react";
import UpdatedComponent from "../HOCs/RefreshHOC";

const RefreshBanner = ({ showBanner, handleRefresh }) => {
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

export default UpdatedComponent(RefreshBanner);