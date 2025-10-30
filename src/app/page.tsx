import Link from 'next/link';

export default function Home(){
    return (
        <>
            <h1>Hello, Next.js!</h1>
            <Link href="/about">About</Link><br/>
            <Link href="/blog">Blog</Link><br/>
            <Link href="/products">Products</Link>
        </>
    );
}