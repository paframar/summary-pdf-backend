const moment = require('moment');

const getData = (pathArray, meeting) => {
    let fieldData = meeting
    pathArray.map((key)=>{
        fieldData = fieldData[key]
    })
    return fieldData       
}

const getFieldData = (pathArray, meeting, unanswered = true) => {
    
    const fieldData = getData(pathArray, meeting)
    if ( fieldData === "" && unanswered ) return 'Unanswered'

    let furtherDataPath = []
    
    switch (pathArray[pathArray.length-1]){

        case 'sufferingFromAnyMedicalConditions':

            if (fieldData === 'Yes'){
                furtherDataPath = pathArray
                furtherDataPath.pop()
                furtherDataPath.push('sufferingFromAnyMedicalConditionsPleaseProvideDetails')
                return getData(furtherDataPath, meeting)
            } else return fieldData

        case 'isYourJobOrHobbiesDangerous':

            if (fieldData === 'Yes'){
                furtherDataPath = pathArray
                furtherDataPath.pop()
                furtherDataPath.push('isYourJobOrHobbiesDangerousPleaseProvideDetails')
                return getData(furtherDataPath, meeting)
            } else return fieldData
        
        case 'riskLevel': 

            furtherDataPath = pathArray
            furtherDataPath.pop()
            furtherDataPath.push('description')
            return getData(furtherDataPath, meeting)
        
        case 'taxResidency':
            let res 
            furtherDataPath = pathArray
            furtherDataPath.pop()

            if (fieldData === 'United Kingdom'){
                res = 'Domiciled in the UK.'
            }

        default:

            return fieldData

    }
}

