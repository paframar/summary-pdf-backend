import { View, Text } from "react-native";
import moment from 'moment'
import styles from '../../styles'



const CoverFooter = ({advisorData}) => {

    return (
        <View style={[styles.coverFooter]}>
            <View style={styles.coverAdvisorInformation}>
                <Text style={[styles.coverFooterText, { marginTop: 5}]}>
                    {`Document date: ${moment().format('DD-MM-YYYY')}`} 
                </Text>
                <Text style={[styles.coverFooterText, { marginTop: 5}]}>
                    {`Advisor: ${advisorData.advisorName}`}
                </Text>
                <Text style={[styles.coverFooterText, { marginTop: 5}]}>
                    {advisorData.practiceName}
                </Text>
            </View>
        </View>
    )
}

export default CoverFooter