import React, { useContext, useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ImageBackground, ScrollView, Alert } from 'react-native';
import { Icon, Header } from 'react-native-elements';
import { Ionicons, Entypo } from '@expo/vector-icons';
import { AuthContext } from './AuthContext';
import { firestore, database, auth } from './../firebase';
import { doc, getDoc, getDocs, setDoc, addDoc, collection,  where } from 'firebase/firestore';
import { getDatabase, ref, query, orderByChild, equalTo, push, set, onValue } from 'firebase/database';


import * as SecureStore from 'expo-secure-store';

const QuizScreen = ({ navigation, route }) => {
  const { courseName, questions, questionCount, username,  } = route.params;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(30);

  const { state: { user }, saveQuizDetailsToFirestore } = useContext(AuthContext);
  const [userId, setUserId] = useState(user.uid); // Add state for userId
 
  const currentQuestions = questions;


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
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthChange((user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        setUserId(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleAnswer = (selectedAnswer) => {
    setUserAnswers([...userAnswers, selectedAnswer]);

    if (selectedAnswer === currentQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    setSelectedOption(selectedAnswer);
    setAnswered(true);
  };

  // Rest of the code...

  // Add the onAuthChange function to keep track of the current user
  const onAuthChange = (callback) => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      callback(user);
    });

    return unsubscribe;
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
        userId:userId || (user && (user.userId || user.uid)) || '',
        totalQuestions,
        correctAnswers,
        wrongAnswers,
        percentageScore,
        username: (user && (user.name || user.displayName)) || username,
        courseName,
      };

      saveQuizDetailsToFirestore(user.uid, totalQuestions, correctAnswers, wrongAnswers, percentageScore);

      saveToSecureStore(resultData);
      saveToFirestore(resultData);
      saveToRealtimeDB(resultData);
      // saveQuizDetailsToFirestore(resultData);

      // saveToRealTimeDB(resultData);


      navigation.navigate('ResultScreen', resultData);
    }
  };
  const progress = ((currentQuestion + 1) / currentQuestions.length) * 100;

  // const saveToFirestore = async (resultData) => {
  //   try {
  //     const quizResultsRef = collection(firestore, 'quizResults');
  //     await addDoc(quizResultsRef, resultData);
  //     console.log('Quiz result saved successfully.');
  //   } catch (error) {
  //     console.log('Error saving quiz result to Firestore:', error);
  //   }
  // };

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

const saveToSecureStore = async (resultData) => {
  try {
    const resultDataString = JSON.stringify(resultData);
    await SecureStore.setItemAsync('quizResult', resultDataString);
    console.log('Quiz result saved to SecureStore successfully!');
  } catch (error) {
    console.error('Error saving quiz result to SecureStore:', error);
  }
};

const saveToFirestore = async (resultData) => {
  try {
    const quizResultsRef = collection(firestore, 'quizResults');
    await addDoc(quizResultsRef, resultData);
  } catch (error) {
    console.log('Error saving quiz result to Firestore:', error);
  }
};


  const handleQuizStore = (resultData) => {
    saveQuizDetailsToFirestore(resultData);
  }

  const handleShare = () => {
    const message = `I scored ${percentageScore}% in the ${courseName} quiz! Check out my result on the Page Exams Cert app.`;
    Share.share({
      message: message,
    });
  };

  const [refreshed, setRefreshed] = useState(false);

  const handleDone = () => {
    navigation.navigate('Home');
    setRefreshed(false);
  };

  useEffect(() => {
    const refreshComponent = navigation.addListener('focus', () => {
      if (refreshed) {
        // Refresh component logic here
        console.log('Component Refreshed');
      }
    });

    return refreshComponent;
  }, [navigation, refreshed]);

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
              <Text style={styles.nextButtonText}>{currentQuestion === currentQuestions.length - 1 ? 'Finish' : 'Next'}</Text>
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
    // backgroundColor: '#2196F3',
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
    fontWeight:'bold'
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
    // backgroundColor: '#FFA500',

    backgroundColor: '#FF6347',
    borderColor: '#FFF',
    borderWidth:5,
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
