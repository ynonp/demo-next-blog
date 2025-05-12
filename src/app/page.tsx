import Link from 'next/link';

export default function Home() {
  return (
    <>
    <h1 className="text-3xl font-bold underline">
      Hello world!
      
    </h1>
    <p><Link href="/blog">Visit my blog</Link></p>
    </>
    
  )
}