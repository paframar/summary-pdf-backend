import { View, Text } from "react-native";
import styles from '../../styles'

const PageTitle = ({joint, pageTitle, style}) => {
    return (
        <View style={[styles.pageTitle, style]}>
            <Text style={styles.pageTitleText}>
                {pageTitle}
            </Text>
            <View style={styles.pageTitleCircle} />
        </View>
    )
}

export default PageTitle