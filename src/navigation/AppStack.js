import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity,Image, ImageBackground, ScrollView , Alert} from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { AntDesign, Entypo, MaterialCommunityIcons, Ionicons, FontAwesome5 } from '@expo/vector-icons';

import DrawerContent from './../components/DrawerContent';
import LeaderboardScreen from './../LeaderboardScreen';

import QuizScreen from './../QuizScreen';
import ResultScreen from './../ResultScreen';
import UserProfileScreen from './../UserProfileScreen';
import CertificateScreen from './../CertificateScreen';
import HomeScreen from './../HomeScreen';
import ProfileScreen from './../ProfileScreen';
import UserListScreen from '../UserListScreen';
import StartExamScreen from '../StartExamScreen';
import { auth, firestore } from './../../firebase'; 
import { getAuth, updateDoc, doc, getDoc, setDoc } from 'firebase/firestore';


const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function BottomTabNavigator() {
  const [userType, setUserType] = useState('user'); 

  // Fetch the userType when the component mounts
  useEffect(() => {
    fetchUserType();
  }, []);

  const fetchUserType = async () => {
    try {
      const user = auth.currentUser;
      const docRef = doc(firestore, 'users', user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const userData = docSnap.data();
        setUserType(userData.userType);
      }
    } catch (error) {
      console.error('Error fetching user type:', error);
    }
  };


  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarShowLabel: true,
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = 'home';
          return <Ionicons name={iconName} size={40} color={focused ? '#000080' : '#00A8F0'} />;
        } else if (route.name === 'Leaderboard') {
          iconName = 'school';
          return <MaterialCommunityIcons name={iconName} size={40} color={focused ? '#000080' : '#00A8F0'} />;
        } else if (route.name === 'Profile') {
          iconName = 'account';
          return <MaterialCommunityIcons name={iconName} size={40} color={focused ? '#000080' : '#00A8F0'} />;
        } else if (route.name === 'UserList') {
          iconName = 'folder-lock-open';
          return <MaterialCommunityIcons name={iconName} size={40} color={focused ? '#000080' : '#00A8F0'} />;
        } else if (route.name === 'StartExam') {
          iconName = 'megaphone';
          return <Ionicons name={iconName} size={40} color={focused ? '#000080' : '#00A8F0'} />;
        }
      },
      tabBarStyle: {
        backgroundColor: '#ffffff',
        borderColor: '#00A8F0',
        borderWidth: 5,
        borderTopWidth: 5,
        height: 60,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.2,
        shadowRadius: 4.65,
        elevation: 25,
      },
      tabBarItemStyle: {
        fontSize: 18,
        fontWeight: 'bold',
      },
      tabBarItemActiveTintColor: '#ff9900', // Active tab text color
      tabBarItemInactiveTintColor: '#999999',
    })}
  >
    <Tab.Screen name="Home" component={HomeScreen} options={{
      headerShown: false,
      title: "Page App",
    }} />
    <Tab.Screen name="Leaderboard" component={LeaderboardScreen} options={{
      headerShown: false,
      title: "Leaderboard",
    }} />
    <Tab.Screen name="Profile" component={ProfileScreen} options={{
      headerShown: false,
    }} />
    {userType === 'admin' && (
      <Stack.Screen
        name="UserList"
        component={UserListScreen}
        options={({ navigation }) => ({
          title: 'User List',
          headerTitleStyle: styles.headerTitle,
          headerShown: false,
          headerTitleAlign: 'center',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name='folder-lock-open'
              type='material'
              color={color}
              size={size}
            />
          ),
          headerLeft: () => (
            <Ionicons
              name="chevron-back-outline"
              size={28}
              onPress={() => navigation.goBack()}
              style={{ marginLeft: 20 }}
            />
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() => { }}>
              <Image
                source={require('../../assets/images/PAGE.png')}
                style={styles.logo}
                resizeMode="contain"
              />
            </TouchableOpacity>
          ),
        })}
      />
    )}
    {userType === 'admin' && (
      <Stack.Screen
        name="StartExam"
        component={StartExamScreen}
        options={({ navigation }) => ({
          title: 'Start Exam',
          headerTitleStyle: styles.headerTitle,
          headerShown: false,
          headerTitleAlign: 'center',
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name='megaphone'
              type='material'
              color={color}
              size={size}
            />
          ),
          headerLeft: () => (
            <Ionicons
              name="chevron-back-outline"
              size={28}
              onPress={() => navigation.goBack()}
              style={{ marginLeft: 20 }}
            />
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() => { }}>
              <Image
                source={require('../../assets/images/PAGE.png')}
                style={styles.logo}
                resizeMode="contain"
              />
            </TouchableOpacity>
          ),
        })}
      />
    )}
  </Tab.Navigator>

  );
};

