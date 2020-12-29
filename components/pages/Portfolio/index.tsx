import Image from 'next/image'

import { withTranslation } from '../../../i18n'
import Layout from '../../general/Layout'

const Portfolio = ({ t }) => {
    return (
        <Layout>
            <div
                id="Portfolio"
                className="h-screen w-full flex flex-col items-center justify-center">
                <div className="h-4/5 w-full grid grid-cols-3 gap-10 py-5">
                    <div
                        className={`min-h-full bg-background-pattern
                         bg-fixed bg-cover rounded-lg flex flex-col items-center justify-start`}>
                        <div className="w-full flex items-center justify-center">
                            <Image
                                src="/static/images/Connected_World.svg"
                                alt="Logo"
                                width={250}
                                height={250}
                                priority
                            />
                        </div>
                        <div className="w-full p-5 text-red-600 font-bold text-xl uppercase">
                            Project 1
                        </div>
                        <div className="font-open w-full p-5 text-white font-bold text-base uppercase text-justify">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Volutpat sed cras ornare arcu
                            dui. Eros in cursus turpis massa tincidunt dui ut
                            ornare lectus. Ut sem nulla pharetra diam sit.
                        </div>
                    </div>
                    <div
                        className={`min-h-full bg-background-pattern
                                 bg-fixed bg-cover rounded-lg flex flex-col items-center justify-start`}>
                        <div className="w-full flex items-center justify-center">
                            <Image
                                src="/static/images/Connected_World.svg"
                                alt="Logo"
                                width={250}
                                height={250}
                                priority
                            />
                        </div>
                        <div className="w-full p-5 text-red-600 font-bold text-xl uppercase">
                            Project 2
                        </div>
                        <div className="font-open w-full p-5 text-white font-bold text-base uppercase text-justify">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Volutpat sed cras ornare arcu
                            dui. Eros in cursus turpis massa tincidunt dui ut
                            ornare lectus. Ut sem nulla pharetra diam sit.
                        </div>
                    </div>
                    <div
                        className={`min-h-full bg-background-pattern bg-fixed bg-cover rounded-lg flex flex-col items-center justify-start`}>
                        <div className="w-full flex items-center justify-center">
                            <Image
                                src="/static/images/Connected_World.svg"
                                alt="Logo"
                                width={250}
                                height={250}
                                priority
                            />
                        </div>
                        <div className="w-full p-5 text-red-600 font-bold text-xl uppercase">
                            Project 3
                        </div>
                        <div className="font-open w-full p-5 text-white font-bold text-base uppercase text-justify">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Volutpat sed cras ornare arcu
                            dui. Eros in cursus turpis massa tincidunt dui ut
                            ornare lectus. Ut sem nulla pharetra diam sit.
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default withTranslation('common')(Portfolio)
