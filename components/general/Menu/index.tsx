import Image from 'next/image'
import { useContext } from 'react'
import { stack as Menu } from 'react-burger-menu'
import { animateScroll as scroll, Link as ScrollLink } from 'react-scroll'

import { Context } from '../../../context'
import useWindowSize from '../../../hooks/useWindowSize'
import { i18n, withTranslation } from '../../../i18n'
import Header from '../Header'

const MenuHOC = ({ children, t }) => {
    const size = useWindowSize()

    const { state, dispatch } = useContext(Context)

    const handleOnClose = () => {
        dispatch({
            type: 'MENU_IS_OPEN',
            payload: state.menu === false ? true : false
        })
    }

    const changeLanguage = (event) => {
        i18n.changeLanguage(event.target.innerText.toLowerCase())
        handleOnClose()
    }

    const paths = [
        'Home',
        'AboutMe',
        'Skills',
        // 'Portfolio',
        // 'Gallery',
        'Contacts'
    ]

    const Button = ({ children }) => {
        return (
            <button
                onClick={handleOnClose}
                className="w-full py-3 uppercase text-4xl text-center relative">
                {children}
            </button>
        )
    }

    const Items = (path) => {
        switch (path) {
            case 'Home':
                return (
                    <ScrollLink to="outer-container">
                        <Button>{t('Menu.Home')}</Button>
                    </ScrollLink>
                )
            case 'AboutMe':
                return (
                    <ScrollLink to="AboutMe">
                        <Button>{t('Menu.AboutMe')}</Button>
                    </ScrollLink>
                )
            case 'Skills':
                return (
                    <ScrollLink to="Skills">
                        <Button>{t('Menu.Skills')}</Button>
                    </ScrollLink>
                )
            case 'Portfolio':
                return (
                    <ScrollLink to="Portfolio">
                        <Button>{t('Menu.Portfolio')}</Button>
                    </ScrollLink>
                )
            case 'Gallery':
                return (
                    <ScrollLink to="Gallery">
                        <Button>{t('Menu.Gallery')}</Button>
                    </ScrollLink>
                )
            case 'Contacts':
                return (
                    <ScrollLink to="Contacts">
                        <Button>{t('Menu.Contacts')}</Button>
                    </ScrollLink>
                )
            default:
                break
        }
    }

    return (
        <div
            id="outer-container"
            className={`bg-background-pattern bg-fixed bg-cover`}>
            <Menu
                isOpen={state.menu}
                onClose={handleOnClose}
                customBurgerIcon={false}
                customCrossIcon={false}
                pageWrapId={'page-wrap'}
                outerContainerId={'outer-container'}
                width={size.width > 1024 ? '500px' : '100%'}
                right>
                <div className="flex items-center justify-center">
                    {paths.map((path) => (
                        <div key={path} className="w-full">
                            {/* {router.asPath === path ? (
                                        <div className="w-full h-2 bg-red-600 absolute top-7" />
                                    ) : null} */}
                            {state.menuItem[state.menuItem.length - 1] ===
                            path ? (
                                <div className="text-red-600">
                                    {Items(path)}
                                </div>
                            ) : (
                                Items(path)
                            )}
                        </div>
                    ))}
                    <div className="flex content-center items-center mt-20 lg:hidden">
                        <div className="flex flex-col content-between items-center lg:hidden">
                            <div>
                                <button
                                    className="text-white px-5"
                                    onClick={(e) => changeLanguage(e)}>
                                    PT
                                </button>
                                <button
                                    className="text-white px-5"
                                    onClick={(e) => changeLanguage(e)}>
                                    EN
                                </button>
                            </div>
                            <div className="py-5">
                                <div className="px-32 py-0.5 h-full bg-gray-100" />
                            </div>
                            <div>
                                <a
                                    href="https://github.com/joaommotawork"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="mx-3 cursor-pointer w-1/2">
                                    <Image
                                        src="/static/icons/white/github.svg"
                                        alt="GitHub"
                                        width={35}
                                        height={35}
                                        layout="fixed"
                                    />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/joaommota/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="mx-3 cursor-pointer w-1/2">
                                    <Image
                                        src="/static/icons/white/linkedin-in.svg"
                                        alt="LinkedIn"
                                        width={35}
                                        height={35}
                                        layout="fixed"
                                    />
                                </a>
                                <a
                                    href="https://www.instagram.com/joaommota.work/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="mx-3 cursor-pointer w-1/2">
                                    <Image
                                        src="/static/icons/white/instagram.svg"
                                        alt="Instagram"
                                        width={35}
                                        height={35}
                                        layout="fixed"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </Menu>
            <div id="page-wrap" className="flex flex-col p-10 md:p-20">
                <Header />
            </div>
            {children}
        </div>
    )
}

export default withTranslation('common')(MenuHOC)
