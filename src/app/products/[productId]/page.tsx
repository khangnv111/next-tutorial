import { Metadata } from "next";

type Props = {
    params: Promise<{productId: string}>;
};

export const generateMetadata = async ({params} : Props)
    : Promise<Metadata> => {
    const  productId = (await  params).productId;
    const title = await new Promise((resolve,) => {
        setTimeout(() => {
            resolve(`iphone ${productId}`);
        }, 100);
    })

    return {
        title: `Product ${title}`,
    };
}

export default async function ProductDetail({params} : Props)
{
    const  productId = (await  params).productId;

    return <h1>ProductDetail {productId}</h1>;
}