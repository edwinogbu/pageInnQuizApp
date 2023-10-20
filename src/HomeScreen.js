import quizCat from './../assets/images/page-academy4.png';
import React, { useContext, useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Alert,
  FlatList,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Slider from '@react-native-community/slider';
import CustomButton from './components/CustomButton/CustomButton';
import { Icon } from 'react-native-elements';
import Pawprint from './../assets/images/cute_sword.png';
import questions from './constants/questions';
import { AuthContext } from './AuthContext';
import {
  collection,
  getDocs,
  query,
  where,
  doc,
  getDoc,
} from 'firebase/firestore';
import { firestore } from './../firebase/index';
import { FontAwesome5 } from '@expo/vector-icons';


const HomeScreen = ({ navigation, route }) => {
  const { state, setQuestions, setTotalQuestions, setCourseName, setUsername } = useContext(AuthContext);
  const [questionCounts, setQuestionCounts] = useState({});
  const [showQuizModal, setShowQuizModal] = useState(false);
  const [sliderValue, setSliderValue] = useState(questions.length);
  const [courseStatuses, setCourseStatuses] = useState({});

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
    setSliderValue(questions.length);
  }, []);

  useEffect(() => {
    const fetchCourseStatuses = async () => {
      const statuses = {};
      const courseQuery = query(collection(firestore, 'exams'));

      const courseQuerySnapshot = await getDocs(courseQuery);
      courseQuerySnapshot.forEach((doc) => {
        const courseName = doc.id;
        const courseData = doc.data();
        statuses[courseName] = courseData.startStatus;
      });

      setCourseStatuses(statuses);
    };

    fetchCourseStatuses();
  }, []);

  const canStart = Object.values(questionCounts).some((count) => count > 0);

  const handleCourseSelection = (courseName) => {
    if (courseStatuses[courseName]) {
      const selectedCourse = questions.find((course) => course.courseName === courseName);
      const selectedQuestions = selectedCourse ? selectedCourse.questions : [];
      const questionCount = selectedQuestions.length;

      const randomizedQuestions = selectedQuestions.sort(() => 0.5 - Math.random());

      setQuestions(randomizedQuestions);
      setTotalQuestions(questionCount);
      setCourseName(courseName);

      navigation.navigate('QuizScreen', {
        courseName,
        questions: randomizedQuestions,
        questionCount,
      });
    } else {
      Alert.alert('Course Not Started', 'This course has not started yet.');
    }
  };

  const startMyQuizModal = () => {
    setShowQuizModal(true);
  };

  const renderCourseButton = ({ item }) => {
    const { courseName } = item;
    const questionCount = questionCounts[courseName] || 0;
    const courseStatus = courseStatuses[courseName] || false;
    const courseButtonColor = courseStatus ? styles.enabledCourse : styles.disabledCourse;

    return (
      <TouchableOpacity
        style={[styles.courseButton, courseButtonColor]}
        onPress={() => handleCourseSelection(courseName)}
        key={courseName}
      >
        <Text style={styles.courseButtonText}>{courseName}</Text>
        <Text style={styles.courseButtonText}>{`${questionCount} Questions`}</Text>
        <Text style={styles.courseButtonText}>{courseStatus ? 'Course Started' : 'Course Not Started'}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#00A8F0', '#1899D6']}
        start={{ x: 0, y: 1 }}
        end={{ x: 0, y: 0.33 }}
        style={styles.gradient}
      >
        <Text style={styles.titleText}>PAGE QUIZ</Text>
      </LinearGradient>

      <View style={styles.sliderSection}>
        <Text style={styles.subtitle}>Total Available Courses: {questions.length}</Text>
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

      <View style={styles.courseSection}>
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        <FontAwesome5 name="angle-double-left" size={14}  style={{ color:'#00A8F0'}}/>
        <Text style={styles.subtitle}>Scroll... Choose a course:</Text>
        <FontAwesome5 name="angle-double-right" size={14} style={{color:'#00A8F0'}} />
        <FontAwesome5 name="angle-double-right" size={14} style={{color:'#00A8F0'}} />
      </View>

        <FlatList
          data={questions}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.courseName}
          renderItem={renderCourseButton}
        />
      </View>
      <CustomButton
        width="40%"
        buttonText="Start"
        disabled={!canStart}
        type="secondary"
        onPress={startMyQuizModal}
        style={styles.startButton}
      />
      <Image source={quizCat} alt="a hero cat on a quest" style={styles.homeImage} />

      <Modal animationType="slide" transparent={true} visible={showQuizModal}>
        <View style={styles.modalContainer}>
          <View style={styles.quizModalContainer}>
            <Text style={styles.quizModalTitle}>
              <Icon name='arrow-back' style={styles.quizModalTitle} />Select a Course
              <Icon name='arrow-forward' style={styles.quizModalTitle} />
            </Text>

            <FlatList
              data={questions}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.courseName}
              renderItem={renderCourseButton}
            />

            <CustomButton
              width="50%"
              buttonText="Cancel"
              type="secondary"
              onPress={() => setShowQuizModal(false)}
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
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    margin: 5,
  },
  titleText: {
    fontSize: 32,
    color: '#fff',
    fontWeight: 'bold',
  },
  sliderSection: {
    marginBottom: 20,
  },
  courseSection: {
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight:'bold',
    color: '#00A8F0',
    marginBottom: 10,
    margin:20,
  },
  slider: {
    width: '100%',
    height: 40,
  },
  sliderThumb: {
    width: 30,
    height: 30,
  },
  courseButton: {
    backgroundColor: '#00A8F0',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 20,
    marginHorizontal: 8,
  },
  courseButtonText: {
    color: '#fff',
    fontWeight:'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  homeImage: {
    width: '50%',
    height: 220,
    resizeMode: 'cover',
    alignSelf: 'center',
    marginBottom: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  quizModalContainer: {
    alignSelf: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 20,
    padding: 20,
    maxHeight: 250,
    width: '85%',
  },
  quizModalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  enabledCourse: {
    backgroundColor: '#00A8F0',
  },
  disabledCourse: {
    backgroundColor: '#CCCCCC',
  },
  startButton: {
    alignSelf: 'center',
  },
});

export default HomeScreen;
