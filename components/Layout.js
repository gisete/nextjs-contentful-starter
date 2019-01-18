import Header from './Header'
import Head from 'next/head'

const Layout = (props) => (
    <div>
        <Head>
            <title>Podcast page</title>
            <link rel="stylesheet" href="https://bootswatch.com/4/lux/bootstrap.min.css"/>
        </Head>

        <Header />

        <div className="container">
            <div className="page-header mt-5" id="banner">
                <div className="row justify-content-md-center">
                        {props.children}
                </div>
            </div>
        </div>
        
    </div>
)

export default Layout