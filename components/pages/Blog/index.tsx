import Image from 'next/image'

import { withTranslation } from '../../../i18n'
import Layout from '../../general/Layout'

const Blog = ({ t }) => {
    return (
        <Layout>
            <div
                id="Blog"
                className="flex flex-col items-center justify-center w-full min-h-screen"></div>
        </Layout>
    )
}

export default withTranslation('common')(Blog)
