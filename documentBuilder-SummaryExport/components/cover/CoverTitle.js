import { View, Text } from "react-native";
import moment from 'moment'
import styles from '../../styles'

const CoverTitle = ({ coverTitleText, coverTitleText2, coverTitleText3 }) => {

    return (
        <View style={styles.coverTitleContainer}>
            { coverTitleText ? (
                <Text style={styles.coverTitleText}>
                    {coverTitleText}
                </Text>
            ) : null }

            { coverTitleText2 ? (
                <Text style={styles.coverTitleText2}>
                    {coverTitleText2}
                </Text>
            ) : null }


            { coverTitleText3 ? (
                <Text style={styles.coverTitleText3}>
                    {coverTitleText3}
                </Text>
            ) : null }
        </View>
    )
}

export default CoverTitle