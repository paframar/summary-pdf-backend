import { View } from 'react-native'
import styles from '../../styles'

import PageHeader from './PageHeader'
import PageTitle from './PageTitle'
import PageField from './PageField'
import PageBody from './PageBody'
import PageSubsectionTitle from './PageSubsectionTitle'
import ClientNameTitles from './ClientNameTitles'
import PageFooter from './PageFooter'

import pageImage from '../../../assets/images/summaryExportPage.png'

const Page = ({page, joint}) => {

    const pageComponents = {
        PageTitle,
        PageSubsectionTitle,
        ClientNameTitles,
        PageField,
    }

    return (
        <View style={styles.page} >

            <PageHeader pageImage={pageImage} />

            <PageBody>
                {
                    page.components.map((component)=> {
                        const PageComponent = pageComponents[component.name]
                        if (component.dontRender) return
                        return (
                            <PageComponent {...component.props} />
                        )
                    })
                }
            </PageBody>

            <PageFooter pageNumber={page.pageNumber} />

        </View>
    )
}

export default Page