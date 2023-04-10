import { View, Text } from "react-native";
import moment from 'moment'
import styles from '../../styles'

const CoverHeader = ({ advisorData, clientData, joint }) => {

    return joint ? (
        <View style={[styles.coverHeader]}>
            <View style={{ flexDirection: 'row' }}>
                <View style={[styles.coverClientInformation, { marginLeft: 34}]}>
                    <Text style={styles.coverHeaderTextBold}>
                        {`${clientData.client1.fullName}`}
                    </Text>
                    <Text style={[styles.coverHeaderText, { marginTop: 12}]}>
                        {`${clientData.client1.telephone}`}
                    </Text>
                    <Text style={[styles.coverHeaderText, { marginTop: 6}]}>
                        {`${clientData.client1.email}`}
                    </Text>
                    <Text style={[styles.coverHeaderText, { marginTop: 6}]}>
                        {`${clientData.client1.homeAddress}`}
                    </Text>
                </View>

                <View style={[styles.coverClientInformation, { marginLeft: 55}]}>
                    <Text style={[styles.coverHeaderTextBold]}>
                        {`${clientData.client2.fullName}`}
                    </Text>
                    <Text style={[styles.coverHeaderText, { marginTop: 12}]}>
                        {`${clientData.client2.telephone}`}
                    </Text>
                    <Text style={[styles.coverHeaderText, { marginTop: 6}]}>
                        {`${clientData.client2.email}`}
                    </Text>
                    <Text style={[styles.coverHeaderText, { marginTop: 6}]}>
                        {`${clientData.client2.homeAddress}`}
                    </Text>
                </View>
            </View>
        </View>
    ) : (
        <View style={[styles.coverHeader]}>
            <View style={{ flexDirection: 'row' }}>
                <View style={[styles.coverClientInformation, { marginLeft: 326}]}>
                    <Text style={styles.coverHeaderTextBold}>
                        {`${clientData.client1.fullName}`}
                    </Text>
                    <Text style={[styles.coverHeaderText, { marginTop: 12}]}>
                        {`${clientData.client1.telephone}`}
                    </Text>
                    <Text style={[styles.coverHeaderText, { marginTop: 6}]}>
                        {`${clientData.client1.email}`}
                    </Text>
                    <Text style={[styles.coverHeaderText, { marginTop: 6}]}>
                        {`${clientData.client1.homeAddress}`}
                    </Text>
                    
                </View>
            </View>
        </View>

    )
}

export default CoverHeader