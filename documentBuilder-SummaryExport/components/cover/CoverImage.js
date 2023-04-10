

import { View, Text, Image } from "react-native";
import moment from 'moment'
import styles from '../../styles'

const CoverImage = ({coverImage}) => {

    return (
        <View style={styles.coverImage}>
            <Image source={coverImage} />
        </View>
    )
}

export default CoverImage


