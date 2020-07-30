import Head from 'next/head'
import '../assets/scss/main.scss'

const Home = () => {
  return (
    <div className='container'>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <h1 className='test-title tl'>
          Welcome to <a href='https://nextjs.org'>Next.js!</a>
        </h1>
      </main>
    </div>
  )
}

export default Home
