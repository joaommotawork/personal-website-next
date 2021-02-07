import Image from 'next/image'
import Slide from 'react-reveal/Slide'

import { withTranslation } from '../../../i18n'
import Layout from '../../general/Layout'

const Skills = ({ t }) => {
    return (
        <div className="relative h-full mb-64 bg-gray-100">
            <Layout>
                <div
                    id="Skills"
                    className="flex flex-col items-center justify-center w-full min-h-screen">
                    <div className="flex flex-col w-full">
                        <div className="flex flex-col py-5">
                            <Slide right>
                                <div className="text-xl font-bold text-red-600 uppercase md:text-4xl">
                                    {t('Skills.Developer')}
                                </div>
                                <div className="grid grid-cols-3 gap-10 py-5 sm:grid-cols-4 xl:grid-cols-7">
                                    <div className="flex items-center justify-center">
                                        <Image
                                            src={'/static/icons/black/js.svg'}
                                            alt="JavaScript"
                                            width={60}
                                            height={60}
                                            layout="fixed"
                                        />
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <Image
                                            src={
                                                '/static/icons/black/typecript.svg'
                                            }
                                            alt="TypeScript"
                                            width={60}
                                            height={60}
                                            layout="fixed"
                                        />
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <Image
                                            src={
                                                '/static/icons/black/react.svg'
                                            }
                                            alt="React"
                                            width={60}
                                            height={60}
                                            layout="fixed"
                                        />
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <Image
                                            src={
                                                '/static/icons/black/node-js.svg'
                                            }
                                            alt="NodeJS"
                                            width={60}
                                            height={60}
                                            layout="fixed"
                                        />
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <Image
                                            src={
                                                '/static/icons/black/html5.svg'
                                            }
                                            alt="HTML5"
                                            width={60}
                                            height={60}
                                            layout="fixed"
                                        />
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <Image
                                            src={
                                                '/static/icons/black/css3-alt.svg'
                                            }
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
                                            src={
                                                '/static/icons/black/graphql.svg'
                                            }
                                            alt="GraphQL"
                                            width={60}
                                            height={60}
                                            layout="fixed"
                                        />
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <Image
                                            src={
                                                '/static/icons/black/redux.svg'
                                            }
                                            alt="Redux"
                                            width={60}
                                            height={60}
                                            layout="fixed"
                                        />
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <Image
                                            src={
                                                '/static/icons/black/webpack.svg'
                                            }
                                            alt="Webpack"
                                            width={60}
                                            height={60}
                                            layout="fixed"
                                        />
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <Image
                                            src={
                                                '/static/icons/black/gatsbyjs.svg'
                                            }
                                            alt="GatsbyJS"
                                            width={60}
                                            height={60}
                                            layout="fixed"
                                        />
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <Image
                                            src={
                                                '/static/icons/black/vscode.svg'
                                            }
                                            alt="Visual Studio Code"
                                            width={60}
                                            height={60}
                                            layout="fixed"
                                        />
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <Image
                                            src={
                                                '/static/icons/black/git-alt.svg'
                                            }
                                            alt="Git"
                                            width={60}
                                            height={60}
                                            layout="fixed"
                                        />
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <Image
                                            src={
                                                '/static/icons/black/nextjs.svg'
                                            }
                                            alt="NextJS"
                                            width={150}
                                            height={80}
                                            layout="fixed"
                                        />
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <Image
                                            src={
                                                '/static/icons/black/github.svg'
                                            }
                                            alt="GitHub"
                                            width={60}
                                            height={60}
                                            layout="fixed"
                                        />
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <Image
                                            src={
                                                '/static/icons/black/python.svg'
                                            }
                                            alt="Python"
                                            width={60}
                                            height={60}
                                            layout="fixed"
                                        />
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <Image
                                            src={
                                                '/static/icons/black/mysql.svg'
                                            }
                                            alt="MySQL"
                                            width={150}
                                            height={80}
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
                                                '/static/icons/black/postgresql.svg'
                                            }
                                            alt="PostgreSQL"
                                            width={60}
                                            height={60}
                                            layout="fixed"
                                        />
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <Image
                                            src={
                                                '/static/icons/black/mongodb.svg'
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
                                                '/static/icons/black/python.svg'
                                            }
                                            alt="Python"
                                            width={60}
                                            height={60}
                                            layout="fixed"
                                        />
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <Image
                                            src={
                                                '/static/icons/black/terminal.svg'
                                            }
                                            alt="Terminal"
                                            width={60}
                                            height={60}
                                            layout="fixed"
                                        />
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <Image
                                            src={
                                                '/static/icons/black/macos.svg'
                                            }
                                            alt="MacOS"
                                            width={60}
                                            height={60}
                                            layout="fixed"
                                        />
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <Image
                                            src={
                                                '/static/icons/black/linux.svg'
                                            }
                                            alt="Linux"
                                            width={60}
                                            height={60}
                                            layout="fixed"
                                        />
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <Image
                                            src={
                                                '/static/icons/black/archlinux.svg'
                                            }
                                            alt="Arch Linux"
                                            width={60}
                                            height={60}
                                            layout="fixed"
                                        />
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <Image
                                            src={
                                                '/static/icons/black/ubuntu.svg'
                                            }
                                            alt="Ubuntu"
                                            width={60}
                                            height={60}
                                            layout="fixed"
                                        />
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <Image
                                            src={
                                                '/static/icons/black/windows.svg'
                                            }
                                            alt="Windows"
                                            width={60}
                                            height={60}
                                            layout="fixed"
                                        />
                                    </div>
                                </div>
                            </Slide>
                        </div>
                        <div className="flex flex-col py-5">
                            <Slide right>
                                <div className="text-xl font-bold text-red-600 uppercase md:text-4xl">
                                    {t('Skills.Designer')}
                                </div>
                                <div className="grid grid-cols-3 gap-10 py-5 sm:grid-cols-4 xl:grid-cols-7">
                                    <div className="flex items-center justify-center">
                                        <Image
                                            src={
                                                '/static/icons/black/figma.svg'
                                            }
                                            alt="Figma"
                                            width={60}
                                            height={60}
                                            layout="fixed"
                                        />
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <Image
                                            src={
                                                '/static/icons/black/adobe-illustrator.svg'
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
                                                '/static/icons/black/adobe-photoshop.svg'
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
                                                '/static/icons/black/adobe-lightroom.svg'
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
                                                '/static/icons/black/adobe-premiere-pro.svg'
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
                                                '/static/icons/black/adobe-after-effects.svg'
                                            }
                                            alt="Adobe After Effects"
                                            width={60}
                                            height={60}
                                            layout="fixed"
                                        />
                                    </div>
                                </div>
                            </Slide>
                        </div>
                        <div className="flex flex-col py-5">
                            <Slide right>
                                <div className="text-xl font-bold text-red-600 uppercase md:text-4xl">
                                    {t('Skills.Other')}
                                </div>
                                <div className="grid grid-cols-3 gap-10 py-5 sm:grid-cols-4 xl:grid-cols-7">
                                    <div className="flex items-center justify-center">
                                        <Image
                                            src={
                                                '/static/icons/black/agile.svg'
                                            }
                                            alt="Agile"
                                            width={60}
                                            height={80}
                                            layout="fixed"
                                        />
                                    </div>
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
                                            src={
                                                '/static/icons/black/trello.svg'
                                            }
                                            alt="Trello"
                                            width={60}
                                            height={60}
                                            layout="fixed"
                                        />
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <Image
                                            src={
                                                '/static/icons/black/slack.svg'
                                            }
                                            alt="Slack"
                                            width={60}
                                            height={60}
                                            layout="fixed"
                                        />
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <Image
                                            src={
                                                '/static/icons/black/discord.svg'
                                            }
                                            alt="Discord"
                                            width={60}
                                            height={60}
                                            layout="fixed"
                                        />
                                    </div>
                                </div>
                            </Slide>
                        </div>
                    </div>
                </div>
            </Layout>
            <div className="absolute w-full min-w-screen -bottom-64">
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
