import { View, Image } from "react-native";
import styles from '../../styles'

const PageHeader = ({pageImage}) => {
    return (
        <View style={styles.pageHeader}>
            <Image source={pageImage} style={styles.pageImage} />
        </View>
    )
}

export default PageHeader