function DrawerNavigator(){
  const [userType, setUserType] = useState('user'); // Default userType, you can set it to 'admin' if needed

  // Fetch the userType when the component mounts
  useEffect(() => {
    fetchUserType();
  }, []);

  const fetchUserType = async () => {
    try {
      const user = auth.currentUser;
      const docRef = doc(firestore, 'users', user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const userData = docSnap.data();
        setUserType(userData.userType);
      }
    } catch (error) {
      console.error('Error fetching user type:', error);
    }
  };

  const screenOptions = {
    drawerStyle: {
      width: '80%',
    },
    
    drawerContentOptions: {
      activeTintColor: '#ff9900',
      inactiveTintColor: '#999999',
      labelStyle: {
        fontSize: 20,
        fontWeight: 'bold',
      },
    },
  };


  return (
    <Drawer.Navigator
        drawerContent={ props => <DrawerContent {...props} screenOptions={screenOptions} />}
    >
      <Drawer.Screen name="Home " component={BottomTabNavigator} 
         options = {{ 
                    headerShown:true, 
                    drawerIcon: ({ color, size }) => (
                     <AntDesign
                     name="home"
                     type="material"
                     color={color}
                     size={size}
                     />
                  ),
            }}
      />
     
     <Drawer.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        drawerIcon: ({ color, size }) => (
          <AntDesign
            name="user"
            size={size}
            color={color}
          />
        ),
      }}
    />


      <Drawer.Screen
      name="Leader Board"
      component={LeaderboardScreen}
      options={{
        drawerIcon: ({ color, size }) => (
          <Ionicons
            name="school"
            size={size}
            color={color}
          />
        ),
      }}
    />
    {userType === 'admin' && (
    
      <Drawer.Screen
      name="Start Exam"
      component={StartExamScreen}
      options={{
        drawerIcon: ({ color, size }) => (
          <Ionicons
            name="megaphone"
            size={size}
            color={color}
          />
        ),
      }}
    />
    
    ) }


  {userType === 'admin' && (
          <Drawer.Screen
            name="User List"
            component={UserListScreen}
            options={{
              drawerIcon: ({ color, size }) => (
                <MaterialCommunityIcons
                  name="folder-lock-open"
                  size={size}
                  color={color}
                />
              ),
            }}
          /> 
        
  )}
        
    </Drawer.Navigator>
  );
};



