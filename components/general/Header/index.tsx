import Image from 'next/image'
import { useContext } from 'react'

import { Context } from '../../../context'
import { i18n } from '../../../i18n'

const Header = () => {
    const { dispatch } = useContext(Context)

    const changeLanguage = (event) => {
        i18n.changeLanguage(event.target.innerText.toLowerCase())
    }

    return (
        <div className="flex" id="Header">
            <div className="flex items-center justify-between w-28 md:w-1/2">
                <Image
                    src={'/static/logo/Logo_White.svg'}
                    alt="Logo"
                    width={150}
                    height={150}
                    priority
                />
            </div>
            <div className="flex items-center justify-center ml-auto">
                <div className="hidden items-center justify-center lg:flex">
                    <button
                        className="mx-5 text-white"
                        onClick={(e) => changeLanguage(e)}>
                        PT
                    </button>
                    <button
                        className="mx-5 text-white"
                        onClick={(e) => changeLanguage(e)}>
                        EN
                    </button>
                    <div className="mx-5">
                        <div className="px-0.5 py-7 h-full bg-gray-100" />
                    </div>
                    <a
                        href="https://github.com/joaommotawork"
                        target="_blank"
                        rel="noreferrer"
                        className="mx-3 w-1/2 cursor-pointer">
                        <Image
                            src={'/static/icons/white/github.svg'}
                            alt="GitHub"
                            width={35}
                            height={35}
                            layout="fixed"
                            priority
                        />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/joaommota/"
                        target="_blank"
                        rel="noreferrer"
                        className="mx-3 w-1/2 cursor-pointer">
                        <Image
                            src={'/static/icons/white/linkedin-in.svg'}
                            alt="LinkedIn"
                            width={35}
                            height={35}
                            layout="fixed"
                            priority
                        />
                    </a>
                    <a
                        href="https://www.instagram.com/joaommota.work/"
                        target="_blank"
                        rel="noreferrer"
                        className="mx-3 w-1/2 cursor-pointer">
                        <Image
                            src={'/static/icons/white/instagram.svg'}
                            alt="Instagram"
                            width={35}
                            height={35}
                            layout="fixed"
                            priority
                        />
                    </a>
                </div>
                <button
                    className="flex items-center justify-between px-10"
                    onClick={() =>
                        dispatch({
                            type: 'MENU_IS_OPEN',
                            payload: true
                        })
                    }>
                    <Image
                        src={'/static/icons/white/bars.svg'}
                        alt="Menu"
                        width={35}
                        height={35}
                        layout="fixed"
                        priority
                    />
                </button>
            </div>
        </div>
    )
}

export default Header
