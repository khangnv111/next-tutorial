import Link from 'next/link';

export default function Home(){
    return (
        <>
            <h1>Hello, Next.js!</h1>
            <Link href="/about">About</Link><br/>
            <Link href="/blog">Blog</Link><br/>
            <Link href="/products">Products</Link>
            <Link href="/products/1">Product 1</Link><br/>
            <Link href="/articles/breaking-news-123?leng=en">Read english</Link><br/>
            <Link href="/articles/breaking-news-123?leng=fr">Read French</Link>
        </>
    );
}