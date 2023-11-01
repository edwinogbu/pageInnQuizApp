import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { firestore } from './../firebase';

const ExamsHistoryScreen = ({ route }) => {
  const { courseName, userId } = route.params;
  const [examResults, setExamResults] = useState([]);

  useEffect(() => {
    const fetchExamResults = async () => {
      try {
        const quizResultsRef = firestore.collection('quizResults');
        const query = firestore
          .collection('quizResults')
          .where('courseName', '==', courseName)
          .where('userId', '==', userId);

        const querySnapshot = await query.get();

        const results = [];
        querySnapshot.forEach((doc) => {
          results.push(doc.data());
        });

        setExamResults(results);
      } catch (error) {
        console.error('Error fetching exam results:', error);
      }
    };

    fetchExamResults();
  }, [courseName, userId]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>{`Exam History for ${courseName}`}</Text>
        {examResults.map((result, index) => (
          <View key={index} style={styles.examResult}>
            <Text style={styles.resultText}>{`Username: ${result.username}`}</Text>
            <Text style={styles.resultText}>{`Total Questions: ${result.totalQuestions}`}</Text>
            <Text style={styles.resultText}>{`Correct Answers: ${result.correctAnswers}`}</Text>
            <Text style={styles.resultText}>{`Wrong Answers: ${result.wrongAnswers}`}</Text>
            <Text style={styles.resultText}>{`Percentage Score: ${result.percentageScore}%`}</Text>
            <Text style={styles.resultText}>{'User Answers:'}</Text>
            {result.userAnswers.map((answer, i) => (
              <Text key={i} style={styles.answerText}>
                {`Question ${i + 1}: Your Answer - ${answer}, Correct Answer - ${result.correctAnswers[i]}`}
              </Text>
            ))}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 20,
  },
  examResult: {
    backgroundColor: '#E8E8E8',
    borderRadius: 10,
    margin: 10,
    padding: 15,
  },
  resultText: {
    fontSize: 16,
    marginBottom: 5,
  },
  answerText: {
    fontSize: 14,
    marginLeft: 10,
    color: 'blue',
  },
});

export default ExamsHistoryScreen;
