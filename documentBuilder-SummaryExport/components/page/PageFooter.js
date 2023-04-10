import { View, Text } from "react-native";
import styles from '../../styles'

const PageFooter = ({pageNumber}) => {

    return (
        <View style={[styles.pageFooter]}>
            <View style={{flexDirection: 'row'}}>
                <View style={styles.pageDisclamer}>
                    <Text style={styles.pageDisclamerText}>
                        {`Where appropriate this statement assumes that all contributions due have been received. The current values quoted are for illustrative purposes only. Should you decide to encash or transfer all or part of any plan, the value will be that applicable at the date of encashment or transfer and may be subject to charges set out in the Plan Conditions or other equivalent documents.`}
                    </Text> 
                </View>
                <View style={styles.footerCircle} />
                <View style={styles.footerSeparator} />
                <View style={styles.pageNumber}>
                    <Text style={styles.pageNumberText}>
                            {`Page #${pageNumber}`}
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default PageFooter