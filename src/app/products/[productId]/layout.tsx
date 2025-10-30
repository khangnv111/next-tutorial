export default function ProductDetailsLayout({
    children,
                                             }:{
    children: React.ReactNode
}) {
    return (
        <div style={{border: "2px solid green", padding: "1rem", margin: "1rem"}}>
            {children}
            <h2>Feature Products</h2>
        </div>
    );
}