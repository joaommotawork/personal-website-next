import '../styles/globals.css'
import '../styles/menuStyles.css'

import Head from 'next/head'

import { Provider } from '../context'
import { appWithTranslation } from '../i18n'

const App = ({ Component, pageProps }) => {
    return (
        <Provider>
            <Head>
                <title>João M. Mota Developer</title>
                <link rel="icon" href="/favicon.ico" />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/static/favicons/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/static/favicons/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/static/favicons/favicon-16x16.png"
                />
                <link rel="manifest" href="/static/favicons/site.webmanifest" />
                <link
                    rel="mask-icon"
                    href="/static/favicons/safari-pinned-tab.svg"
                    color="#3f3838"
                />
                <meta name="msapplication-TileColor" content="#3f3838" />
                <meta name="theme-color" content="#3f3838"></meta>
            </Head>
            <Component {...pageProps} />
        </Provider>
    )
}

export default appWithTranslation(App)
