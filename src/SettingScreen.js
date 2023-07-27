// import React, { useState, useEffect } from 'react';
// import { View, Text, Switch, StyleSheet } from 'react-native';
// import * as SecureStore from 'expo-secure-store';

// const SettingScreen = () => {
//   const [settings, setSettings] = useState({
//     soundEnabled: true,
//     notificationsEnabled: true,
//   });

//   useEffect(() => {
//     loadSettings();
//   }, []);

//   const loadSettings = async () => {
//     try {
//       const storedSettings = await SecureStore.getItemAsync('settings');
//       if (storedSettings !== null) {
//         setSettings(JSON.parse(storedSettings));
//       }
//     } catch (error) {
//       console.log('Error loading settings:', error);
//     }
//   };
  
// //   const loadSettings = async () => {
// //     try {
// //       const storedSettings = await AsyncStorage.getItem('settings');
// //       if (storedSettings !== null) {
// //         setSettings(JSON.parse(storedSettings));
// //       }
// //     } catch (error) {
// //       console.log('Error loading settings:', error);
// //     }
// //   };

// //   const saveSettings = async () => {
// //     try {
// //       await AsyncStorage.setItem('settings', JSON.stringify(settings));
// //     } catch (error) {
// //       console.log('Error saving settings:', error);
// //     }
// //   };


// const saveSettings = async () => {
//     try {
//       await SecureStore.setItemAsync('settings', JSON.stringify(settings));
//     } catch (error) {
//       console.log('Error saving settings:', error);
//     }
//   };
  
//   const toggleSetting = (setting) => {
//     setSettings((prevSettings) => ({
//       ...prevSettings,
//       [setting]: !prevSettings[setting],
//     }));
//   };

//   useEffect(() => {
//     saveSettings();
//   }, [settings]);

//   return (
//     <View style={styles.container}>
//       <View style={styles.settingItem}>
//         <Text style={styles.settingLabel}>Sound</Text>
//         <Switch
//           value={settings.soundEnabled}
//           onValueChange={() => toggleSetting('soundEnabled')}
//           trackColor={{ false: '#767577', true: '#81b0ff' }}
//           thumbColor={settings.soundEnabled ? '#f5dd4b' : '#f4f3f4'}
//         />
//       </View>
//       <View style={styles.settingItem}>
//         <Text style={styles.settingLabel}>Notifications</Text>
//         <Switch
//           value={settings.notificationsEnabled}
//           onValueChange={() => toggleSetting('notificationsEnabled')}
//           trackColor={{ false: '#767577', true: '#81b0ff' }}
//           thumbColor={settings.notificationsEnabled ? '#f5dd4b' : '#f4f3f4'}
//         />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   settingItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     marginBottom: 20,
//     width: '100%',
//   },
//   settingLabel: {
//     fontSize: 18,
//   },
// });

// export default SettingScreen;


import React, { useState, useEffect } from 'react';
import { View, Text, Switch, StyleSheet, Appearance } from 'react-native';
import * as SecureStore from 'expo-secure-store';

const SettingScreen = () => {
  const [settings, setSettings] = useState({
    soundEnabled: true,
    notificationsEnabled: true,
  });

  const [darkModeEnabled, setDarkModeEnabled] = useState(false); // State to track dark mode

  useEffect(() => {
    loadSettings();
    updateAppearance(); // Set initial appearance mode on component mount
  }, []);

  useEffect(() => {
    saveSettings();
    updateAppearance(); // Update appearance mode when darkModeEnabled changes
  }, [settings, darkModeEnabled]);

  const loadSettings = async () => {
    try {
      const storedSettings = await SecureStore.getItemAsync('settings');
      if (storedSettings !== null) {
        setSettings(JSON.parse(storedSettings));
      }
    } catch (error) {
      console.log('Error loading settings:', error);
    }
  };

  const saveSettings = async () => {
    try {
      await SecureStore.setItemAsync('settings', JSON.stringify(settings));
    } catch (error) {
      console.log('Error saving settings:', error);
    }
  };

  const toggleSetting = (setting) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      [setting]: !prevSettings[setting],
    }));
  };

  // Function to update the appearance mode (dark or light)
  const updateAppearance = () => {
    const systemMode = Appearance.getColorScheme();
    setDarkModeEnabled(systemMode === 'dark');
  };

  const getThemeColors = () => {
    // Define your color scheme for both dark and light mode here
    return darkModeEnabled
      ? {
          backgroundColor: '#1E1E1E', // Dark mode background color
          textColor: '#FFFFFF', // Dark mode text color
          switchTrackColor: { false: '#767577', true: '#81b0ff' },
          switchThumbColor: settings.soundEnabled ? '#f5dd4b' : '#f4f3f4',
        }
      : {
          backgroundColor: '#FFFFFF', // Light mode background color
          textColor: '#000000', // Light mode text color
          switchTrackColor: { false: '#767577', true: '#81b0ff' },
          switchThumbColor: settings.soundEnabled ? '#f5dd4b' : '#f4f3f4',
        };
  };

  const themeColors = getThemeColors();

  return (
    <View style={[styles.container, { backgroundColor: themeColors.backgroundColor }]}>
      <View style={styles.settingItem}>
        <Text style={[styles.settingLabel, { color: themeColors.textColor }]}>Sound</Text>
        <Switch
          value={settings.soundEnabled}
          onValueChange={() => toggleSetting('soundEnabled')}
          trackColor={themeColors.switchTrackColor}
          thumbColor={themeColors.switchThumbColor}
        />
      </View>
      <View style={styles.settingItem}>
        <Text style={[styles.settingLabel, { color: themeColors.textColor }]}>Notifications</Text>
        <Switch
          value={settings.notificationsEnabled}
          onValueChange={() => toggleSetting('notificationsEnabled')}
          trackColor={themeColors.switchTrackColor}
          thumbColor={themeColors.switchThumbColor}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    width: '100%',
  },
  settingLabel: {
    fontSize: 18,
  },
});

export default SettingScreen;
