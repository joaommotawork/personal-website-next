import Image from 'next/image'

import { withTranslation } from '../../../i18n'
import Layout from '../../general/Layout'

const Home = ({ t }) => {
    return (
        <Layout>
            <div
                id="Home"
                className="h-full w-full flex flex-col 2xl:flex-row items-center justify-center md:pt-0">
                <div className="flex flex-col w-full">
                    <div className="text-2xl font-bold text-white uppercase md:text-6xl py-3 md:py-5">
                        {t('Home.Text1')}
                    </div>
                    <div className="text-2xl font-bold text-white uppercase md:text-6xl py-3 md:py-5">
                        {t('Home.Text2')}
                    </div>
                    <div className="text-2xl font-bold text-red-600 uppercase md:text-6xl py-3 md:py-5">
                        João Mota
                    </div>
                    <div className="font-open text-base text-white uppercase py-3 w-full md:py-5 md:text-xl md:w-full">
                        {t('Home.Text3')}
                    </div>
                    <div className="w-44 flex bg-red-600 h-10 md:h-12 my-5 items-center justify-center md:w-52 cursor-pointer">
                        <div className="flex w-full items-center justify-center">
                            <div className="font-open font-bold text-base text-white uppercase md:text-xl text-center">
                                {t('Home.ContactMe')}
                            </div>
                            <div className="flex w-10 pl-5 items-center justify-center">
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
