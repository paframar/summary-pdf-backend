import CoverHeader from "./CoverHeader";
import CoverImage from './CoverImage';
import CoverTitle from "./CoverTitle";
import CoverFooter from "./CoverFooter";
import styles from '../../styles'

import { View , Text } from 'react-native'


const Cover = ({page}) => {

    const pageComponents = {
        CoverHeader,
        CoverImage,
        CoverTitle,
        CoverFooter,
    }

    return (
        <View style={styles.cover}>
            {
                page.components.map((component)=> {
                    const PageComponent = pageComponents[component.name]
                    if (component.dontRender) return
                    return (
                        <PageComponent {...component.props} />
                    )
                })
            }

            {/* <CoverHeader advisorData={advisorData} personalDetails={personalDetails} />

            <CoverImage coverImage={coverImage} />

            <CoverTitle />

            <CoverFooter advisorData={advisorData} /> */}
        </View>
    )
}

export default Cover