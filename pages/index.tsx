import { GetServerSideProps } from 'next'
// import Image from 'next/image'
import { FC, ReactElement, useContext } from 'react'
import { animateScroll as scroll, Link } from 'react-scroll'
import VisibilitySensor from 'react-visibility-sensor'

import MenuHOC from '../components/general/Menu'
import AboutMe from '../components/pages/AboutMe'
// import Blog from '../components/pages/Blog'
import Contacts from '../components/pages/Contacts'
// import Gallery from '../components/pages/Gallery'
import Home from '../components/pages/Home'
// import Portfolio from '../components/pages/Portfolio'
import Skills from '../components/pages/Skills'
import { Context } from '../context'

const Index: FC = (): ReactElement => {
    const { state, dispatch } = useContext(Context)

    const onVisibility = (section) => {
        if (!state.menuItem.includes(section)) {
            dispatch({
                type: 'SECTION_IS_VISIBLE',
                payload: [...state.menuItem, section]
            })
        }
    }

    const onHidden = (section) => {
        if (state.menuItem.includes(section)) {
            dispatch({
                type: 'SECTION_IS_VISIBLE',
                payload: state.menuItem.filter((item) => item !== section)
            })
        }
    }

    return (
        <MenuHOC>
            <VisibilitySensor partialVisibility>
                {({ isVisible }) => {
                    if (isVisible) {
                        onVisibility('Home')
                    } else {
                        onHidden('Home')
                    }
                    return <Home />
                }}
            </VisibilitySensor>
            <VisibilitySensor partialVisibility>
                {({ isVisible }) => {
                    if (isVisible) {
                        onVisibility('AboutMe')
                    } else {
                        onHidden('AboutMe')
                    }
                    return <AboutMe />
                }}
            </VisibilitySensor>
            <VisibilitySensor partialVisibility>
                {({ isVisible }) => {
                    if (isVisible) {
                        onVisibility('Skills')
                    } else {
                        onHidden('Skills')
                    }
                    return <Skills />
                }}
            </VisibilitySensor>
            {/* <Portfolio /> */}
            {/* <Gallery /> */}
            {/* <Blog /> */}
            <VisibilitySensor partialVisibility>
                {({ isVisible }) => {
                    if (isVisible) {
                        onVisibility('Contacts')
                    } else {
                        onHidden('Contacts')
                    }
                    return <Contacts />
                }}
            </VisibilitySensor>
            {!state.menuItem.includes('Home') && (
                <div className="fixed bottom-5 right-5 cursor-pointer">
                    <Link to="outer-container">
                        <svg
                            width="51"
                            height="50"
                            viewBox="0 0 51 50"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M1.53125 25C1.53125 11.6211 12.3711 0.78125 25.75 0.78125C39.1289 0.78125 49.9688 11.6211 49.9688 25C49.9688 38.3789 39.1289 49.2188 25.75 49.2188C12.3711 49.2188 1.53125 38.3789 1.53125 25ZM30.0469 36.3281V25H36.9707C38.0156 25 38.543 23.7305 37.8008 22.998L26.5801 11.8359C26.1211 11.377 25.3887 11.377 24.9297 11.8359L13.6992 22.998C12.957 23.7402 13.4844 25 14.5293 25H21.4531V36.3281C21.4531 36.9727 21.9805 37.5 22.625 37.5H28.875C29.5195 37.5 30.0469 36.9727 30.0469 36.3281Z"
                                fill="rgba(220, 38, 38, 1)"
                            />
                        </svg>
                    </Link>
                </div>
            )}
        </MenuHOC>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    try {
        const res = await fetch(`http://localhost:3000/api/getContactMe`)
        const data = await res.json()
        return {
            props: {
                initialTodos: { data }
            }
        }
    } catch (error) {
        console.error(error)
        return {
            props: {
                error: 'Something Went Wrong!'
            }
        }
    }
}

export default Index
