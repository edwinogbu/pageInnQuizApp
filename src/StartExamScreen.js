import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  collection,
  doc,
  getDoc,
  updateDoc,
  setDoc,
} from 'firebase/firestore';
import { firestore } from './../firebase/index';
import questions from './constants/questions';
import AsyncStorage from '@react-native-async-storage/async-storage';

const StartExamScreen = () => {
  const navigation = useNavigation();
  const [courseStatus, setCourseStatus] = useState({});

  useEffect(() => {
    loadStateFromAsyncStorage();
    retrieveExamData();
  }, []);

  const retrieveExamData = async () => {
    const initialStatuses = {};
    for (const course of questions) {
      const courseName = course.courseName;
      const sanitizedCourseName = courseName.replace(/\//g, '_'); // Replace slashes with underscores
      const examDocRef = doc(firestore, 'exams', sanitizedCourseName);
      const examSnapshot = await getDoc(examDocRef);

      if (examSnapshot.exists()) {
        initialStatuses[sanitizedCourseName] = examSnapshot.data().startStatus;
      } else {
        // If the document doesn't exist, initialize it as not started
        initialStatuses[sanitizedCourseName] = false;
      }
    }

    setCourseStatus(initialStatuses);
    saveStateToAsyncStorage(initialStatuses);
  };

  const handleStartExam = async (courseName) => {
    if (!courseName) {
      Alert.alert('Error', 'Please select a course.');
      return;
    }

    const currentStatus = courseStatus[courseName];
    const newStatus = !currentStatus;

    const sanitizedCourseName = courseName.replace(/\//g, '_'); // Replace slashes with underscores
    const examData = {
      startStatus: newStatus,
    };

    try {
      const examDocRef = doc(firestore, 'exams', sanitizedCourseName);
      const examSnapshot = await getDoc(examDocRef);

      if (examSnapshot.exists()) {
        // Document exists, update it
        await updateDoc(examDocRef, examData);
      } else {
        // Document doesn't exist, create a new one
        await setDoc(examDocRef, examData);
      }

      // Update the course status
      setCourseStatus({ ...courseStatus, [sanitizedCourseName]: newStatus });

      // Save the state in AsyncStorage
      saveStateToAsyncStorage({ ...courseStatus, [sanitizedCourseName]: newStatus });
    } catch (error) {
      console.error('Error starting the exam:', error);
      Alert.alert('Error', 'Failed to start the exam. Please try again.');
    }
  };

  const saveStateToAsyncStorage = async (state) => {
    try {
      await AsyncStorage.setItem('courseStatus', JSON.stringify(state));
    } catch (error) {
      console.error('Error saving state to AsyncStorage:', error);
    }
  };

  const loadStateFromAsyncStorage = async () => {
    try {
      const storedState = await AsyncStorage.getItem('courseStatus');
      if (storedState) {
        const parsedState = JSON.parse(storedState);
        setCourseStatus(parsedState);
      }
    } catch (error) {
      console.error('Error loading state from AsyncStorage:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.homeButton}
            onPress={() => navigation.navigate('Home')}
          >
            <Text style={styles.homeButtonText}>Home</Text>
          </TouchableOpacity>
        </View>
        <ScrollView>
          <Text style={styles.title}>Start Exam</Text>
          <Text style={styles.subtitle}>Select a Course:</Text>
          {questions.map((course, index) => (
            <View style={styles.courseRow} key={index}>
              <View style={styles.courseInfo}>
                <Text style={styles.courseName}>
                  {course.courseName} {/* Display sanitized course name */}
                </Text>
                <Text style={styles.statusText}>
                  {courseStatus[course.courseName] ? 'Started' : 'Not Started'}
                </Text>
              </View>
              <TouchableOpacity
                style={[
                  styles.startButton,
                  courseStatus[course.courseName] ? styles.stopButton : null,
                ]}
                onPress={() => handleStartExam(course.courseName)}
              >
                <Text style={styles.startButtonText}>
                  {courseStatus[course.courseName] ? 'Stop Exam' : 'Start Exam'}
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  card: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    elevation: 2,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 16,
  },
  homeButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  homeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  courseRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 8,
    marginBottom: 8,
  },
  courseInfo: {
    flex: 1,
  },
  courseName: {
    fontSize: 16,
  },
  statusText: {
    fontSize: 14,
    color: '#777',
  },
  startButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  stopButton: {
    backgroundColor: 'red',
  },
  startButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default StartExamScreen;
