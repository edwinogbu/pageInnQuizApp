import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, TextInput, SafeAreaView, ScrollView } from 'react-native';
import { collection, doc, updateDoc, onSnapshot } from 'firebase/firestore';
import { firestore } from './../firebase/index';
import { Ionicons, MaterialCommunityIcons, AntDesign, FontAwesome5 } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const UserListScreen = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [editedUserType, setEditedUserType] = useState('');

  useEffect(() => {
    // Load state from AsyncStorage when the component mounts
    loadStateFromAsyncStorage();

    const unsubscribe = onSnapshot(collection(firestore, 'users'), (snapshot) => {
      const userArr = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setUsers(userArr);
    });

    return unsubscribe;
  }, []);

  const loadStateFromAsyncStorage = async () => {
    try {
      const storedState = await AsyncStorage.getItem('userListScreenState');
      if (storedState) {
        const parsedState = JSON.parse(storedState);
        setSelectedUser(parsedState.selectedUser);
        setEditedUserType(parsedState.editedUserType);
      }
    } catch (error) {
      console.error('Error loading state from AsyncStorage:', error);
    }
  };

  const saveStateToAsyncStorage = async () => {
    try {
      const stateToSave = JSON.stringify({
        selectedUser,
        editedUserType,
      });
      await AsyncStorage.setItem('userListScreenState', stateToSave);
    } catch (error) {
      console.error('Error saving state to AsyncStorage:', error);
    }
  };

  const updateUserType = async (userId, newUserType) => {
    const userDocRef = doc(firestore, 'users', userId);
    await updateDoc(userDocRef, { userType: newUserType });
  };

  const openModal = (user) => {
    setSelectedUser(user);
    setEditedUserType(user.userType);
    saveStateToAsyncStorage(); // Save the state when the modal is opened
  };

  const closeModal = () => {
    setSelectedUser(null);
    setEditedUserType('');
    saveStateToAsyncStorage(); // Save the state when the modal is closed
  };

  const saveChanges = async () => {
    if (!selectedUser) return;

    await updateUserType(selectedUser.id, editedUserType);
    closeModal();
  };

  const renderTableHeader = () => (
    <View style={styles.tableHeader}>
      <Text style={styles.tableHeaderText}>SN</Text>
      <Text style={styles.tableHeaderText}>Name</Text>
      <Text style={styles.tableHeaderText}>User Type</Text>
    </View>
  );

  const renderTableRow = (item, index) => {
    const rowStyle = index % 2 === 0 ? styles.tableRowEven : styles.tableRowOdd;

    return (
      <TouchableOpacity
        key={item.id}
        style={[styles.tableRow, rowStyle]}
        onPress={() => openModal(item)}
      >
        <Text style={styles.serialNumber}>{index + 1}</Text>
        <Text style={styles.userName}>{item.name}</Text>
        <Text style={styles.userType}>{item.userType}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>User List</Text>

        {renderTableHeader()}
        {users.map(renderTableRow)}

        <Modal visible={selectedUser !== null} animationType="slide" transparent>
          <View style={styles.modalContainer}>
            {selectedUser && (
              <>
                <Text style={styles.modalTitle}> Edit User Authorization Role</Text>
                <Text style={styles.modalUser}>{selectedUser.name}</Text>

                <TextInput
                  style={styles.modalInput}
                  placeholder="User Type"
                  value={editedUserType}
                  onChangeText={setEditedUserType}
                />

                <View style={styles.buttonContainer}>
                  <TouchableOpacity style={styles.saveButton} onPress={saveChanges}>
                    <Text style={styles.buttonText}>Save Changes</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.cancelButton} onPress={closeModal}>
                    <Text style={styles.buttonText}>Cancel</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </View>
        </Modal>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 32,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#2B60DA',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  tableHeaderText: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 10,
    paddingHorizontal: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  tableRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  tableRowEven: {
    backgroundColor: '#f9f9f9',
  },
  tableRowOdd: {
    backgroundColor: '#ffffff',
  },
  serialNumber: {
    flex: 1,
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
  },
  userName: {
    flex: 2,
    fontSize: 16,
    color: '#333',
  },
  userType: {
    flex: 2,
    fontSize: 14,
    color: '#888',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 20, 20, 0.8)',
    padding: 32,
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff',
  },
  modalUser: {
    fontSize: 18,
    marginBottom: 10,
    color: '#fff',
    fontWeight: 'bold',
    margin: 20,
  },
  modalInput: {
    borderWidth: 2,
    borderColor: '#007AFF',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 10,
    backgroundColor: '#F5F5F5',
    fontWeight: 'bold',
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  saveButton: {
    flex: 1,
    backgroundColor: '#007AFF',
    alignItems: 'center',
    paddingVertical: 12,
    borderRadius: 8,
    marginRight: 10,
  },
  cancelButton: {
    flex: 1,
    backgroundColor: '#999',
    alignItems: 'center',
    paddingVertical: 12,
    borderRadius: 8,
  },
});

export default UserListScreen;
