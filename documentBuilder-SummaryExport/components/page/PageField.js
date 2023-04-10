import { View, Text } from "react-native";
import styles from '../../styles'

const PageField = ({joint, title, data, style}) => {
    return joint ? (
        <View style={[ { flexDirection:'row' }, style]}>
        
            <View style={[ { flexDirection:'column' }]}>
                <Text style={[styles.pageFieldTitle]}>
                    {title}
                </Text> 

                <Text style={styles.pageFieldData}>
                    {data.client1}
                </Text>
            </View>

            <View style={[ { flexDirection:'column' }]}>
                <Text style={[styles.pageFieldTitle]}>
                    {title}
                </Text> 

                <Text style={styles.pageFieldData}>
                    {data.client2}
                </Text>
            </View>
            
        </View>

    ) : (
        
        <View style={[ { flexDirection:'row' }, style]}>
            <Text style={styles.pageFieldTitle}>
                {title}
            </Text> 

            <Text style={styles.pageFieldData}>
                {data.client1}
            </Text>
        </View>
    )
    
}

export default PageField