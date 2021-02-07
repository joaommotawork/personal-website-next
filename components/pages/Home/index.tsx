import Image from 'next/image'
import Fade from 'react-reveal/Fade'
import Pulse from 'react-reveal/Pulse'
import { Link as ScrollLink } from 'react-scroll'

import { withTranslation } from '../../../i18n'
import Layout from '../../general/Layout'

const Home = ({ t }) => {
    return (
        <Layout>
            <div
                id="Home"
                className="flex flex-col items-center justify-center w-full h-full 2xl:flex-row md:pt-0">
                <div className="flex flex-col w-full">
                    <div className="py-3 text-2xl font-bold text-white uppercase md:py-5 md:text-6xl">
                        {t('Home.Text1')}
                    </div>
                    <div className="py-3 text-2xl font-bold text-white uppercase md:py-5 md:text-6xl">
                        {t('Home.Text2')}
                    </div>
                    <Pulse>
                        <div className="py-3 text-2xl font-bold text-red-600 uppercase animate-pulse md:py-5 md:text-6xl">
                            João Mota
                        </div>
                    </Pulse>
                    <Fade>
                        <div className="w-full py-3 text-base text-white uppercase font-open md:py-5 md:w-full md:text-xl">
                            {t('Home.Text3')}
                        </div>
                        <ScrollLink to="Contacts">
                            <div className="flex items-center justify-center h-10 my-5 bg-red-600 cursor-pointer w-44 md:w-52 md:h-12">
                                <div className="flex items-center justify-center w-full">
                                    <div className="text-base font-bold text-center text-white uppercase font-open md:text-xl">
                                        {t('Home.ContactMe')}
                                    </div>
                                    <div className="flex items-center justify-center w-10 pl-5">
                                        <Image
                                            src="/static/icons/white/chevron-circle-right.svg"
                                            alt="Contact Me"
                                            width={25}
                                            height={25}
                                            priority
                                        />
                                    </div>
                                </div>
                            </div>
                        </ScrollLink>
                    </Fade>
                </div>
                <Fade>
                    <div className="flex items-center justify-center w-full">
                        <Image
                            src="/static/images/Connected_World.svg"
                            alt="Logo"
                            width={500}
                            height={500}
                            priority
                        />
                    </div>
                </Fade>
            </div>
        </Layout>
    )
}

export default withTranslation('common')(Home)
