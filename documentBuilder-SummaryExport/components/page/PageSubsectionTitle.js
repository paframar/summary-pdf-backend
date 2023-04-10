import { View, Text } from "react-native";
import styles from '../../styles'

const PageSubsectionTitle = ({joint, title, style}) => {
    return joint ? (
        <View style={{ flexDirection: 'row'}}>
            <Text style={[styles.pageSubsectionTitle, style, { marginLeft: 65 }]}>
                {title}
            </Text>
            <Text style={[styles.pageSubsectionTitle, style, { marginLeft: 47 }]}>
                {title}
            </Text>
        </View>
    ) : (
        <Text style={[styles.pageSubsectionTitle, style]}>
            {title}
        </Text>
    )
}

export default PageSubsectionTitle