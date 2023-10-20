
import React, { useContext, useState, useEffect } from 'react';
import { View, TouchableOpacity, Switch, StyleSheet } from 'react-native';
import { Avatar, Text } from 'react-native-elements';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { Ionicons, MaterialCommunityIcons, AntDesign, FontAwesome5 } from '@expo/vector-icons';
import { colors } from './Colors';
import { auth, firestore } from './../../firebase'; 
import { getFirestore, collection, doc, getDoc } from 'firebase/firestore';
import { AuthContext } from './../AuthContext';


const DrawerContent = (props) => {
  const { state: { user }, signOut } = useContext(AuthContext);

  const userId = user.uid;
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [setUser] = useState(null); // State to store the user details
  const [userData, setUserData] = useState({});
  const [checkUser, setCheckUser] = useState([]);
  const [isUser, setIsUser] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    const fetchCheckUser = async () => {
      try {
        const user = auth.currentUser;
        const userDocRef = doc(firestore, 'users', user.uid);
        const userDocSnap = await getDoc(userDocRef);

        if (userDocSnap.exists()) {
          const userData = userDocSnap.data();
          setUserData(userData);
          // Assuming 'userType' is a field in the user document
          const userType = userData.userType;

          setCheckUser([userData]);
          setIsUser(userType === 'user');
          setIsAdmin(userType === 'admin');
        }
      } catch (error) {
        setUser('');
        setUserData('');
        console.error('Error fetching checkUser:', error);
      }
    };

    if (user) {
      fetchCheckUser();
    }
  }, [user]);


  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleSignOut = () => {
    signOut();
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
                borderColor: colors.buttons,
              }}
              size={75}
              source={require('./../../assets/images/PAGE.png')}
            />
            <View style={{ marginLeft: 10, }}>
              <Text style={{
                  color: isDarkMode ||  colors.dark ? colors.primary: colors.cardbackground,
                  fontSize: 18,
                  fontWeight: 'bold',
                }}>
                {user && user.name || user.displayName} 
                
              </Text>
               
              <Text
                style={{...styles.text,
                  color: isDarkMode ||  colors.dark ? colors.primary: colors.cardbackground,
                  fontSize: 14,
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
                      onPress={() => {
                        props.navigation.navigate('LeaderboardScreen');
                      }}
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
                      onPress={() => {
                        props.navigation.navigate('ProfileScreen');
                      }}
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
                {isAdmin ? (
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
                      name="stamp"
                      size={35}
                      color={isDarkMode || colors.dark ?colors.primary: colors.cardbackground}
                      onPress={() => {
                        props.navigation.navigate('UserListScreen');
                      }}
                    />
                  </View>
                </Text>
                <Text
                  style={{
                    color: isDarkMode ||  colors.dark ? colors.primary: colors.cardbackground,
                    fontSize: 18,
                    }}>User List</Text>
              </View>
              </View>

           ) : null} 
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