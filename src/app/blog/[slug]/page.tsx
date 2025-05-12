import { getPost } from "@/lib/blog";
import Link from 'next/link';
import { notFound } from "next/navigation";

export default async function BlogPost({
    params
}: {
    params: Promise<{slug: string}>
}) {
    const {slug} = await params;
    const post = getPost(slug);

    if (!post) {
        notFound();
    }

    return (
        <div>
            <h1>{post.title}</h1>
            <Link href='/blog'>Back To Main Blog Page</Link>            
            <p className="my-4">{post.fulltext}</p>
        </div>
    )
}