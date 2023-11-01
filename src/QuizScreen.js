import React, { useContext, useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ImageBackground, ScrollView, Alert } from 'react-native';
import { Icon, Header } from 'react-native-elements';
import { Ionicons, Entypo } from '@expo/vector-icons';
import { AuthContext } from './AuthContext';
import { firestore, database, auth } from './../firebase';
import { doc, getDoc, getDocs, setDoc, addDoc, collection, where } from 'firebase/firestore';
import { getDatabase, ref, query, orderByChild, equalTo, push, set, onValue } from 'firebase/database';
import AsyncStorage from '@react-native-async-storage/async-storage';

const QuizScreen = ({ navigation, route }) => {
  const { courseName, questions, questionCount, username } = route.params;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(30);

  const { state: { user }, saveQuizDetailsToFirestore } = useContext(AuthContext);

  const currentQuestions = questions;

  const shuffleOptions = (options) => {
    let shuffledOptions = [...options];
    for (let i = shuffledOptions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledOptions[i], shuffledOptions[j]] = [shuffledOptions[j], shuffledOptions[i]];
    }
    return shuffledOptions;
  };

  const showRulesAlert = () => {
    Alert.alert(
      'Exam Rules',
      'Here are the rules of this exam\n' +
        'You have 30 seconds for each question\n' +
        'Once you pick an option, you cannot change it anymore',
      [
        {
          text: 'Start Exam',
          onPress: handleStartExam,
        },
      ]
    );
  };

  const handleStartExam = () => {
    const timerInterval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer === 0) {
          handleNext();
        }
        return prevTimer - 1;
      });
    }, 1000);

    return () => clearInterval(timerInterval);
  };

  useEffect(() => {
    showRulesAlert();
    // Shuffle the options when the component mounts
    shuffleCurrentOptions();
    // Load user answers from AsyncStorage when the component mounts
    loadUserAnswers();
  }, []);

  // Use Firebase's onAuthStateChanged to track the current user
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        setUserId(null);
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    // Shuffle the options when the current question changes
    shuffleCurrentOptions();
  }, [currentQuestion]);

  useEffect(() => {
    // Save user answers to AsyncStorage whenever they change
    saveUserAnswers();
  }, [userAnswers]);

  const shuffleCurrentOptions = () => {
    if (currentQuestions[currentQuestion]?.options) {
      const shuffledOptions = shuffleOptions(currentQuestions[currentQuestion]?.options);
      currentQuestions[currentQuestion].options = shuffledOptions;
    }
  };

  const loadUserAnswers = async () => {
    try {
      const savedUserAnswers = await AsyncStorage.getItem('userAnswers');
      if (savedUserAnswers) {
        setUserAnswers(JSON.parse(savedUserAnswers));
      }
    } catch (error) {
      console.error('Error loading user answers from AsyncStorage:', error);
    }
  };

  const saveUserAnswers = async () => {
    try {
      await AsyncStorage.setItem('userAnswers', JSON.stringify(userAnswers));
    } catch (error) {
      console.error('Error saving user answers to AsyncStorage:', error);
    }
  };

  const handleAnswer = (selectedAnswer) => {
    setUserAnswers([...userAnswers, selectedAnswer]);

    if (selectedAnswer === currentQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    setSelectedOption(selectedAnswer);
    setAnswered(true);
  };

  const handleNext = () => {
    if (currentQuestion < currentQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
      setAnswered(false);
      setTimer(30);
    } else {
      const totalQuestions = currentQuestions.length;
      const correctAnswers = score;
      const wrongAnswers = totalQuestions - score;
      const percentageScore = (score / totalQuestions) * 100;

      const resultData = {
        userId: user.uid,
        totalQuestions,
        correctAnswers,
        wrongAnswers,
        percentageScore,
        username: user.displayName,
        courseName,
      };

      saveQuizDetailsToFirestore(user.uid, totalQuestions, correctAnswers, wrongAnswers, percentageScore);
      saveToFirestore(resultData); // Use AsyncStorage to save the result
      // Navigate to the result screen without sending an email
      navigation.navigate('ResultScreen', resultData);
    }
  };

  const progress = ((currentQuestion + 1) / currentQuestions.length) * 100;

  const saveToRealtimeDB = async (resultData) => {
    try {
      const databaseRef = ref(database);
      const newResultRef = push(ref(databaseRef, 'quizResults'));
      await set(newResultRef, resultData);
      console.log('Quiz result saved successfully to Realtime Database.');
    } catch (error) {
      console.log('Error saving quiz result to Realtime Database:', error);
    }
  };

  const saveToFirestore = async (resultData) => {
    try {
      const quizResultsRef = collection(firestore, 'quizResults');
      await addDoc(quizResultsRef, resultData);
      // Save the result to AsyncStorage
      await saveToAsyncStorage(resultData);
    } catch (error) {
      console.log('Error saving quiz result to Firestore:', error);
    }
  };

  const handleDone = () => {
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={require('./../assets/images/tech.png')} style={styles.backgroundImage}>
        <Header
          centerComponent={{ text: ` ${courseName}`, style: { color: '#fff', fontSize: 14, fontWeight: 'bold' } }}
          leftComponent={
            <TouchableOpacity onPress={handleDone} style={{}}>
              <Ionicons name="ios-arrow-back" size={14} color="#fff" />
              <Text style={{ color: '#fff', marginLeft: 20, fontSize: 12 }}>Back</Text>
            </TouchableOpacity>
          }
          rightComponent={
            <View style={styles.timerContainer}>
              <Entypo name="clock" size={30} color="#fff" />
              <Text style={{ ...styles.timerText, color: '#FFF' }}>{`Time: ${timer}`}</Text>
            </View>
          }
        />

        <View style={{ ...styles.progressContainer, marginVertical: 24 }}>
          <View style={[styles.progressBar, { width: `${progress}%` }]} />
        </View>

        <ScrollView vertical showsHorizontalScrollIndicator={true}>
          <View style={{ ...styles.content, margin: 20, paddingBottom: 20 }}>
            <View style={styles.questionContainer}>
              <Text style={{ ...styles.questionText, color: '#FFFCFF' }}>{currentQuestions[currentQuestion]?.question}</Text>
              <Text style={styles.questionCount}>{`Question ${currentQuestion + 1} of ${questionCount}`}</Text>
            </View>
            <View style={styles.optionsContainer}>
              {currentQuestions[currentQuestion]?.options.map((option) => (
                <TouchableOpacity
                  key={option}
                  style={[
                    styles.optionButton,
                    selectedOption === option && option === currentQuestions[currentQuestion]?.correctAnswer
                      ? styles.correctOption
                      : selectedOption === option && option !== currentQuestions[currentQuestion]?.correctAnswer
                      ? styles.wrongOption
                      : null,
                  ]}
                  onPress={() => handleAnswer(option)}
                  disabled={answered}
                >
                  <Text style={styles.optionText}>{option}</Text>
                </TouchableOpacity>
              ))}
            </View>
            <TouchableOpacity style={styles.nextButton} onPress={handleNext} disabled={!answered}>
              <Text style={styles.nextButtonText}>
                {currentQuestion === currentQuestions.length - 1 ? 'Finish' : 'Next'}
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  timerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timerText: {
    fontSize: 16,
    marginLeft: 6,
    fontWeight: 'bold',
  },
  progressContainer: {
    flexDirection: 'row',
    height: 10,
    width: '100%',
    backgroundColor: '#e0e0de',
    borderRadius: 5,
  },
  progressBar: {
    height: 10,
    borderRadius: 5,
    backgroundColor: '#00A8F0',
  },
  content: {
    borderRadius: 15,
    backgroundColor: 'rgba(33, 150, 243, 0.7)',
  },
  questionContainer: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#FFF',
  },
  questionText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  questionCount: {
    fontSize: 14,
    color: '#FFF',
    fontWeight: 'bold',
  },
  optionsContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  optionButton: {
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 50,
    marginVertical: 10,
  },
  optionText: {
    fontSize: 16,
  },
  correctOption: {
    backgroundColor: '#00FF00',
  },
  wrongOption: {
    backgroundColor: '#FF0000',
  },
  nextButton: {
    backgroundColor: '#FF6347',
    borderColor: '#FFF',
    borderWidth: 5,
    padding: 15,
    borderRadius: 50,
    marginHorizontal: 20,
    marginTop: 20,
    alignItems: 'center',
  },
  nextButtonText: {
    fontSize: 16,
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default QuizScreen;
