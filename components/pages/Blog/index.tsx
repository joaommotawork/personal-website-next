import Image from 'next/image'

import { withTranslation } from '../../../i18n'
import Layout from '../../general/Layout'

const Blog = ({ t }) => {
    return (
        <Layout>
            <div
                id="Blog"
                className="min-h-screen w-full flex flex-col items-center justify-center"></div>
        </Layout>
    )
}

export default withTranslation('common')(Blog)
