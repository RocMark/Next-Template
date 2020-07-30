import Head from 'next/head'
import '../assets/scss/main.scss'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title tl">
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
      </main>

      <footer>
        <span>Footer</span>
      </footer>

      <style jsx>{``}</style>
      <style jsx global>{``}</style>
    </div>
  )
}
