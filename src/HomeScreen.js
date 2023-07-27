import React, { useContext, useState, useEffect } from 'react';
import { SafeAreaView, View, Text, ScrollView, Image, ImageBackground, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Slider from '@react-native-community/slider';
import CustomButton from './components/CustomButton/CustomButton';
import { Icon, Header } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';

import quizCat from './../assets/images/page-academy4.png';
import Pawprint from './../assets/images/cute_sword.png';
import questions from './constants/questions';
import { AuthContext } from './AuthContext';

const HomeScreen = ({ navigation, route }) => {
  const { state, setQuestions, setTotalQuestions, setCourseName, setUsername } = useContext(AuthContext);
  const [questionCounts, setQuestionCounts] = useState({});
  const [showQuizModel, setShowQuizModel] = useState(false);
  const [sliderValue, setSliderValue] = useState(questions.length);
  

  useEffect(() => {
    const updateQuestionCounts = () => {
      const updatedQuestionCounts = {};
      questions.forEach((course) => {
        const { courseName, questions } = course;
        updatedQuestionCounts[courseName] = questions.length;
      });
      setQuestionCounts(updatedQuestionCounts);
    };

    updateQuestionCounts();
    setSliderValue(questions.state);
  }, []);

  const canStart = Object.values(questionCounts).some((count) => count > 0);

  const handleCourseSelection = (courseName) => {
    const selectedCourse = questions.find((course) => course.courseName === courseName);
    const selectedQuestions = selectedCourse ? selectedCourse.questions : [];
    const questionCount = selectedQuestions.length;

    // Randomize the questions
    const randomizedQuestions = selectedQuestions.sort(() => 0.5 - Math.random());

    setQuestions(randomizedQuestions);
    setTotalQuestions(questionCount);
    setCourseName(courseName);

    navigation.navigate('QuizScreen', {
      courseName,
      questions: randomizedQuestions,
      questionCount,
    });
  };

  const startMyQuizModel = () => {
    setShowQuizModel(true);
  };

  const renderCourseButton = (courseName) => {
    const questionCount = questionCounts[courseName] || 0;

    return (
      <TouchableOpacity
        style={styles.courseButton}
        onPress={() => handleCourseSelection(courseName)}
        key={courseName}
      >
        <Text style={styles.buttonText}>{courseName}</Text>
        <Text style={styles.buttonText}>{`${questionCount} Questions`}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <LinearGradient
          colors={['#00A8F0', '#1899D6']}
          start={{ x: 0, y: 1 }}
          end={{ x: 0, y: 0.33 }}
          style={styles.gradient}
        >
          <Text style={styles.titleText}>PAGE QUIZ</Text>
        </LinearGradient>

        <ScrollView contentContainerStyle={styles.outerOptionsContainer}>
          <View style={styles.optionsContainer}>
            <Text style={{ ...styles.subtitle, marginHorizontal: 40 }}>Choose number of questions: {questions.length}</Text>
            <View style={styles.sliderContainer}>
              <Slider
                style={styles.slider}
                step={1}
                minimumValue={10}
                maximumValue={50}
                minimumTrackTintColor="#00A8F0"
                maximumTrackTintColor="#00A8F0"
                value={sliderValue}
                onValueChange={(value) => setSliderValue(value)}
                thumbImage={Pawprint}
                thumbStyle={styles.sliderThumb}
              />
            </View>
          </View>

          <View style={styles.optionsContainer}>
            <Text style={{ ...styles.subtitle, marginHorizontal: 40, justifyContent: 'center', textAlign: 'center' }}>Choose a course:</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={true}>
              <ImageBackground
                source={require('./../assets/images/page-academy3.png')}
                style={styles.courseList}
              >
                {questions.map((course) => renderCourseButton(course.courseName))}
              </ImageBackground>
            </ScrollView>
          </View>

          <CustomButton
            width="40%"
            buttonText="Start"
            disabled={!canStart}
            type="secondary"
            onPress={startMyQuizModel}
          />
        </ScrollView>
      </View>
      <Image source={quizCat} alt="a hero cat on a quest" style={styles.homeImage} />

      <Modal animationType="slide" transparent={true} visible={showQuizModel}>
        <View style={styles.modalContainer}>
          <View style={{ ...styles.quizModelContainer, marginHorizontal: 30 }}>
            <Text style={styles.quizModelTitle}><Icon name='arrow-back' style={styles.quizModelTitle} />Select a Course<Icon name='arrow-forward' style={styles.quizModelTitle} /></Text>

            <ScrollView horizontal showsHorizontalScrollIndicator={true} >
              <ImageBackground
                source={require('./../assets/images/page-academy3.png')}
                style={{ ...styles.courseList, marginHorizontal: 30 }}
              >
                {questions.map((course) => renderCourseButton(course.courseName))}
              </ImageBackground>
            </ScrollView>

            <CustomButton
              width="50%"
              buttonText="Cancel"
              type="secondary"
              onPress={() => setShowQuizModel(false)}
            />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  innerContainer: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    margin: 10,
  },
  titleText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  outerOptionsContainer: {
    padding: 1,
  },
  optionsContainer: {
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#00A8F0',
  },
  sliderContainer: {
    marginTop: 5,
  },
  slider: {
    width: '100%',
    height: 40,
  },
  sliderThumb: {
    width: 30, // Adjust width as per your image
    height: 30, // Adjust height as per your image
  },
  courseList: {
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'scroll',
  },
  courseButton: {
    backgroundColor: '#00A8F0',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
    marginHorizontal: 4,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
  },
  homeImage: {
    width: '50%',
    height: 220,
    resizeMode: 'cover',
    alignSelf: 'center',
    marginBottom: 2,
    paddingTop: 2,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  quizModelContainer: {
    alignSelf: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 20,
    padding: 20,
    maxHeight: 250,
    width: '85%',
  },
  quizModelTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default HomeScreen;


