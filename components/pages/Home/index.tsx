import Image from 'next/image'
import { animateScroll as scroll, Link as ScrollLink } from 'react-scroll'

import { withTranslation } from '../../../i18n'
import Layout from '../../general/Layout'

const Home = ({ t }) => {
    return (
        <Layout>
            <div
                id="Home"
                className="flex flex-col 2xl:flex-row items-center justify-center w-full h-full md:pt-0">
                <div className="flex flex-col w-full">
                    <div className="py-3 text-white text-2xl font-bold uppercase md:py-5 md:text-6xl">
                        {t('Home.Text1')}
                    </div>
                    <div className="py-3 text-white text-2xl font-bold uppercase md:py-5 md:text-6xl">
                        {t('Home.Text2')}
                    </div>
                    <div className="py-3 text-red-600 text-2xl font-bold uppercase md:py-5 md:text-6xl">
                        João Mota
                    </div>
                    <div className="py-3 w-full text-white font-open text-base uppercase md:py-5 md:w-full md:text-xl">
                        {t('Home.Text3')}
                    </div>
                    <ScrollLink to="Contacts">
                        <div className="flex items-center justify-center my-5 w-44 h-10 bg-red-600 cursor-pointer md:w-52 md:h-12">
                            <div className="flex items-center justify-center w-full">
                                <div className="text-center text-white font-open text-base font-bold uppercase md:text-xl">
                                    {t('Home.ContactMe')}
                                </div>
                                <div className="flex items-center justify-center pl-5 w-10">
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
                </div>
                <div className="flex items-center justify-center w-full">
                    <Image
                        src="/static/images/Connected_World.svg"
                        alt="Logo"
                        width={500}
                        height={500}
                        priority
                    />
                </div>
            </div>
        </Layout>
    )
}

export default withTranslation('common')(Home)