const pageSchemas = (meeting, user, coverImage, pageImage) => {
    // const joint = meeting.PersonalDetails['Client2'] !== null
    const joint = true
    // const joint = false
    console.log('-----------  joint meeting = ', joint)

    return ([
        { // [0]: 'Cover'
            name: 'Cover',
            partials: [
                { // CoverHeader
                    name: 'CoverHeader',
                    props: {
                        joint,
                        clientData:{
                            client1: { 
                                fullName: `${getFieldData(['PersonalDetails', 'Client1', 'title'], meeting, false)} ${getFieldData(['PersonalDetails', 'Client1', 'firstName'], meeting, false)} ${getFieldData(['PersonalDetails', 'Client1', 'lastName'], meeting, false)}`,
                                telephone: getFieldData(['PersonalDetails', 'Client1', 'telephone1'], meeting, false ),
                                email: getFieldData(['PersonalDetails', 'Client1', 'email2'], meeting, false),
                                homeAddress: `${getFieldData(['PersonalDetails', 'homeAddress', 'BuildingName'], meeting)}, ${getFieldData(['PersonalDetails', 'homeAddress', 'Line1'], meeting)}, ${getFieldData(['PersonalDetails', 'homeAddress', 'Line2'], meeting)},\n${getFieldData(['PersonalDetails', 'homeAddress',  'CountryName'], meeting)}, ${getFieldData(['PersonalDetails', 'homeAddress',  'PostalCode'], meeting)}`,
                            }, 
                            client2: { 
                                fullName: `${getFieldData(['PersonalDetails', 'Client2', 'title'], meeting, false)} ${getFieldData(['PersonalDetails', 'Client2', 'firstName'], meeting, false)} ${getFieldData(['PersonalDetails', 'Client2', 'lastName'], meeting, false)}`,
                                telephone: getFieldData(['PersonalDetails', 'Client2', 'telephone1'], meeting, false),
                                email: getFieldData(['PersonalDetails', 'Client2', 'email2'], meeting,false),
                                homeAddress: `${getFieldData(['PersonalDetails', 'Client2','homeAddress', 'BuildingName'], meeting)}, ${getFieldData(['PersonalDetails', 'Client2','homeAddress', 'Line1'], meeting)}, ${getFieldData(['PersonalDetails', 'homeAddress', 'Line2'], meeting)},\n${getFieldData(['PersonalDetails', 'Client2','homeAddress',  'CountryName'], meeting)}, ${getFieldData(['PersonalDetails', 'Client2','homeAddress',  'PostalCode'], meeting)}`,
                            },
                        }
                    },
                },
                { // CoverImage
                    name: 'CoverImage',
                    props: {
                        coverImage,
                    },
                },
                { // CoverTitle
                    name: 'CoverTitle',
                    props: {
                        coverTitleText: 'Client Summary',
                        coverTitleText2: 'Private & confidential',
                        coverTitleText3: '',
                    },
                },
                { // CoverFooter
                    name: 'CoverFooter',
                    props: {
                        advisorData: user.data,
                        documentDate: moment().format('DD-MM-YYYY'),
                    },
                },
            ],
        },
        // { // [1]: Objectives 
        //     name: 'Objectives',
        //     pageNumber: 1,
        //     partials: [
        //         {
        //             name: 'PageTitle',
        //             props: {
        //                 pageTitle: 'Objectives',
        //             },
        //         },
        //         {
        //             name: 'PageField',
        //             props: {
        //                 title: 'General',
        //                 data:  {
        //                     client1: getFieldData(['objectives', 'General Objectives'], meeting),
        //                     client2: getFieldData(['objectives', 'General Objectives'], meeting),
        //                 },
        //                 style: { marginTop: 28, marginLeft: 65 },
        //             },
        //         },
        //         {
        //             name: 'PageField',
        //             props: {
        //                 title: 'Inheritance & Estate',
        //                 data:  {
        //                     client1: getFieldData(['objectives', 'Inheritance & Estate'], meeting),
        //                     client2: getFieldData(['objectives', 'Inheritance & Estate'], meeting),
        //                 },
        //                 style: { marginTop: 24, marginLeft: 65 },
        //             },
        //         },
        //         {
        //             name: 'PageField',
        //             props: {
        //                 title: 'Savings & Investments',
        //                 data:  {
        //                     client1: getFieldData(['objectives', 'Savings & Investments'], meeting),
        //                     client2: getFieldData(['objectives', 'Savings & Investments'], meeting),
        //                 },
        //                 style: { marginTop: 24, marginLeft: 65 },
        //             },
        //         },
        //         {
        //             name: 'PageField',
        //             props: {
        //                 title: 'Retirement',
        //                 data:  {
        //                     client1: getFieldData(['objectives', 'Retirement'], meeting),
        //                     client2: getFieldData(['objectives', 'Retirement'], meeting),
        //                 },
        //                 style: { marginTop: 24, marginLeft: 65 },
        //             },
        //         },
        //     ],
        // },
        // { // [2]: Personal Details
        //     name: 'PersonalDetails',
        //     pageNumber: 2,
        //     partials: [
        //         { // Personal Details
        //             name: 'PageTitle',
        //             props: {
        //                 joint,
        //                 pageTitle: 'Personal Details',
        //             },
        //         },
        //         { // ClientNameTitles
        //             name:'ClientNameTitles',
        //             dontRender: !joint,
        //             props:{
        //                 names:  {
        //                     client1: getFieldData(['PersonalDetails', 'Client1', 'fullName'], meeting),
        //                     client2: getFieldData(['PersonalDetails', 'Client2', 'fullName'], meeting),
        //                 },
        //                 style: {},
        //             },
        //         },
        //         { // Basic details
        //             name: 'PageSubsectionTitle',
        //             props: {
        //                 joint,
        //                 title: 'Basic details',
        //                 style: joint 
        //                     ? { marginTop: 13 } 
        //                     : { marginTop: 28, marginLeft:65 },
        //             },
        //         },
        //         { // Full Name:
        //             name:  'PageField',
        //             props: {
        //                 joint,
        //                 title: 'Full Name:',
        //                 data:  {
        //                     client1: getFieldData(['PersonalDetails', 'Client1', 'fullName'], meeting),
        //                     client2: getFieldData(['PersonalDetails', 'Client2', 'fullName'], meeting),
        //                 },
        //                 style: joint 
        //                     ? {marginTop: 19 , marginLeft:65 } 
        //                     : { marginTop: 14, marginLeft:65 },
        //             },
        //         },
        //         { // Date of birth:
        //             name: 'PageField',
        //             props: {
        //                 joint,
        //                 title: 'Date of birth:',
        //                 data:  {
        //                     client1: getFieldData(['PersonalDetails', 'Client1', 'dateOfBirth'], meeting),
        //                     client2: getFieldData(['PersonalDetails', 'Client2', 'dateOfBirth'], meeting),
        //                 },
        //                 style: { marginTop: 24, marginLeft:65 },
        //             },
        //         },
        //         { // Gender:
        //             name: 'PageField',
        //             props: {
        //                 joint,
        //                 title: 'Gender:',
        //                 data:  {
        //                     client1: getFieldData(['PersonalDetails', 'Client1', 'gender'], meeting),
        //                     client2: getFieldData(['PersonalDetails', 'Client2', 'gender'], meeting),
        //                 },
        //                 style: { marginTop: 24, marginLeft:65 },
        //             },
        //         },
        //         { // Nationality:
        //             name: 'PageField',
        //             props: {
        //                 joint,
        //                 title: 'Nationality:',
        //                 data:  {
        //                     client1: getFieldData(['PersonalDetails', 'Client1', 'nationality'], meeting),
        //                     client2: getFieldData(['PersonalDetails', 'Client2', 'nationality'], meeting),
        //                 },
        //                 style: { marginTop: 24, marginLeft:65 },
        //             },
        //         },
        //         { // Marital Status:
        //             name: 'PageField',
        //             props: {
        //                 joint,
        //                 title: 'Marital Status:',
        //                 data:  {
        //                     client1: getFieldData(['PersonalDetails', 'Client1', 'maritalStatus'], meeting),
        //                     client2: getFieldData(['PersonalDetails', 'Client2', 'maritalStatus'], meeting),
        //                 },
        //                 style: { marginTop: 24, marginLeft:65 },
        //             },
        //         },
        //         { // Natural Insurance #:
        //             name: 'PageField',
        //             props: {
        //                 joint,
        //                 title: 'Natural Insurance #:',
        //                 data:  {
        //                     client1: getFieldData(['PersonalDetails', 'Client1', 'nationalInsuranceNumber'], meeting),
        //                     client2: getFieldData(['PersonalDetails', 'Client2', 'nationalInsuranceNumber'], meeting),
        //                 },
        //                 style: { marginTop: 24, marginLeft:65 },
        //             },
        //         },
        //         { // Contact details
        //             name: 'PageSubsectionTitle',
        //             props: {
        //                 joint,
        //                 title: 'Contact details',
        //                 style: joint 
        //                     ? { marginTop: 41 } 
        //                     : { marginTop: 28, marginLeft:65 },

        //             },
        //         },
        //         { // Mobile Telephone:
        //             name: 'PageField',
        //             props: {
        //                 joint,
        //                 title: 'Mobile Telephone:',
        //                 data:  {
        //                     client1: getFieldData(['PersonalDetails', 'Client1', 'telephone1'], meeting),
        //                     client2: getFieldData(['PersonalDetails', 'Client2', 'telephone1'], meeting),
        //                 },
        //                 style: joint 
        //                     ? {marginTop: 19 , marginLeft:65 } 
        //                     : { marginTop: 14, marginLeft:65 },
        //             },
        //         },
        //         { // Home Telephone:
        //             name: 'PageField',
        //             props: {
        //                 joint,
        //                 title: 'Home Telephone:',
        //                 data:  {
        //                     client1: getFieldData(['PersonalDetails', 'Client1', 'telephone1'], meeting),
        //                     client2: getFieldData(['PersonalDetails', 'Client2', 'telephone1'], meeting),
        //                 },
        //                 style: { marginTop: 24, marginLeft:65 },
        //             },
        //         },
        //         { // Business Email:
        //             name: 'PageField',
        //             props: {
        //                 title: 'Business Email:',
        //                 joint,
        //                 data:  {
        //                     client1: getFieldData(['PersonalDetails', 'Client1', 'email1'], meeting),
        //                     client2: getFieldData(['PersonalDetails', 'Client2', 'email1'], meeting),
        //                 },
        //                 style: { marginTop: 24, marginLeft:65 },
        //             },
        //         },
        //         { // Personal Email:
        //             name: 'PageField',
        //             props: {
        //                 title: 'Personal Email:',
        //                 joint,
        //                 data:  {
        //                     client1: getFieldData(['PersonalDetails', 'Client1', 'email2'], meeting),
        //                     client2: getFieldData(['PersonalDetails', 'Client2', 'email2'], meeting),
        //                 },
        //                 style: { marginTop: 24, marginLeft:65 },
        //             },
        //         },
        //         { // Address
        //             name: 'PageSubsectionTitle',
        //             dontRender: joint,
        //             props: {
        //                 title: 'Address',
        //                 style: { marginTop: 41, marginLeft:65 },
        //             },
                    
        //         },
        //         { // Home address:
        //             name: 'PageField',
        //             dontRender: joint,
        //             props: {
        //                 title: 'Home address:',
        //                 data:  {
        //                     client1: `${getFieldData(['PersonalDetails', 'homeAddress', 'BuildingName'], meeting)}, ${getFieldData(['PersonalDetails', 'homeAddress', 'Line1'], meeting)}, ${getFieldData(['PersonalDetails', 'homeAddress', 'Line2'], meeting)},\n${getFieldData(['PersonalDetails', 'homeAddress',  'CountryName'], meeting)}, ${getFieldData(['PersonalDetails', 'homeAddress',  'PostalCode'], meeting)}`,
        //                     client2: `${getFieldData(['PersonalDetails', 'homeAddress', 'BuildingName'], meeting)}, ${getFieldData(['PersonalDetails', 'homeAddress', 'Line1'], meeting)}, ${getFieldData(['PersonalDetails', 'homeAddress', 'Line2'], meeting)},\n${getFieldData(['PersonalDetails', 'homeAddress',  'CountryName'], meeting)}, ${getFieldData(['PersonalDetails', 'homeAddress',  'PostalCode'], meeting)}`,
        //                 },
        //                 style: { marginTop: 14, marginLeft:65 },
        //             },
        //         },
        //     ]
        // },
        // { // [3]: Health Risk Profile
        //     name: 'HealthRiskProfile',
        //     pageNumber: 3,
        //     partials: [
        //         { // Health
        //             name: 'PageTitle',
        //             props: {
        //                 joint,
        //                 pageTitle: 'Health',
        //             }, 
        //         },
        //         { // ClientNameTitles
        //             name:'ClientNameTitles',
        //             dontRender: !joint,
        //             props:{
        //                 names:  {
        //                     client1: getFieldData(['PersonalDetails', 'Client1', 'fullName'], meeting),
        //                     client2: getFieldData(['PersonalDetails', 'Client2', 'fullName'], meeting),
        //                 },
        //                 style: {},
        //             },
        //         },
        //         { // Are you a smoker?
        //             name:  'PageField',
        //             props: {
        //                 joint,
        //                 title: 'Are you a smoker?',
        //                 data:  {
        //                     client1: getFieldData(['Health', 'Client1', 'areYouASmoker'], meeting),
        //                     client2: getFieldData(['Health', 'Client2', 'areYouASmoker'], meeting),
        //                 },
        //                 style: joint 
        //                     ? {marginTop: 19 , marginLeft:65 } 
        //                     : { marginTop: 14, marginLeft:65 },
        //             },
        //         },
        //         { // Suffering from any medical conditions?
        //             name:  'PageField',
        //             props: {
        //                 joint,
        //                 title: 'Suffering from any medical conditions?',
        //                 data:  {
        //                     client1: getFieldData(['Health', 'Client1', 'sufferingFromAnyMedicalConditions'], meeting),
        //                     client2: getFieldData(['Health', 'Client2', 'sufferingFromAnyMedicalConditions'], meeting),
        //                 },
        //                 style: joint 
        //                     ? {marginTop: 19 , marginLeft:65 } 
        //                     : { marginTop: 14, marginLeft:65 },
        //             },
        //         },
        //         { // Is your job hobbies dangerous ?
        //             name:  'PageField',
        //             props: {
        //                 joint,
        //                 title: 'Is your job hobbies dangerous?',
        //                 data:  {
        //                     client1: getFieldData(['Health', 'Client1', 'isYourJobOrHobbiesDangerous'], meeting),
        //                     client2: getFieldData(['Health', 'Client2', 'isYourJobOrHobbiesDangerous'], meeting),
        //                 },
        //                 style: joint 
        //                     ? {marginTop: 19 , marginLeft:65 } 
        //                     : { marginTop: 14, marginLeft:65 },
        //             },
        //         },
        //         { // Risk Profile
        //             name: 'PageTitle',
        //             props: {
        //                 joint,
        //                 pageTitle: 'Risk Profile',
        //                 style:{ marginTop: 59 },
        //             }, 
        //         },
        //         { // Evaluation
        //             name:  'PageField',
        //             props: {
        //                 joint,
        //                 title: 'Evaluation:',
        //                 data:  {
        //                     client1: getFieldData(['riskAssesments', 'answers', 'risk', 'riskLevel'], meeting),
        //                     client2: getFieldData(['riskAssesmentsClientTwo', 'answers', 'risk', 'riskLevel'], meeting),
        //                 },
        //                 style: joint 
        //                     ? {marginTop: 19 , marginLeft:65 } 
        //                     : { marginTop: 14, marginLeft:65 },
        //             },
        //         },
        //     ],
        // },
        // { // [4]: TaxResidency Disclosure
        //     name: 'TaxResidencyDisclosure',
        //     pageNumber: 4,
        //     partials: [
        //         { // Tax & Residency
        //             name: 'PageTitle',
        //             props: {
        //                 joint,
        //                 pageTitle: 'Tax & Residency',
        //             }, 
        //         },
        //         { // ClientNameTitles
        //             name:'ClientNameTitles',
        //             dontRender: !joint,
        //             props:{
        //                 names:  {
        //                     client1: getFieldData(['PersonalDetails', 'Client1', 'fullName'], meeting),
        //                     client2: getFieldData(['PersonalDetails', 'Client2', 'fullName'], meeting),
        //                 },
        //                 style: {},
        //             },
        //         },
        //         { // Are you a UK tax payer?
        //             name:  'PageField',
        //             props: {
        //                 joint,
        //                 title: 'Are you a UK tax payer?',
        //                 data:  {
        //                     client1: getFieldData(['TaxAndResidency', 'Client1', 'residentForTax'], meeting),
        //                     client2: getFieldData(['TaxAndResidency', 'Client2', 'residentForTax'], meeting),
        //                 },
        //                 style: joint 
        //                     ? {marginTop: 14 , marginLeft:65 } 
        //                     : { marginTop: 28, marginLeft:65 },
        //             },
        //         },
        //         { // Are you domiciled in the UK?
        //             name:  'PageField',
        //             props: {
        //                 joint,
        //                 title: 'Are you domiciled in the UK?',
        //                 data:  {
        //                     client1: getFieldData(['TaxAndResidency', 'Client1', 'domiciledInUKForTax'], meeting),
        //                     client2: getFieldData(['TaxAndResidency', 'Client2', 'domiciledInUKForTax'], meeting),
        //                 },
        //                 style: {marginTop: 24 , marginLeft:65 },  
        //             },
        //         },
        //         { // Where are you domiciled?
        //             name:  'PageField',
        //             props: {
        //                 joint,
        //                 title: 'Where are you domiciled?',
        //                 data:  {
        //                     client1: getFieldData(['TaxAndResidency', 'Client1', 'taxResidency'], meeting),
        //                     client2: getFieldData(['TaxAndResidency', 'Client2', 'taxResidency'], meeting),
        //                 },
        //                 style: {marginTop: 24 , marginLeft:65 },
        //             },
        //         },
        //         { // When did you move to the UK?
        //             name:  'PageField',
        //             props: {
        //                 joint,
        //                 title: 'When did you move to the UK?',
        //                 data:  {
        //                     client1: getFieldData(['TaxAndResidency', 'Client1', 'UkResidentSinceWhen'], meeting),
        //                     client2: getFieldData(['TaxAndResidency', 'Client2', 'UkResidentSinceWhen'], meeting),
        //                 },
        //                 style: {marginTop: 24 , marginLeft:65 },
        //             },
        //         },
        //         { // Is your tax status expected to change?
        //             name:  'PageField',
        //             props: {
        //                 joint,
        //                 title: 'Is your tax status expected to change?',
        //                 data:  {
        //                     client1: getFieldData(['TaxAndResidency', 'Client1', 'isYourTaxStatusExpectedToChange'], meeting),
        //                     client2: getFieldData(['TaxAndResidency', 'Client2', 'isYourTaxStatusExpectedToChange'], meeting),
        //                 },
        //                 style: {marginTop: 24 , marginLeft:65 },
        //             },
        //         },
        //         { // Disclosure
        //             name: 'PageTitle',
        //             props: {
        //                 joint,
        //                 pageTitle: 'Disclosure',
        //             style: {marginTop: 59 , marginLeft:65 },
        //             }, 
        //         },
        //         { // SCDD Date:
        //             name:  'PageField',
        //             props: {
        //                 joint,
        //                 title: 'SCDD Date:',
        //                 data:  {
        //                     client1: getFieldData(['Disclosure', 'Client1', 'dateScddGivenToClient'], meeting),
        //                     client2: getFieldData(['Disclosure', 'Client2', 'dateScddGivenToClient'], meeting),
        //                 },
        //                 style: joint 
        //                     ? {marginTop: 14 , marginLeft:65 } 
        //                     : { marginTop: 28, marginLeft:65 },
        //             },
        //         },
        //         { // Type of SCDD:
        //             name:  'PageField',
        //             props: {
        //                 joint,
        //                 title: 'Type of SCDD:',
        //                 data:  {
        //                     client1: getFieldData(['Disclosure', 'Client1', 'typeOfScdd'], meeting),
        //                     client2: getFieldData(['Disclosure', 'Client2', 'typeOfScdd'], meeting),
        //                 },
        //                 style: { marginTop: 24 , marginLeft:65 },
        //             },
        //         },
        //         { // 'Salesforce last updated:'
        //             name:  'PageField',
        //             props: {
        //                 joint,
        //                 title: 'Salesforce last updated:',
        //                 data:  {
        //                     client1: '< pending >',
        //                     client2: '< pending >',
        //                 },
        //                 style: { marginTop: 24 , marginLeft:65 },
        //             },
        //         },
        //         { // 'Client referred to by:'
        //             name:  'PageField',
        //             props: {
        //                 joint,
        //                 title: 'Client referred to by:',
        //                 data:  {
        //                     client1: '< pending >',
        //                     client2: '< pending >',
        //                 },
        //                 style: { marginTop: 24 , marginLeft:65 },
        //             },
        //         },
        //         { // 'Source of wealth:'
        //             name:  'PageField',
        //             dontRender: joint,
        //             props: {
        //                 joint,
        //                 title: 'Source of wealth:',
        //                 data:  {
        //                     client1: '< pending >',
        //                     client2: '< pending >',
        //                 },
        //                 style: { marginTop: 24 , marginLeft:65 },
        //             },
        //         },
        //         { // 'Source of funds:'
        //             name:  'PageField',
        //             dontRender: joint,
        //             props: {
        //                 joint,
        //                 title: 'Source of funds:',
        //                 data:  {
        //                     client1: '< pending >',
        //                     client2: '< pending >',
        //                 },
        //                 style: { marginTop: 24 , marginLeft:65 },
        //             },
        //         },
        //     ],
        // },
    ])
}

module.exports = pageSchemas