import Image from 'next/image'

import { withTranslation } from '../../../i18n'
import Layout from '../../general/Layout'

const Gallery = ({ t }) => {
    return (
        <Layout>
            <div
                id="Gallery"
                className="flex flex-col items-center justify-center w-full min-h-screen">
                <Image
                    src="https://source.unsplash.com/2ShvY8Lf6l0/800x599"
                    alt="Logo"
                    width={599}
                    height={800}
                    priority
                />
            </div>
        </Layout>
    )
}

export default withTranslation('common')(Gallery)
