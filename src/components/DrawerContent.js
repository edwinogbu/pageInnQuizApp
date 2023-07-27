
import React, { useContext, useState, useEffect } from 'react';
import { View, TouchableOpacity, Switch, StyleSheet } from 'react-native';
import { Avatar, Text } from 'react-native-elements';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { Icon } from 'react-native-vector-icons/MaterialCommunityIcons';
import { Ionicons, MaterialCommunityIcons, AntDesign, FontAwesome5 } from '@expo/vector-icons';
import { colors } from './Colors';
import { auth,  } from './../../firebase'; // Import your Firebase Firestore instance
// import { collection, doc, getDoc } from 'firebase/firestore';
import { getFirestore, collection, doc, getDoc } from 'firebase/firestore';
import { AuthContext } from './../AuthContext';
import LeaderboardScreen from './../LeaderboardScreen';
import SettingScreen from './../SettingScreen';


const DrawerContent = (props) => {
  const { state: { user }, signOut } = useContext(AuthContext);

  const userId = user.uid;
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [setUser] = useState(null); // State to store the user details

  useEffect(() => {
    // Fetch the user details from Firestore
    const fetchUserDetails = async () => {
      try {
        // Make a query to fetch the user document based on the user's UID
        const userDocRef = doc(auth, 'users', user.uid);
        const userDocSnap = await getDoc(userDocRef);

        if (userDocSnap.exists()) {
          const userData = userDocSnap.data(); // Extract the user data from the document

          // Update the user state with the fetched user details
          setUser(userData);
        }
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };
    

    if (user) {
      fetchUserDetails(); // Call the function to fetch user details when the user state is set
    }
  }, [user]);


  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleSignOut = () => {
    signOut();
  };

  const share = () => {
    // Implement your share logic here
  };
 
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: isDarkMode ? colors.dark : colors.white,
        color: isDarkMode ? colors.white : colors.grey1,
      }}>
      <DrawerContentScrollView {...props}>
        <View
          style={{
            backgroundColor: isDarkMode ? colors.dark : colors.primary,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: isDarkMode ? colors.dark : colors.primary,
              paddingLeft: 20,
              paddingVertical: 10,
            }}>
            <Avatar
              rounded
              avatarStyle={{
                ...styles.avatar,
                borderColor: colors.white,
              }}
              size={75}
              source={require('./../../assets/images/PAGE.png')}
            />
            <View style={{ marginLeft: 10, }}>
              <Text style={{
                  color: isDarkMode ||  colors.dark ? colors.primary: colors.cardbackground,
                  fontSize: 14,
                  fontWeight: 'bold',
                }}>
                Mr {user && user.name || user.displayName} 
                
              </Text>
              <Text
                style={{...styles.text,
                  color: isDarkMode ||  colors.dark ? colors.primary: colors.cardbackground,
                  fontSize: 9,
                }}>
                {user && user.email}
              </Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              paddingBottom: 5,
            }}>
            <View style={{ flexDirection: 'row', marginLeft: 0 }}>
              <View
                style={{
                  marginLeft: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    color: colors.cardbackground,
                    fontSize: 18,
                    fontWeight: 'bold',
                  }}>
                    <Ionicons
                      type="material-community"
                      name="school"
                      size={35}
                      color={isDarkMode || colors.dark ?colors.primary: colors.cardbackground}
                      // onPress={() => {
                      //   props.navigation.navigate('LeaderboardScreen');
                      // }}
                    />
                </Text>
                <Text
                  style={{
                    color: isDarkMode || colors.dark ?colors.primary: colors.cardbackground,
                    fontSize: 18,
                  }}>
                   Leaderboard
                </Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row', marginLeft: 0 }}>
              <View
                style={{
                  marginLeft: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    color: colors.cardbackground,
                    fontSize: 18,
                    fontWeight: 'bold',
                  }}>
                  <View
                    style={{
                      alignContent: 'center',
                      justifyContent: 'center',
                    }}>
                    <FontAwesome5
                      type="material-community"
                      name="handshake"
                      size={35}
                      color={isDarkMode || colors.dark ?colors.primary: colors.cardbackground}
                      // onPress={() => {
                      //   props.navigation.navigate('ProfileScreen');
                      // }}
                    />
                  </View>
                </Text>
                <Text
                  style={{
                    color: isDarkMode ||  colors.dark ? colors.primary: colors.cardbackground,
                    fontSize: 18,
                    }}>Profile</Text>
              </View>
              </View>
              </View>

      <View
        style={{
          backgroundColor: isDarkMode ? colors.dark : colors.white,
          marginTop: 10,
        }}>
      
      </View>
    </View>

    <View style={{ marginTop: 10 }}>

    <DrawerItemList {...props} />
     

      {/* <DrawerItem
        icon={({ color, size }) => (
          <Ionicons name="school" color={color} size={size} />
        )}
        label="Leaderboard"
        onPress={  props.navigation.navigate('LeaderboardScreen')}
        labelStyle={{ color: isDarkMode ? colors.white : colors.black }}
      />

      <DrawerItem
        icon={({ color, size }) => (
          <Ionicons name="settings" color={color} size={size} />
        )}
        label="Settings"
        onPress={SettingScreen}
        labelStyle={{ color: isDarkMode ? colors.white : colors.black }}
      /> */}

      <DrawerItem
        icon={({ color, size }) => (
          <MaterialCommunityIcons name="theme-light-dark" color={color} size={size} />
        )}
        label={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        onPress={toggleDarkMode}
        labelStyle={{ color: isDarkMode ? colors.white : colors.black }}
        switch={
          <Switch
            trackColor={{ false: colors.light, true: colors.grey }}
            thumbColor={isDarkMode ? colors.grey : colors.white}
            ios_backgroundColor={colors.light}
            value={isDarkMode}
            onValueChange={toggleDarkMode}
          />
        }
      />

      <DrawerItem
        icon={({ color, size }) => (
          <Ionicons name="log-out" color={color} size={size} />
        )}
        label="Sign Out"
        onPress={handleSignOut}
        labelStyle={{ color: isDarkMode ? colors.white : colors.black }}
      />
    </View>
  </DrawerContentScrollView>
</View>
);
};

export default DrawerContent;



const styles = StyleSheet.create({
    container:{
        flex:1
    },
    avatar:{
        borderWidth:4,
        borderColor:colors.pagebackground,
       
    },

    preferences:{
       fontSize:14,
       color:colors.grey2,
       paddingTop:10,
        paddingLeft:20,
        
    },

    switchText:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        paddingLeft:20,
        paddingVertical:5,
        paddingRight:10
    },
    darkthemeText:{
        fontSize:14,
        color:colors.grey,
        paddingTop:10,
         paddingLeft:20,
         fontWeight:'bold'
    },
    text:{
      color:'#fff'
    }
})