import '../styles/globals.css'
import '../styles/menuStyles.css'
import 'tailwindcss/tailwind.css'

import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { Provider } from '../context'
import { appWithTranslation } from '../i18n'
import * as gtag from '../lib/gtag'

const App = ({ Component, pageProps }) => {
    const router = useRouter()

    useEffect(() => {
        const handleRouteChange = (url: URL) => {
            gtag.pageview(url)
        }
        router.events.on('routeChangeComplete', handleRouteChange)
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange)
        }
    }, [router.events])

    return (
        <Provider>
            <Head>
                {/* <!-- Primary Meta Tags --> */}
                <title>João M. Mota Developer</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
                <meta name="title" content="João M. Mota Developer" />
                <meta
                    name="description"
                    content="I'M A FULL-STACK WEB DEVELOPER SPECIALIZING IN FRONT-END & DESIGN, THAT'S PASSIONATE ABOUT BRINGING NEW EXPERIENCES TO MORE PEOPLE."
                />

                {/* <!-- Open Graph / Facebook --> */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://joaommota.com/" />
                <meta property="og:title" content="João M. Mota Developer" />
                <meta
                    property="og:description"
                    content="I'M A FULL-STACK WEB DEVELOPER SPECIALIZING IN FRONT-END & DESIGN, THAT'S PASSIONATE ABOUT BRINGING NEW EXPERIENCES TO MORE PEOPLE."
                />
                <meta
                    property="og:image"
                    content="/static/images/DefaultLogo.png"
                />

                {/* <!-- Twitter --> */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://joaommota.com/" />
                <meta
                    property="twitter:title"
                    content="João M. Mota Developer"
                />
                <meta
                    property="twitter:description"
                    content="I'M A FULL-STACK WEB DEVELOPER SPECIALIZING IN FRONT-END & DESIGN, THAT'S PASSIONATE ABOUT BRINGING NEW EXPERIENCES TO MORE PEOPLE."
                />
                <meta
                    property="twitter:image"
                    content="/static/images/DefaultLogo.png"
                />

                {/* <!-- Other --> */}
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
