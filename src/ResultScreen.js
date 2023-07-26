import React, { useEffect, useContext, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ImageBackground, Share, Image } from 'react-native';
import { Icon, Header } from 'react-native-elements';
import { AuthContext } from './AuthContext';
import { Ionicons } from '@expo/vector-icons';
import { firestore } from './../firebase';
import { getFirestore, collection, addDoc, doc, getDoc, setDoc } from 'firebase/firestore';


const ResultScreen = ({navigation, route }) => {
  const { courseName, totalQuestions, correctAnswers, wrongAnswers, percentageScore, username } = route.params;
  const { state: { user } } = useContext(AuthContext);
  const userId = user.uid;

  const handleShare = () => {
    const message = `I scored ${percentageScore}% in the ${courseName} quiz! Check out my result on the Page Exams Cert app.`;
    Share.share({
      message: message,
    });
  };

  const handleCertificate = () => {
    navigation.navigate('CertificateScreen', {
      totalQuestions,
      correctAnswers,
      wrongAnswers,
      percentageScore,
      username: user && user.name || user.displayName,
      courseName,
    });
  };

  const medalColor = percentageScore >= 90 ? '#FFD700' : percentageScore >= 70 ? '#C0C0C0' : '#CD7F32';
  const medalIconName = 'medal';

  
  const [refreshed, setRefreshed] = useState(false);

  // const handleDone = () => {
  //   navigation.navigate('HomeScreen');
  //   setRefreshed(false);
  // };

  const handleDone = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'HomeScreen' }],
    });
    // setRefreshed(false);

  };


  useEffect(() => {
    const refreshComponent = navigation.addListener('focus', () => {
      // Refresh component logic here
      console.log('Component Refreshed');
      // Additional logic to reset result state, fetch new data, etc.
    });

    return () => {
      refreshComponent();
    };
  }, [navigation]);

  const handleReturnHome = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'HomeScreen' }],
    });
  };

  return (
    <SafeAreaView style={styles.container}>
    <ImageBackground source={require('./../assets/images/page-academy4.png')} style={styles.backgroundImage}>
      <Header
        centerComponent={{
          text: 'Home',
          style: { color: '#fff', fontSize: 18 },
          icon: (
            <TouchableOpacity onPress={handleDone} style={styles.centerComponent}>
              <Text style={{ color: '#fff' }} onPress={handleDone} >Result</Text>
              <Ionicons name="person" size={24} color="#fff" style={styles.icon} />
            </TouchableOpacity>
          ),
        }}
        leftComponent={
          <TouchableOpacity onPress={() => navigation.navigate("Home")} style={styles.backButton}>
            <Ionicons name="ios-arrow-back" size={24} color="#fff" />
            <Text style={{ color: '#fff', marginLeft: 20 }}>Back</Text>
          </TouchableOpacity>
        }
        rightComponent={
          <TouchableOpacity onPress={handleReturnHome} style={styles.centerComponent}>
            <Image
              source={require('./../assets/images/PAGE.png')}
              style={styles.logo}
              resizeMode="contain"
            />
          </TouchableOpacity>
        }
      />
    <View style={styles.container}>
      <ImageBackground source={require('./../assets/images/bg.png')} style={styles.backgroundImage}>
        <View style={styles.content}>
          <View style={[styles.medalContainer, { backgroundColor: medalColor }]}>
            <Text style={styles.medalText}>{percentageScore.toFixed(2)}%</Text>
            <Text style={styles.medalSubtitle}>Score</Text>
          </View>
          <Text style={styles.certificateTitle}>Quiz  Completion</Text>
          <Text style={styles.infoText}>Congratulation!!!</Text>
          <Text style={styles.nameText}>Name: {username}</Text>
          <Text style={styles.courseText}>Exam: {courseName}</Text>
          <Text style={styles.infoText}>You successfully completed {courseName} Exams</Text>
          <Text style={styles.infoText}>Quiz Details Below</Text>
          <View style={styles.detailsContainer}>
          {/* <Text style={styles.detailText}>courseName: {courseName}</Text> */}
            <Text style={styles.detailText}>Total Questions: {totalQuestions}</Text>
            <Text style={styles.detailText}>Correct Answers: {correctAnswers}</Text>
            <Text style={styles.detailText}>Wrong Answers: {wrongAnswers}</Text>
            <Text style={styles.detailText}>Percentage Score: {percentageScore.toFixed(2)}%</Text>
          </View>
          <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.shareButton} onPress={handleShare}>
            <Text style={styles.shareButtonText}>Share</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.certificateButton]}
            onPress={handleCertificate}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonText}>Go to Certificate</Text>
          </TouchableOpacity>
        </View>
        </View>
      </ImageBackground>
    </View>
    </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },

  medalContainer: {
    width: 150,
    height: 150,
    borderRadius: 75,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  medalText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FFF',
  },
  medalSubtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
  },
  certificateTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#FFF',
  },
  infoText: {
    fontSize: 16,
    marginBottom: 5,
    color: '#FFF',
    textAlign: 'center',
    fontWeight:'normal'
  },
  nameText: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
    color: '#FFF',
    textAlign: 'center',
  },
  courseText: {
    fontSize: 18,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#FFF',
    textAlign: 'center',
  },
  detailsContainer: {
    alignItems: 'flex-start',
  },
  detailText: {
    fontSize: 17,
    marginBottom: 5,
    color: '#FFF',
    fontWeight: 'bold',

  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  logo: {
    width: 45,
    height: 45,
    marginLeft: 10,
    borderRadius: 50,
    borderColor: '#fff',
    borderWidth: 3,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  certificateButton: {
    backgroundColor: '#fff',
    borderColor: '#2196F3',
    borderWidth: 5,
    marginHorizontal:20,
    paddingVertical: 10,
    borderRadius: 25,

  },
  buttonText: {
    color: '#2196F3',
    fontSize: 16,
    fontWeight: 'bold',
  },
  centerComponent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 5,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  shareButton: {
    backgroundColor: '#2196F3',
    borderColor: '#fff',
    borderWidth: 5,
    borderRadius: 25,
    marginBottom: 10,
    marginHorizontal:20,
    paddingHorizontal: 20,
    paddingVertical: 8,


  },
  shareButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal:20,
    paddingHorizontal:20,
  },
});

export default ResultScreen;


