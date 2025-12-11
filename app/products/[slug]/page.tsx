import { notFound } from "next/navigation";
import { getProduct, getAllProducts } from "@/lib/products";
import ProductPageClient from "@/components/ProductPageClient";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export async function generateStaticParams() {
    const products = getAllProducts();
    return products.map((product) => ({
        slug: product.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const product = getProduct(slug);

    if (!product) {
        return {
            title: "Product Not Found",
        };
    }

    return {
        title: `${product.name} - ${product.price} | Flowing Indian`,
        description: product.description,
    };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const product = getProduct(slug);

    if (!product) {
        notFound();
    }

    return (
        <>
            <Navbar />
            <ProductPageClient product={product} />
            <Footer />
        </>
    );
}
