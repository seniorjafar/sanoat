import React, { useState, useEffect } from 'react';

const LoadingComponent = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000); // 3 seconds delay for demonstration purposes

        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            {isLoading ? (
                <div className=" absolute left-2/4 z-50 h-screen">
                    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
                </div>
            ) : (
                <div>
                    {/* Your main content once loading is complete */}
                </div>
            )}
        </div>
    );
};

export default LoadingComponent;