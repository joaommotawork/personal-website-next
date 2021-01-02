import Image from 'next/image'

import { withTranslation } from '../../../i18n'
import Layout from '../../general/Layout'

const Skills = ({ t }) => {
    return (
        <div className="relative mb-64 h-full bg-gray-100">
            <Layout>
                <div
                    id="Skills"
                    className="flex flex-col items-center justify-center w-full min-h-screen">
                    <div className="flex flex-col w-full">
                        <div className="flex flex-col py-5">
                            <div className="text-red-600 text-xl font-bold uppercase md:text-4xl">
                                {t('Skills.Developer')}
                            </div>
                            <div className="grid gap-10 grid-cols-3 py-5 sm:grid-cols-4 xl:grid-cols-7">
                                <div className="flex items-center justify-center">
                                    <Image
                                        src={'/static/icons/black/js.svg'}
                                        alt="JS"
                                        width={60}
                                        height={60}
                                        layout="fixed"
                                    />
                                </div>
                                <div className="flex items-center justify-center">
                                    <Image
                                        src={'/static/icons/black/python.svg'}
                                        alt="Python"
                                        width={60}
                                        height={60}
                                        layout="fixed"
                                    />
                                </div>
                                <div className="flex items-center justify-center">
                                    <Image
                                        src={'/static/icons/black/react.svg'}
                                        alt="React"
                                        width={60}
                                        height={60}
                                        layout="fixed"
                                    />
                                </div>
                                <div className="flex items-center justify-center">
                                    <Image
                                        src={'/static/icons/black/node-js.svg'}
                                        alt="NodeJS"
                                        width={60}
                                        height={60}
                                        layout="fixed"
                                    />
                                </div>
                                <div className="flex items-center justify-center">
                                    <Image
                                        src={'/static/icons/black/html5.svg'}
                                        alt="HTML5"
                                        width={60}
                                        height={60}
                                        layout="fixed"
                                    />
                                </div>
                                <div className="flex items-center justify-center">
                                    <Image
                                        src={'/static/icons/black/css3-alt.svg'}
                                        alt="CSS3"
                                        width={60}
                                        height={60}
                                        layout="fixed"
                                    />
                                </div>
                                <div className="flex items-center justify-center">
                                    <Image
                                        src={'/static/icons/black/sass.svg'}
                                        alt="SASS"
                                        width={60}
                                        height={60}
                                        layout="fixed"
                                    />
                                </div>
                                <div className="flex items-center justify-center">
                                    <Image
                                        src={'/static/icons/black/java.svg'}
                                        alt="Java"
                                        width={60}
                                        height={60}
                                        layout="fixed"
                                    />
                                </div>
                                <div className="flex items-center justify-center">
                                    <Image
                                        src={
                                            '/static/icons/black/MongoDB-01 1.svg'
                                        }
                                        alt="MongoDB"
                                        width={150}
                                        height={80}
                                        layout="fixed"
                                    />
                                </div>
                                <div className="flex items-center justify-center">
                                    <Image
                                        src={
                                            '/static/icons/black/Postgres-01 1.svg'
                                        }
                                        alt="PostgreSQL"
                                        width={60}
                                        height={60}
                                        layout="fixed"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col py-5">
                            <div className="text-red-600 text-xl font-bold uppercase md:text-4xl">
                                {t('Skills.Designer')}
                            </div>
                            <div className="grid gap-10 grid-cols-3 py-5 sm:grid-cols-4 xl:grid-cols-7">
                                <div className="flex items-center justify-center">
                                    <Image
                                        src={'/static/icons/black/figma.svg'}
                                        alt="Figma"
                                        width={60}
                                        height={60}
                                        layout="fixed"
                                    />
                                </div>
                                <div className="flex items-center justify-center">
                                    <Image
                                        src={
                                            '/static/icons/black/Illustrator_8. Illustrator 1.svg'
                                        }
                                        alt="Adobe Illustrator"
                                        width={60}
                                        height={60}
                                        layout="fixed"
                                    />
                                </div>
                                <div className="flex items-center justify-center">
                                    <Image
                                        src={
                                            '/static/icons/black/Photoshop_17. Photoshop 1.svg'
                                        }
                                        alt="Adobe Photoshop"
                                        width={60}
                                        height={60}
                                        layout="fixed"
                                    />
                                </div>
                                <div className="flex items-center justify-center">
                                    <Image
                                        src={
                                            '/static/icons/black/Lightroom Classic_Lightroom Classic 1.svg'
                                        }
                                        alt="Adobe Lightroom"
                                        width={60}
                                        height={60}
                                        layout="fixed"
                                    />
                                </div>
                                <div className="flex items-center justify-center">
                                    <Image
                                        src={
                                            '/static/icons/black/Premiere Pro_5 Premiere Pro 1.svg'
                                        }
                                        alt="Adobe Premiere Pro"
                                        width={60}
                                        height={60}
                                        layout="fixed"
                                    />
                                </div>
                                <div className="flex items-center justify-center">
                                    <Image
                                        src={
                                            '/static/icons/black/After Effects_2 After Effects 1.svg'
                                        }
                                        alt="Adobe After Effects"
                                        width={60}
                                        height={60}
                                        layout="fixed"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col py-5">
                            <div className="text-red-600 text-xl font-bold uppercase md:text-4xl">
                                {t('Skills.Other')}
                            </div>
                            <div className="grid gap-10 grid-cols-3 py-5 sm:grid-cols-4 xl:grid-cols-7">
                                <div className="flex items-center justify-center">
                                    <Image
                                        src={'/static/icons/black/jira.svg'}
                                        alt="Jira"
                                        width={60}
                                        height={60}
                                        layout="fixed"
                                    />
                                </div>
                                <div className="flex items-center justify-center">
                                    <Image
                                        src={'/static/icons/black/trello.svg'}
                                        alt="Trello"
                                        width={60}
                                        height={60}
                                        layout="fixed"
                                    />
                                </div>
                                <div className="flex items-center justify-center">
                                    <Image
                                        src={'/static/icons/black/slack.svg'}
                                        alt="Slack"
                                        width={60}
                                        height={60}
                                        layout="fixed"
                                    />
                                </div>
                                <div className="flex items-center justify-center">
                                    <Image
                                        src={'/static/icons/black/discord.svg'}
                                        alt="Discord"
                                        width={60}
                                        height={60}
                                        layout="fixed"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
            <div className="min-w-screen absolute -bottom-64 w-full">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                    viewBox="0 0 1440 320"
                    width="100%"
                    height="320">
                    <path
                        fill="rgba(243, 244, 246, 1)"
                        fillOpacity="1"
                        d="M0,160L80,165.3C160,171,320,181,480,181.3C640,181,800,171,960,176C1120,181,1280,203,1360,213.3L1440,224L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
                </svg>
            </div>
        </div>
    )
}

export default withTranslation('common')(Skills)