export default function AppStack() {
  const [userType, setUserType] = useState('user'); 

  // Fetch the userType when the component mounts
  useEffect(() => {
    fetchUserType();
  }, []);

  const fetchUserType = async () => {
    try {
      const user = auth.currentUser;
      const docRef = doc(firestore, 'users', user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const userData = docSnap.data();
        setUserType(userData.userType);
      }
    } catch (error) {
      console.error('Error fetching user type:', error);
    }
  };



  const handleReset = () => {
    navigation.dispatch(StackActions.reset({
      index: 0,
      routes: [{ name: 'HomeScreen' }], 
    }));
  };
  
  return (
    <Stack.Navigator>
      <Stack.Screen name="App" component={DrawerNavigator}
             options = {{ 
                    headerShown:false, 
                    // title: 'Sidebar'
                    // ...TransitionPresets.RevealFromBottomAndroid 
            }}
       />
      
      <Stack.Screen 
               name="ProfileScreen" 
               component={ProfileScreen} 
               options={({ navigation }) => ({
                  title: 'Profile',
                  headerTitleStyle: styles.headerTitle,
                  headerLeft: () => (
                    
                     <FontAwesome5 name="angle-double-left" size={28} onPress={() => navigation.goBack()} />

                  ),
                  headerRight: () => (
                     
                    <FontAwesome5 name="angle-double-left" size={28} onPress={() => navigation.goBack()} />

                  ),
               })} 
         />

        
      <Stack.Screen 
               name="LeaderboardScreen" 
               component={LeaderboardScreen} 
               options={({ navigation }) => ({
                  title: 'Leader Board',
                  headerTitleStyle: styles.headerTitle,
                  headerLeft: () => (
                    
                     <FontAwesome5 name="angle-double-left" size={28} onPress={() => navigation.goBack()} />

                  ),
                  headerRight: () => (
                     
                    <FontAwesome5 name="angle-double-left" size={28} onPress={() => navigation.goBack()} />

                  ),
               })} 
         />

        
{userType === 'admin' && (
<Stack.Screen 
        name="UserListScreen" 
        component={UserListScreen} 
        options={({ navigation }) => ({
          title: 'User List',
          headerTitleStyle: styles.headerTitle,
          headerLeft: () => (
            
             <FontAwesome5 name="angle-double-left" size={28} onPress={() => navigation.goBack()} />

          ),
          headerRight: () => (
             
            <FontAwesome5 name="angle-double-left" size={28} onPress={() => navigation.goBack()} />

          ),
       })} 
      />

      )}
      

      <Stack.Screen 
        name="QuizScreen" 
        component={QuizScreen} 
        options={({ navigation }) => ({
          title: 'Quiz',
          headerTitleStyle: styles.headerTitle,
          headerShown: false, 
          headerTitleAlign: 'center', // Aligns the title text to the center
          tabBarIcon: ({ color, size }) => (
            <Ionicons 
              name='book'
              type='material'
              color={color}
              size={size}
            />
          ),
          headerLeft: () => (
            <Ionicons
              name="chevron-back-outline" 
              size={28} 
              onPress={() => navigation.goBack()}
              style={{ marginLeft: 20 }}
            />
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() => {}}>
              <Image
                source={require('../../assets/images/PAGE.png')}
                style={styles.logo}
                resizeMode="contain"
              />
            </TouchableOpacity>  
          ),
        })}
      />



      <Stack.Screen 
        name="ResultScreen" 
        component={ResultScreen} 
        options={({ navigation }) => ({
          title: 'Result',
          headerTitleStyle: styles.headerTitle,
          headerShown: false, 
          headerTitleAlign: 'center', // Aligns the title text to the center
          tabBarIcon: ({ color, size }) => (
            <Ionicons 
              name='book'
              type='material'
              color={color}
              size={size}
            />
          ),
          headerLeft: () => (
            <Ionicons
              name="chevron-back-outline" 
              size={28} 
              onPress={() => navigation.goBack()}
              style={{ marginLeft: 20 }}
            />
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() => {}}>
              <Image
                source={require('../../assets/images/PAGE.png')}
                style={styles.logo}
                resizeMode="contain"
              />
            </TouchableOpacity>  
          ),
        })}
      />


    <Stack.Screen 
      name="UserProfileScreen" 
      component={UserProfileScreen} 
      options={({ navigation }) => ({
        title: 'User result details',
        headerTitleStyle: styles.headerTitle,
        headerShown: false, 
        headerTitleAlign: 'center', // Aligns the title text to the center
        tabBarIcon: ({ color, size }) => (
          <Ionicons 
            name='book'
            type='material'
            color={color}
            size={size}
          />
        ),
        headerLeft: () => (
          <Ionicons
            name="chevron-back-outline" 
            size={28} 
            onPress={() => navigation.goBack()}
            style={{ marginLeft: 20 }}
          />
        ),
        headerRight: () => (
          <TouchableOpacity onPress={() => {}}>
            <Image
              source={require('../../assets/images/PAGE.png')}
              style={styles.logo}
              resizeMode="contain"
            />
          </TouchableOpacity>  
        ),
      })}
    />

    <Stack.Screen 
      name="CertificateScreen" 
      component={CertificateScreen} 
      options={({ navigation }) => ({
        title: 'Cert',
        headerTitleStyle: styles.headerTitle,
        headerShown: false, 
        headerTitleAlign: 'center', // Aligns the title text to the center
        tabBarIcon: ({ color, size }) => (
          <Ionicons 
            name='book'
            type='material'
            color={color}
            size={size}
          />
        ),
        headerLeft: () => (
          <Ionicons
            name="chevron-back-outline" 
            size={28} 
            onPress={() => navigation.goBack()}
            style={{ marginLeft: 20 }}
          />
        ),
        headerRight: () => (
          <TouchableOpacity onPress={() => {}}>
            <Image
              source={require('../../assets/images/PAGE.png')}
              style={styles.logo}
              resizeMode="contain"
            />
          </TouchableOpacity>  
        ),
      })}
    />


</Stack.Navigator>
  );
}


const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
  },
})