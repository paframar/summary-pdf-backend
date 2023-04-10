import { View } from "react-native";
import styles from '../../styles'

const PageBody = ({children}) => {

    return (
        <View style={styles.pageBody}>
            {children}
        </View>
    )
}

export default PageBody