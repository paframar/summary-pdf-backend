import { View, Text, Image } from "react-native";
import styles from '../../styles'
import triangleIcon from '../../../assets/images/icon-arrow-full-down.png'

const ClientNameTitles = ({names, style}) => {
    return (
        <View style={[ styles.clientNameTitles, { marginLeft: 65 } ]}>
            <View style={[ styles.clientNameTitles ]}>
                    <Text style={styles.clientNameTitleText}>
                        {names.client1}
                    </Text>
                    <Image 
                        style={styles.clientNameTitleIcon} 
                        source={triangleIcon} 
                    />
            </View>
            <View style={[ styles.clientNameTitles, { marginLeft: 78 } ]}>
                    <Text style={styles.clientNameTitleText}>
                        {names.client2}
                    </Text>
                    <Image 
                        style={styles.clientNameTitleIcon} 
                        source={triangleIcon} 
                    />
            </View>
        </View>
    )
}

export default ClientNameTitles