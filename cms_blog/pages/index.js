import Head from 'next/head'

const posts = [
  { title: 'React Testing', excerpt: 'Learn React Testing'},
  { title: 'React with Tailwind', excerpt: 'Learn React with Tailwind'},
]

export default function Home() {
  return (
    <div className="contaier mx-auto px-10 mb-8">
      <Head>
        <title>CMS Blog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        {
          posts.map((post, index) => (
            <div>
              {post.title}
              {post.excerpt}
            </div>
          ))
        }
      </div>
      
    </div>
  )
}
