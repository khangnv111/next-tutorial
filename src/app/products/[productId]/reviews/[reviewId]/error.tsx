"use client";

import {useRouter} from "next/navigation";
import {startTransition} from "react";

export  default  function ErrorBoundary({ error, reset }:
{
    error: Error,
    reset: () => void
}) {
    const router = useRouter();
    const reload = () => {
        startTransition(() => {
            router.refresh();
            reset();
        })
    }

    return (
        <>
            <h2>Something went wrong while loading the review.</h2>
            <p>{error.message}</p>
            <button onClick={() => reload()}> Try again </button>
        </>
    );
}