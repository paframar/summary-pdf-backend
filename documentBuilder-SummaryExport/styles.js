import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    
    // PAGE
    cover:{
        width: 595,
        height: 842,
        borderWidth:1,
        justifyContent:'flex-start',
    },

    page:{
        width: 595,
        height: 842,
        borderWidth:1,
        justifyContent:'space-between',
    },

    // COVER
    coverHeader:{
        height: 154,
    },
    coverClientInformation:{
        marginTop: 29,
        width:237,
    },
    coverHeaderTextBold:{
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 11,
        color: '#000',
        fontStyle: 'normal',
        letterSpacing: 'normal',
        fontStretch: 'normal',
        // fontWeight: 'bold',
    },
    coverHeaderText:{
        fontFamily: 'Montserrat-Regular',
        fontSize: 11,
        fontStyle: 'normal',
        color: '#000',
        // letterSpacing: 'normal',
        // fontWeight: 'bold',
        // fontStretch: 'normal',
        // lineHeight: 'normal',
    },
    coverImage:{
        height: 144,
        width: '100%',
    },
    coverTitleContainer:{
        height: 472,
    },
    coverTitleText:{
        height: 43,
        marginTop: 37,
        marginLeft: 34,
        fontFamily: 'Montserrat-Bold',
        fontSize: 35,
        color: '#000',
        fontWeight: '800',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
    },
    coverTitleText2:{
        height: 33,
        marginTop: 10,
        marginLeft: 34,
        fontFamily:'Montserrat-Regular', // MontserratRoman
        fontSize: 25,
        color: '#000',
        letterSpacing: 'normal',
        fontStyle:'normal',
        fontStretch:'normal',
        // lineHeight: 1.3,
    },
    coverTitleText3:{
        height: 26,
        marginTop: 10,
        marginLeft: 34,
        fontFamily:'Montserrat-Regular', // MontserratRoman
        fontSize: 17,
        color: '#000',
        fontWeight: 500,
        letterSpacing: 'normal',
        fontStyle:'normal',
        fontStretch:'normal',
        // lineHeight: 1.53,  
    },
    coverFooter:{
        height: 72,
    },
    coverAdvisorInformation:{
        height: 72,
        marginLeft: 439,
    },
    coverFooterText:{
        fontFamily:'Montserrat-Regular',
        color: '#15284b',
        fontSize: 9,
    },

    // page
    pageHeader:{
        height: 112,
    },
    pageImage:{
        height: 40,
        top: 41,
        left: 65,
    },

    pageBody:{
        height: 662,
    },

    pageTitle:{
        height: 38,
        width: 465,
        marginLeft: 65,
        borderColor: '#15284b',
        borderBottomWidth: 1.2,
    },
    pageTitleCircle:{
        backgroundColor: '#15284b',
        borderWidth: 3,
        height:10,
        width:10,
        borderRadius: 50,
        top: 8,
    },
    pageTitleText:{        
        fontFamily: 'Montserrat-Bold',
        fontSize: 20,
        fontStyle: 'normal',
        textAlign: 'right',
        color: '#15284b',
    },

    clientNameTitles:{
        marginTop: 9,
        width: 178,
        height: 24,
        flexDirection:'row',
    },
    clientNameTitleText:{
        fontFamily: 'Montserrat-Regular',
        color: '#15284b',
        fontSize: 13,
    },
    clientNameTitleIcon:{
        top: 5,
        left: 8,
    },

    pageSubsectionTitle:{
        width:209,
        height: 19,
        fontFamily: 'Montserrat-Medium',
        fontSize: 16,
        color: 'rgba(21, 40, 75,0.53)', // #15284b
    },

    pageField:{
        flexDirection:'row',

    },
    pageFieldJoint:{
        flexDirection:'column',
    },

    pageFieldTitle:{
        marginRight:47,
        width:209,
        fontFamily: 'Montserrat-Bold',
        fontSize: 11,
        color: '#000',
    },
    pageFieldData:{
        width:209,
        fontFamily: 'Montserrat-Regular',
        fontSize: 11,
        color: 'rgba(0, 0, 0, 0.7)',
    },

    // footer
    pageFooter:{
        height: 68,
        width: 595,
    },
    footerSeparator:{
        height: 36,
        marginTop:30,
        width:1,
        backgroundColor:'rgba(21, 40, 75,0.15)',
    },
    footerCircle:{
        borderColor:'rgba(21, 40, 75,0.15)',
        borderWidth: 3,
        height:5,
        width:5,
        borderRadius: 50,
        top: 24,
        left: 3.5,
    },

    pageDisclamer:{
        width: 431,
        flexDirection:'row',
        justifyContent:'flex-end',
    },
    pageDisclamerText:{
        fontFamily: 'Montserrat-Regular',
        textAlign:'justify',
        fontSize: 7,
        paddingLeft: 59,
        paddingRight:19,
        paddingTop:24,

    },
    pageNumber:{
        width: 141,
        paddingRight: 65,
        paddingLeft: 17,
    },
    pageNumberText:{
        fontFamily: 'Montserrat-Regular',
        fontSize: 10,
        textAlign: 'right',
        color: 'rgba(0, 0, 0, 0.7)',
        paddingTop:24,

    },
})

export default styles