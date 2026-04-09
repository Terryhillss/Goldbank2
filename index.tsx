import { Link } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
export default function Index() { 
  const styles = StyleSheet.create({ 
container: { 
           flex: 1, 
           backgroundColor: '#f8f0f0', 
           padding: 15, 
}, 
balanceBox: { 
            backgroundColor: '#800000', 
            borderRadius: 15, 
            padding: 10, 
            marginBottom: 20,
            width: 325,
            height:110,
            borderColor:'#f5d133d2',
            elevation:10,
            borderWidth:2, 
},
Notebox: { 
            backgroundColor: '#e4bdbd', 
            borderRadius: 15, 
            padding: 10, 
            marginTop:35,
            width: 325,
            height:110,
            borderColor:'#800000',
            elevation:10,
            borderWidth:2, 
},
walletbalance:{
              color:'#ffffff',
              fontWeight:'bold',
              position: 'absolute',
              top:5,
              left:10,
},
ReferalText: {
             color:'#ffffff',
             fontWeight:'bold',
             position:'absolute',
             bottom: 25,
             left: 10,
},
referbal: {
          color: '#ffffff',
          fontWeight:'bold',
          position:'absolute',
          bottom: 20,
          left: 10,
},
Referandearnbutton:{
                 aspectRatio:3,
                 padding: 5,
                 borderRadius: 5,
                 position: 'absolute',
                 bottom:10,
                 right: 10,
                 backgroundColor:'#ffffff'          
},
balance: { fontFamily:'TimesNewRoman',
           fontSize: 16, 
           color: '#800000',  
           fontWeight: 'bold', 
           marginBottom:15,
           marginTop:30,
           elevation:3,
},
money: {
         fontSize: 28 ,
         color: '#ffffff',
         fontWeight: 'bold',
         marginBottom: 12,
         marginTop:1,
         
},
rowButtons: { 
         flexDirection: 'row', 
         justifyContent: 'space-between',
         marginHorizontal:10,
         marginInline:5, 
}, 
rowButtons2: { flexDirection: 'row',
               justifyContent:'space-between',
               marginHorizontal: 10,
               marginInline:5,
               marginLeft: -5,
               marginRight:5,

},
actionButton: {  
          backgroundColor: '#ffffff', 
          paddingVertical: 10, 
          paddingHorizontal: 10,
          height:50,
          width:50, 
          borderRadius: 25,
          borderColor:'#800000',
          borderWidth:1,
          marginTop: 25,
          marginBottom:5,
},
Textcolor: {
           color: '#800000',
           fontWeight: 'bold',
           fontSize:12,
           marginTop:30, 
},         
subHeader: { 
          color: '#800000', 
          fontSize: 20, 
          marginBottom: 10,
          fontWeight:'bold',
},
History: {
            color: '#800000',
            fontSize: 18,
            fontWeight:'bold',
            position:'absolute',
            top: 210,
            right: 20,
},
transaction: { 
          backgroundColor: '#800000', 
          padding: 10, 
          borderRadius: 8, 
          marginBottom: 5,
          marginTop: 30,

},
transactionText: { 
           color: '#ffffff', 
           fontSize: 16, 
           fontWeight: 'bold', 
}, 
transactionDate: { 
           color: '#ebb70d', 
           fontSize: 12,
           fontWeight: 'bold',
}, 
transactionAmount: { 
           color: '#ffffff', 
           fontSize: 16, 
           fontWeight: 'bold', 
           position: 'absolute', 
           right: 15, 
           top: 15,
           height:20, 
}, 
 banner: {        
         aspectRatio: 3, 
         position: 'absolute',
         top: 5,
         left: 10,
         height: 45,
         width: 45,
         color: '#800000',
              },
  bell:{
         aspectRatio:3,
         position: 'absolute',
         top:5,
         right:10,
         width: 40,
         height:40,
         borderRadius:20,
  },
  bells:{
         aspectRatio:3,
         position: 'absolute',
         top:5,
         left:10,
         width: 40,
         height:40,
         borderRadius:20,
  },
  leadarrow: {
              aspectRatio:3,
              position: 'absolute',
              top: 15,
              right: 15,
  },
  fundbox: {
            aspectRatio: 3,
            position:'absolute',
            top:10,
            right:15,
            paddingVertical: 3,
            paddingHorizontal: 5,
            backgroundColor: '#ffffff',
            borderRadius:5,
            fontWeight: 'bold'

 },
  fundtext: {
           color:'#800000',
           fontWeight: 'bold',
           fontSize: 12,
           marginHorizontal:10,

  },
  walletbalancetext: {
                    color:'#f5d133d2',
                    fontWeight:'bold',
                    fontSize: 12,
  },
  walletbalanceamount: {
                     color:'#f5d133d2',
                     fontSize: 12,
                     fontWeight:'bold',
                     position:'absolute',
                     bottom: 10,
                     left: 10,
  },
  progress: {
            position:'absolute',
            width:125,
            height:125,
            bottom:3,
            right:65,
            paddingHorizontal:25,
            paddingVertical: 60,
  },
  icons: { tintColor:'#800000',
           height: 50,
           width: 50,

  },
  smart:{
         position: 'absolute',
         top:5,
         left:60,
         color:'#045a0b',
         fontWeight:'bold',
         fontSize:18,
  },
  smart2:{
         position: 'absolute',
         marginBottom:20,
         top:15,
         left:55,
         color:'#800000',
         fontWeight:'bold',
         textAlign:'justify'
  },
  smart3: {
           width:230,
           height:45,
           textAlign:'justify'
  },  
});
const recentActivity = [ 
{id:'1', description:'NEPA Bill', date:'Today', amount:'₦5,000'}, 
{id:'2', description:'Cab fair', date:'Today', amount:'₦35,000'}, 
{id:'3', description:'Food delivery', date:'Today', amount:'₦15,000'}, 
] 
return ( 
<View style={styles.container}> 
 <Image  
source={require('../assets/images/Avatar.png')}  
style={styles.banner}  
resizeMode="contain"
/>
<Image  
source={require('../assets/images/Bell.png')}  
style={styles.bell}
/>
      <Text style={styles.balance}>Hello, Mathias. </Text>
   <View style={styles.balanceBox}>
      <Image  
            source={require('../assets/images/progression2.png')}  
            style={styles.progress}/>
      <Text style={styles.walletbalancetext}>Total Wallet Balance</Text>
      <Text style={styles.ReferalText}>Referal Bonus</Text>
      <Text style={styles.walletbalanceamount}>{'\u20A6'}53.15</Text>
      <Text style={styles.money}>{'\u20A6'}45,250.45</Text>
      
      <View style={styles.Referandearnbutton}><Text style={styles.fundtext}>Refer & Earn</Text></View>
     <View style={styles.fundbox}>
      <Text style={styles.fundtext}>Fund</Text>
      </View>
  </View>
        <Text style={styles.subHeader}>Quick Services</Text>
       <Text style={styles.History}>View all</Text>
   <View style={styles.rowButtons}> 
      <TouchableOpacity style={styles.actionButton}><Link href="/TransferScreen"><Image source={require('../assets/images/Transfer.png')} style={styles.icons}/></Link></TouchableOpacity>
      <TouchableOpacity style={styles.actionButton}><Link href="/BuyAirtime"><Image source={require('../assets/images/Airtime.png')} style={styles.icons}/></Link></TouchableOpacity> 
      <TouchableOpacity style={styles.actionButton}><Link href="/PayBill"><Image source={require('../assets/images/Bill.png')} style={styles.icons}/></Link></TouchableOpacity>
      <TouchableOpacity style={styles.actionButton}><Link href="/Dashboard"><Image source={require('../assets/images/Data.png')} style={styles.icons}/></Link></TouchableOpacity>
  </View>
  <View style={styles.rowButtons2}>
    <Text style={styles.fundtext}>Transfer</Text>
    <Text style={styles.fundtext}>Airtime</Text>
    <Text style={styles.fundtext}>Bills</Text>
    <Text style={styles.fundtext}>Data</Text>
  </View>
     <View style={styles.rowButtons}> 
      <TouchableOpacity style={styles.actionButton}><Link href="/TransferScreen"><Image source={require('../assets/images/Education.png')} style={styles.icons}/></Link></TouchableOpacity>
      <TouchableOpacity style={styles.actionButton}><Link href="/BuyAirtime"><Image source={require('../assets/images/Bulksms.png')} style={styles.icons}/></Link></TouchableOpacity> 
      <TouchableOpacity style={styles.actionButton}><Link href="/PayBill"><Image source={require('../assets/images/Television.png')} style={styles.icons}/></Link></TouchableOpacity>
      <TouchableOpacity style={styles.actionButton}><Link href="/TransferScreen"><Image source={require('../assets/images/Electricity2.png')} style={styles.icons}/></Link></TouchableOpacity>
  </View>
  <View style={styles.rowButtons2}>
    <Text style={styles.fundtext}>Education</Text>
    <Text style={styles.fundtext}>Bulk sms</Text>
    <Text style={styles.fundtext}>cable Tv</Text>
    <Text style={styles.fundtext}>Electricity</Text>
  </View>
  <View style={styles.Notebox}>
   <Text style={styles.smart}>Smart Earnings</Text>
   <View style={styles.smart3}><Text style={styles.smart2}>You earn 15% on data this month. 
    try referring more people and selling more of data and other services to be able to meet
     up to your income goals for the month.</Text>
     </View>
    <Image  
source={require('../assets/images/Bell.png')}  
style={styles.bells}
/>
  </View>
</View>
) 
} 