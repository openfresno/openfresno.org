'use client';

import { useEffect } from 'react';

/**
 * The application error reporting.
 * In the future, we should log the error to an error reporting service.
 * NOTE: Error boundaries must be client components.
 * @param error
 * @param reset
 * @returns {JSX.Element}
 */
export default function Error({ error, reset }) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div>
            <h2>Something went wrong!</h2>
            <button onClick={() => reset()}>Try again</button>
        </div>
    );
}