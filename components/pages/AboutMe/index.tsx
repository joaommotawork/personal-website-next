import Image from 'next/image'

import { withTranslation } from '../../../i18n'
import Layout from '../../general/Layout'

const AboutMe = ({ t }) => {
    return (
        <div className="relative mt-64 h-full bg-gray-100">
            <Layout>
                <div
                    id="AboutMe"
                    className="flex flex-col items-center justify-center w-full min-h-screen">
                    <div className="flex flex-col 2xl:flex-row items-center justify-center">
                        <div className="flex flex-col w-full">
                            <div className="flex flex-col py-5">
                                <div className="text-red-600 text-xl font-bold uppercase md:text-4xl">
                                    {t('AboutMe.EducationWork')}
                                </div>
                                <div className="text-black font-open text-base uppercase md:text-xl">
                                    {t('AboutMe.EducationWork1')}
                                </div>
                                <div className="text-black font-open text-base uppercase md:text-xl">
                                    {t('AboutMe.EducationWork2')}
                                </div>
                            </div>
                            <div className="flex flex-col py-5">
                                <div className="text-red-600 text-xl font-bold uppercase md:text-4xl">
                                    {t('AboutMe.Principles')}
                                </div>
                                <div className="text-black font-open text-base uppercase md:text-xl">
                                    {t('AboutMe.Principles1')}
                                </div>
                                <div className="text-black font-open text-base uppercase md:text-xl">
                                    {t('AboutMe.Principles2')}
                                </div>
                            </div>
                            <div className="flex flex-col py-5">
                                <div className="text-red-600 text-xl font-bold uppercase md:text-4xl">
                                    {t('AboutMe.Fun')}
                                </div>
                                <div className="text-black font-open text-base uppercase md:text-xl">
                                    {t('AboutMe.Fun1')}
                                </div>
                                <div className="text-black font-open text-base uppercase md:text-xl">
                                    {t('AboutMe.Fun2')}
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center w-1/2">
                            <Image
                                src="/static/images/At_Work.svg"
                                alt="Logo"
                                width={300}
                                height={300}
                                priority
                            />
                        </div>
                    </div>
                </div>
            </Layout>
            <div className="absolute -top-64 min-w-full">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                    viewBox="0 0 1440 320"
                    width="100%"
                    height="320">
                    <path
                        fill="rgba(243, 244, 246, 1)"
                        fillOpacity="1"
                        d="M0,160L80,165.3C160,171,320,181,480,181.3C640,181,800,171,960,176C1120,181,1280,203,1360,213.3L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
                </svg>
            </div>
        </div>
    )
}

export default withTranslation('common')(AboutMe)
