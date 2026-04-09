import { Image, ScrollView, StyleSheet, Text, View } from "react-native"
export default function Dashboard() {
    const styles = StyleSheet.create({
            container: {
                     flex: 1,
                     backgroundColor: '#fcf9fd',
            },
            MenuText:{ color: '#800000',
                    fontSize: 32,
                    fontWeight: 'bold',
                    position: 'absolute',
                    top: 10,
                    left: 40,
            },
            Mainbox:{ backgroundColor: '#ffffff',
                      borderColor:'#504d4d',
                      borderRadius:10,
                      padding: 10,
                      height: 90,
                      width: 330,
                    borderWidth:0.2,
                    marginTop: 55,
                    marginLeft: 15,
            },
            Invitebutton:{ backgroundColor: '#ffffff',
                           borderColor:'#504d4d',
                           borderRadius:10,
                           padding: 5,
                           height: 50,
                           width: 330,
                           borderWidth:0.2,
                           marginTop: 15,
                           marginLeft:15,
            },
            mainbuttons: { backgroundColor:'#ffffff',
                          height:65,
                          width:160,
                          borderWidth:0.2,
                          borderColor:'#504d4d',
                          borderRadius:10,
                          marginTop:10,
                          marginBottom:5,
                          paddingVertical:5,
                          paddingHorizontal:10,

            }, 
            rows:{ flexDirection:'row',
                  justifyContent:'space-between',
                  marginHorizontal:5,
                  marginInline: 20,
                  marginRight: 15,
                  marginLeft:15,

            },
            Line:{ width: 330,
                  height:1,
                  backgroundColor:'#d1cdcd',
                  marginTop: 15,
                  marginBottom: 15,
                  marginLeft:15,
                  marginRight:15,
            },
            Writeups:{
                      color:'#666363',
                      fontWeight:'bold',
                      marginLeft:15,
                      fontSize:20,

            },
            searchicon:{
                         tintColor:'#666363',
                         position:'absolute',
                         top: 10,
                         right:5,
            },
            logout:{
                     color:'#666363',
                     fontWeight:'bold',
                     marginLeft: 15,
                     fontSize: 20,
                     marginTop:15,
                     marginBottom:15,
            },
          Arrow:{
                  position: 'absolute',
                  top:15,
                  left:5,
                  tintColor:'#800000',
                  height:30,
                  width:40,

          },
          searchbox: {
                      backgroundColor:'#ffffff',
                      height:40,
                      width:40,
                      borderWidth:0.2,
                      borderColor:'#800000',
                      borderRadius:20,
                      position:'absolute',
                      top:10,
                      right: 15,
                      alignItems:'center',
                      justifyContent:'center',
          },
          searchicon: {
                      tintColor:'#800000',
                      height:30,
                      width:29,
          },
          searchbox2: {
                      backgroundColor:'#ffffff',
                      height:40,
                      width:40,
                      borderWidth:0.2,
                      borderColor:'#800000',
                      borderRadius:20,
                      position:'absolute',
                      top:10,
                      right: 60,
                      alignItems:'center',
                      justifyContent:'center',
          },
           fadingarrows: {
                      tintColor:'#800000',
                      height:30,
                      width:30,

          },
          profilebox: {
                      backgroundColor:'#ffffff',
                      height:40,
                      width:40,
                      borderWidth:0.5,
                      borderColor:'#800000',
                      borderRadius:20,
                      position:'absolute',
                      top:20,
                      left:15,
                      alignItems:'center',
                      justifyContent:'center',
          },
          profilephoto: {
                        height:35,
                        width:35,
                        borderRadius:17.5,

                      
          }, 
          Text1: { color: "#800000",
               fontSize: 14,
               fontWeight:'bold',
               position:'absolute',
               bottom: 10,
               left: 10,

          },
           Text2: {color: "#800000",
               fontSize: 22,
               fontWeight:'bold',
               position:'absolute',
               bottom: 15,
               left: 60,
           },
            Text3: {color: "#111010a2",
               fontSize: 20,
               fontWeight:'bold',
               position:'absolute',
               top: 10,
               left: 60,
            },
            Text4: {color: "#111010a2",
               fontSize: 15,
               fontWeight:'condensed',
               position:'absolute',
               bottom: 10,
               left: 60,
            },
          iconImages:{
                      position:'absolute',
                      top: 5,
                      left:10,
                      width: 35,
                      height:35,
          },
          iconImages2:{ tintColor:'#800000',
                      position:'absolute',
                      top: 5,
                      left:10,
                      width: 30,
                      height:30,
               }
})
    return (
     <ScrollView>
     <View style={styles.container}> 
          <Image  source={require('../assets/images/leftarrow.png')}style={styles.Arrow}/>
          <View style={styles.searchbox}>
             <Image  source={require('../assets/images/Search.png')}style={styles.searchicon}/> 
          </View>
          <View style={styles.searchbox2}>
               <Image  source={require('../assets/images/Fadingarrows.png')}style={styles.fadingarrows}/> 
    </View>
             <Text style={styles.MenuText}> Menu</Text>
    <View style={styles.Mainbox}>
               <View style={styles.profilebox}><Image  source={require('../assets/images/Photo.jpg')}style={styles.profilephoto}/></View>
               <Text style={styles.Text3}>Msua Mathias{'\n'} Terhemen</Text>
               <Text style={styles.Text4}>View your profile</Text>
    </View>
             <View style={styles.Invitebutton}><Text style={styles.Text2}>Invite Friends</Text>
              <View><Image  source={require('../assets/images/Invite.png')}style={styles.profilephoto}/></View>
    </View>
       <View style={styles.rows}>
             <View style={styles.mainbuttons}><Text style={styles.Text1}>Professional Dashboard</Text>
             <Image  source={require('../assets/images/Dashboard.png')}style={styles.iconImages}/></View>
             <View style={styles.mainbuttons}><Text style={styles.Text1}>Messages</Text>
             <Image  source={require('../assets/images/Bulksms.png')}style={styles.iconImages2}/>
             </View>

        </View>

        <View style={styles.rows}>
             <View style={styles.mainbuttons}><Text style={styles.Text1}>Groups</Text></View>
             <View style={styles.mainbuttons}><Text style={styles.Text1}>MarketPlace</Text></View>
        </View>
        <View style={styles.rows}>
             <View style={styles.mainbuttons}><Text style={styles.Text1}>Friends</Text>
             <Image  source={require('../assets/images/Friends.png')}style={styles.iconImages}/>
             </View>
             <View style={styles.mainbuttons}><Text style={styles.Text1}>Reels</Text></View>
        </View>
        <View style={styles.rows}>
             <View style={styles.mainbuttons}><Text style={styles.Text1}>Pages</Text></View>
             <View style={styles.mainbuttons}><Text style={styles.Text1}>Saved</Text></View>
        </View>
        <View style={styles.rows}>
             <View style={styles.mainbuttons}><Text style={styles.Text1}>Memories</Text></View>
             <View style={styles.mainbuttons}><Text style={styles.Text1}>Birthdays</Text></View>
        </View>
        <View style={styles.rows}>
             <View style={styles.mainbuttons}><Text style={styles.Text1}>Events</Text></View>
             <View style={styles.mainbuttons}><Text style={styles.Text1}>Meta Verified</Text></View>
        </View>
        <View style={styles.rows}>
             <View style={styles.mainbuttons}><Text style={styles.Text1}>Mobile Center</Text></View>
             <View style={styles.mainbuttons}><Text style={styles.Text1}>Feeds</Text></View>
        </View>
        <View style={styles.rows}>
             <View style={styles.mainbuttons}><Text style={styles.Text1}>Instagram Lite</Text></View>
        </View>
        <View style={styles.Line}></View>
        <Text style={styles.Writeups}>Settings and Privacy</Text>
        <View style={styles.Line}></View>
        <Text style={styles.Writeups}>Help & Support</Text>
        <View style={styles.Line}></View>
        <Text style={styles.Writeups}>Also From Meta</Text>
        <View style={styles.Line}></View>
        <Text style={styles.Writeups}>Meta AI</Text>
        <View style={styles.Line}></View>
        <Text style={styles.logout}>Add account</Text>
        <Text style={styles.logout}>Log out</Text>

        </View>
        </ScrollView>
    )
} 