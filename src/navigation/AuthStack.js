import * as React from 'react';
import { StyleSheet,TouchableOpacity } from 'react-native';
import { createStackNavigator, TransitionPresets  } from '@react-navigation/stack';

import { colors } from './../components/Colors';
import { FontAwesome } from '@expo/vector-icons';

import StarterScreen from './../authScreens/StarterScreen';


const Stack = createStackNavigator();

export default function AuthStack() {
  return (
   
      <Stack.Navigator>
        {/* <Stack.Screen name="SplashScreen" component={SplashScreen}
           options = {{ 
                    headerShown:false, 
                    // ...TransitionPresets.RevealFromBottomAndroid 
            }}
         /> */}
        {/* <Stack.Screen name="StarterScreen" component={StarterScreen}
           options = {{ 
                    // headerShown:false, 
                    // ...TransitionPresets.RevealFromBottomAndroid 
            }}
         />
         */}
     
      <Stack.Screen
        component={StarterScreen}
        name="StarterScreen"
        options={({ navigation }) => ({
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.backButton}
            >
              <FontAwesome name="arrow-left" size={24} color="#000" />
            </TouchableOpacity>
          ),
          headerTitle: null,
          headerShown: false,
          headerBackTitleVisible: false,
        })}
      />

      
      </Stack.Navigator>
  
  );
};


const styles = StyleSheet.create({
   headerTitle: {
     fontSize: 20,
     color:colors.primary
   },

  
    backButton: {
      marginLeft: 16,
    },
  
 });