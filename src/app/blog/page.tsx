import Link from 'next/link';
import { listPosts } from '@/lib/blog';

export default function BlogPage() {
    const posts = listPosts();
    return (
        <div>
            <ul>
                {posts.map(post =>
                    <li className='my-8' key={post.slug}>
                        <Link  href={`/blog/${post.slug}`}>{post.title}</Link>
                    </li>)}
            </ul>
           
        </div>
        
    )
    
}