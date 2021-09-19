import Link from "next/link"
import Head from "next/head"
import Router from "next/router"
import NProgress from "nprogress"

Router.onRouteChangeStart = url => {
  console.log(url)
  NProgress.start()
}

Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

export default ({ children, title }) => (
  <div className="root">
    <Head>
      <title>Louve Demo</title>
    </Head>
    <header>
      <Link href="/">
        <a>Dashboard</a>
      </Link>
      <Link href="/transactions">
        <a>Transactions</a>
      </Link>
    </header>

    <h1>{title}</h1>
    {children}


    <style jsx>{`
      .root {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }
      header {
        width: 100%;
        display: flex;
        justify-content: space-around;
        padding: 1em 0;
        font-size: 1.2rem;
        background: indigo;
      }
      header a {
        color: darkgrey;
        text-decoration: none;
      }
      header a:hover {
        font-weight: bold;
        color: lightgrey;
      }
    `}</style>
    <style global jsx>{`
      body {
        margin: 0;
        font-size: 110%;
        background: #f0f0f0;
      }
    `}</style>
  </div>
)
