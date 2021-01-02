import Image from 'next/image'

import { withTranslation } from '../../../i18n'
import Layout from '../../general/Layout'

const Portfolio = ({ t }) => {
    return (
        <Layout>
            <div
                id="Portfolio"
                className="flex flex-col items-center justify-center w-full min-h-screen">
                <div className="grid gap-10 grid-cols-3 py-5 w-full h-4/5">
                    <div
                        className={`min-h-full bg-background-pattern
                         bg-fixed bg-cover rounded-lg flex flex-col items-center justify-start`}>
                        <div className="flex items-center justify-center w-full">
                            <Image
                                src="/static/images/Connected_World.svg"
                                alt="Logo"
                                width={250}
                                height={250}
                                priority
                            />
                        </div>
                        <div className="p-5 w-full text-red-600 text-xl font-bold uppercase">
                            Project 1
                        </div>
                        <div className="p-5 w-full text-justify text-white font-open text-base font-bold uppercase">
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
                        <div className="flex items-center justify-center w-full">
                            <Image
                                src="/static/images/Connected_World.svg"
                                alt="Logo"
                                width={250}
                                height={250}
                                priority
                            />
                        </div>
                        <div className="p-5 w-full text-red-600 text-xl font-bold uppercase">
                            Project 2
                        </div>
                        <div className="p-5 w-full text-justify text-white font-open text-base font-bold uppercase">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Volutpat sed cras ornare arcu
                            dui. Eros in cursus turpis massa tincidunt dui ut
                            ornare lectus. Ut sem nulla pharetra diam sit.
                        </div>
                    </div>
                    <div
                        className={`min-h-full bg-background-pattern bg-fixed bg-cover rounded-lg flex flex-col items-center justify-start`}>
                        <div className="flex items-center justify-center w-full">
                            <Image
                                src="/static/images/Connected_World.svg"
                                alt="Logo"
                                width={250}
                                height={250}
                                priority
                            />
                        </div>
                        <div className="p-5 w-full text-red-600 text-xl font-bold uppercase">
                            Project 3
                        </div>
                        <div className="p-5 w-full text-justify text-white font-open text-base font-bold uppercase">
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
