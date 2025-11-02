"use client";

export  default  function ErrorBoundary({ error }: { error: Error }) {
    return (
        <>
            <h2>Something went wrong while loading the review.</h2>
            <p>{error.message}</p>
        </>
    );
}