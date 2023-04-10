import { View, Text} from "react-native";

import Cover from './components/cover'
import Page from "./components/page";

const SummaryExport = ({ pages }) => {
    return pages.map((page)=>{
        if(page.name === 'Cover') return <View style={{ paddingVertical: 20}}>
                <Cover page={page} />
            </View>
        
        return <View style={{ paddingVertical: 20}}>
                <Page page={page} />
            </View>
        }
    )
}

export default SummaryExport