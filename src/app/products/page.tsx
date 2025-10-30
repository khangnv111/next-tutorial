import Link from "next/link";

export default function Products(){
    const productId = 3;

    return (
        <>
            <h1>Product List</h1>
            <Link href="/products/1">Products 1</Link>
            <h2>Product 2</h2>
            <Link href="/products/2">Products 2</Link>
            <h2>Product 3</h2>
            <Link href={`/products/${productId}`}>Products 3</Link>
        </>
    );
}