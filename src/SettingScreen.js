import React, { useState, useEffect } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import * as SecureStore from 'expo-secure-store';

const SettingScreen = () => {
  const [settings, setSettings] = useState({
    soundEnabled: true,
    notificationsEnabled: true,
  });

  useEffect(() => {
    loadSettings();
  }, []);

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
  
//   const loadSettings = async () => {
//     try {
//       const storedSettings = await AsyncStorage.getItem('settings');
//       if (storedSettings !== null) {
//         setSettings(JSON.parse(storedSettings));
//       }
//     } catch (error) {
//       console.log('Error loading settings:', error);
//     }
//   };

//   const saveSettings = async () => {
//     try {
//       await AsyncStorage.setItem('settings', JSON.stringify(settings));
//     } catch (error) {
//       console.log('Error saving settings:', error);
//     }
//   };


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

  useEffect(() => {
    saveSettings();
  }, [settings]);

  return (
    <View style={styles.container}>
      <View style={styles.settingItem}>
        <Text style={styles.settingLabel}>Sound</Text>
        <Switch
          value={settings.soundEnabled}
          onValueChange={() => toggleSetting('soundEnabled')}
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={settings.soundEnabled ? '#f5dd4b' : '#f4f3f4'}
        />
      </View>
      <View style={styles.settingItem}>
        <Text style={styles.settingLabel}>Notifications</Text>
        <Switch
          value={settings.notificationsEnabled}
          onValueChange={() => toggleSetting('notificationsEnabled')}
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={settings.notificationsEnabled ? '#f5dd4b' : '#f4f3f4'}
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
