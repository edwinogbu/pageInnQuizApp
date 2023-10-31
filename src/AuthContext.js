import React, { createContext, useReducer, useState, useEffect } from 'react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { doc, setDoc, addDoc, collection, where } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { auth, firestore, storage } from './../firebase';
import * as SecureStore from 'expo-secure-store';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage

import authReducer from './authReducer';

const initialState = {
  user: null,
  isLoading: true,
  questions: [],
  totalQuestions: 0,
  correctAnswers: 0,
  wrongAnswers: 0,
  percentageScore: 0,
  username: '',
  userScore: 0,
  courseName: '',
  leaderboardData: [], // Add leaderboardData to the initial state
};

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    // Load user state from SecureStore on component mount
    loadUserState();
  }, []);

  const setUser = (user) => {
    dispatch({ type: 'SET_USER', payload: user });
    saveValueToSecureStore('user', user);
  };

  const signIn = async (email, password) => {
    dispatch({ type: 'SET_LOADING', payload: true });
    setError(null);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      dispatch({ type: 'SIGN_IN', payload: user });
      saveValueToSecureStore('user', user);
      setUser({
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        phoneNumber: user.phoneNumber,
      });
    } catch (error) {
      console.log('Sign in error:', error);
      setError('Sign in failed. Please check your credentials and try again.');
    }
  };

  const signUp = async (name, email, phone, password, profilePicture) => {
    dispatch({ type: 'SET_LOADING', payload: true });
    setError(null);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await updateProfile(user, { displayName: name, phoneNumber: phone, email });

      const userId = user.uid;
      const userDetails = {
        userId: user.uid,
        userType: 'user',
        name,
        email,
        phone,
      };

      await saveUserDetail(userId, userDetails);

      const profilePictureUrl = await uploadProfilePicture(user.uid, profilePicture);

      await updateProfile(user, { photoURL: profilePictureUrl });

      dispatch({ type: 'SIGN_IN', payload: user });
      saveValueToSecureStore('user', user);
      setUser({
        uid: user.uid,
        email: user.email,
        displayName: user.displayName || name,
        phoneNumber: user.phoneNumber,
      });
    } catch (error) {
      console.log('Sign up error:', error);
      setError('Sign up failed. Please try again.');
    }
  };

  const saveUserDetail = async (uid, userDetails) => {
    try {
      const userRef = doc(firestore, 'users', uid);
      await setDoc(userRef, userDetails);
    } catch (error) {
      console.error('Error saving user details to Firestore:', error);
    }
  };

  const uploadProfilePicture = async (userId, file) => {
    const profilePictureRef = storage.ref(`profilePictures/${userId}`);
    try {
      await uploadBytes(profilePictureRef, file);
      const profilePictureUrl = await getDownloadURL(profilePictureRef);
      return profilePictureUrl;
    } catch (error) {
      console.log('Error uploading profile picture:', error);
      setError('Failed to upload profile picture. Please try again.');
      return null;
    }
  };

  const handleSignOut = async () => {
    dispatch({ type: 'SET_LOADING', payload: true });
    setError(null); // Clear previous errors
    try {
      await signOut(auth);
      dispatch({ type: 'SIGN_OUT' });
      deleteValueFromSecureStore('user');
    } catch (error) {
      console.log('Sign out error:', error);
      setError('Sign out failed. Please try again.'); // Set error message
    }
  };

  const setQuestions = (questions) => {
    dispatch({ type: 'SET_QUESTIONS', payload: questions });
  };

  const setTotalQuestions = (totalQuestions) => {
    dispatch({ type: 'SET_TOTAL_QUESTIONS', payload: totalQuestions });
  };

  const setCorrectAnswers = (correctAnswers) => {
    dispatch({ type: 'SET_CORRECT_ANSWERS', payload: correctAnswers });
  };

  const setWrongAnswers = (wrongAnswers) => {
    dispatch({ type: 'SET_WRONG_ANSWERS', payload: wrongAnswers });
  };

  const setPercentageScore = (percentageScore) => {
    dispatch({ type: 'SET_PERCENTAGE_SCORE', payload: percentageScore });
  };

  const setUsername = (username) => {
    dispatch({ type: 'SET_USERNAME', payload: username });
  };

  const setUserScore = (userScore) => {
    dispatch({ type: 'SET_USER_SCORE', payload: userScore });
  };

  const setCourseName = (courseName) => {
    dispatch({ type: 'SET_COURSE_NAME', payload: courseName });
  };

  const saveValueToSecureStore = async (key, value) => {
    try {
      const valueString = JSON.stringify(value);
      await SecureStore.setItemAsync(key, valueString);
      await AsyncStorage.setItem(key, valueString); // Also save to AsyncStorage
    } catch (error) {
      console.log(`Error saving ${key} to SecureStore:`, error);
    }
  };

  const deleteValueFromSecureStore = async (key) => {
    try {
      await SecureStore.deleteItemAsync(key);
      await AsyncStorage.removeItem(key); // Also remove from AsyncStorage
    } catch (error) {
      console.log(`Error deleting ${key} from SecureStore:`, error);
    }
  };

  const loadUserState = async () => {
    try {
      const userString = await SecureStore.getItemAsync('user');
      if (userString) {
        const user = JSON.parse(userString);
        dispatch({ type: 'SET_USER', payload: user });
      }
      dispatch({ type: 'SET_LOADING', payload: false });
    } catch (error) {
      console.log('Error loading user state:', error);
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  const saveQuizDetailsToFirestore = async (userId, totalQuestions, correctAnswers, wrongAnswers, percentageScore) => {
    try {
      if (userId) {
        const quizCollectionRef = collection(firestore, 'quizzes');
        const docRef = await addDoc(quizCollectionRef, {
          userId: userId,
          totalQuestions: totalQuestions,
          correctAnswers: correctAnswers,
          wrongAnswers: wrongAnswers,
          percentageScore: percentageScore,
          timestamp: new Date(), // Use JavaScript's Date object for timestamp
        });
        console.log('Quiz details saved to Firestore with ID:', docRef.id);
      } else {
        console.error('Invalid userId:', userId);
      }
    } catch (error) {
      console.error('Error saving quiz details to Firestore:', error);
    }
  };

  const updateLeaderboardData = (data) => {
    dispatch({ type: 'UPDATE_LEADERBOARD_DATA', payload: data });
  };

  return (
    <AuthContext.Provider
      value={{
        state,
        setUser,
        signIn,
        signUp,
        signOut: handleSignOut,
        setQuestions,
        setTotalQuestions,
        setCorrectAnswers,
        setWrongAnswers,
        setPercentageScore,
        setUsername,
        setUserScore,
        setCourseName,
        saveUserDetail,
        uploadProfilePicture,
        updateLeaderboardData,
        saveQuizDetailsToFirestore,
        error,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
