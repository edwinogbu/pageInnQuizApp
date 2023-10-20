import React, { useEffect, useContext, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ImageBackground, Share, Image } from 'react-native';
import { Icon, Header } from 'react-native-elements';
import { AuthContext } from './AuthContext';
import { Ionicons } from '@expo/vector-icons';
import { printToFileAsync } from 'expo-print';
import { shareAsync } from 'expo-sharing';

const ResultScreen = ({ navigation, route }) => {
  const { courseName, totalQuestions, correctAnswers, wrongAnswers, percentageScore } = route.params;
  const { state: { user } } = useContext(AuthContext);

  const handleCertificate = () => {
    navigation.navigate('CertificateScreen', {
      totalQuestions,
      correctAnswers,
      wrongAnswers,
      percentageScore,
      username: user && (user.name || user.displayName),
      courseName,
    });
  };

  const medalColor = percentageScore >= 90 ? '#FFD700' : percentageScore >= 70 ? '#C0C0C0' : '#CD7F32';
  const medalIconName = 'medal';

  const handleGeneratePdf = async () => {
    try {
      const html = `
        <html>
          <head>
            <style>
              body {
                font-family: 'Arial, Helvetica, sans-serif';
                background-color: #f0f0f0;
                text-align: center;
              }
              .certificate {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                background-color: #fff;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
                border-radius: 10px;
              }
              .header {
                background-color: #00A8F3;
                color: #fff;
                font-weight: bold;
                font-size: 24px;
                padding: 10px 0;
                border-radius: 10px 10px 0 0;
              }
              .certificate-title {
                font-size: 28px;
                font-weight: bold;
                margin-top: 20px;
              }
              .content {
                padding: 20px;
              }
              .info {
                font-size: 20px;
                margin-top: 10px;
              }
              .name {
                font-size: 32px;
                font-weight: bold;
                text-decoration: underline;
                margin: 10px 0;
              }
              .result-container {
                background-color: #f0f0f0;
                padding: 10px 0;
                border-radius: 5px;
                margin-top: 20px;
              }
              .result {
                font-size: 24px;
              }
              .signature {
                margin-top: 20px;
                display: flex;
                justify-content: space-between;
              }
              .signatory {
                font-size: 20px;
                font-weight: bold;
              }
              .logo {
                max-width: 150px;
                margin: 20px auto;
                display: block;
              }
            </style>
          </head>
          <body>
            <div class="certificate">
              <div class="header">
                Certificate of Completion
              </div>
              <img src="./quizapp/assets/assets/images/PAGE.png" alt="Company Logo" class="logo" />
              <div class="certificate-title">
                Certificate of Achievement
              </div>
              <div class="content">
                <div class="info">
                  This is to certify that
                </div>
                <div class="name">
                  ${user && (user.name || user.displayName)}
                </div>
                <div class="info">
                  has successfully completed the
                </div>
                <div class="info">
                  Quiz on ${courseName}
                </div>
                <div class="result-container">
                  <div class="result">
                    With Percentage Score: ${percentageScore.toFixed(2)}%
                  </div>
                </div>
                <div class="signature">
                  <div class="signatory">
                    Student's Signature
                  </div>
                  <div class="signatory">
                    CEO's Signature
                  </div>
                </div>
              </div>
            </div>
          </body>
        </html>
      `;

      const file = await printToFileAsync({
        html: html,
        base64: false,
        width: 600,
        height: 400,
      });

      await shareAsync(file.uri);
    } catch (error) {
      console.log('Error generating PDF:', error);
    }
  };

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
              <TouchableOpacity onPress={handleReturnHome} style={styles.centerComponent}>
                <Text style={{ color: '#fff' }} onPress={handleReturnHome} >Result</Text>
                <Ionicons name="person" size={24} color="#fff" style={styles.icon} />
              </TouchableOpacity>
            ),
          }}
          leftComponent={
            <TouchableOpacity onPress={() => navigation.navigate("Home")} style={styles.backButton}>
              <Ionicons name="ios-arrow-back" size={24} color= "#fff" />
              <Text style={{ color: '#fff', marginLeft: 20 }}>Back</Text>
            </TouchableOpacity>
          }
          rightComponent={
            <TouchableOpacity onPress={handleCertificate} style={styles.centerComponent}>
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
              <Text style={styles.certificateTitle}>Quiz Completion</Text>
              <Text style={styles.infoText}>Congratulations!!!</Text>
              <Text style={styles.infoText}>Name: {user && (user.name || user.displayName)}</Text>
              <Text style={styles.infoText}>Exam: {courseName}</Text>
              <Text style={styles.infoText}>You successfully completed {courseName} Exams</Text>
              <Text style={styles.infoText}>Quiz Details Below</Text>
              <View style={styles.detailsContainer}>
                <Text style={styles.detailText}>Total Questions: {totalQuestions}</Text>
                <Text style={styles.detailText}>Correct Answers: {correctAnswers}</Text>
                <Text style={styles.detailText}>Wrong Answers: {wrongAnswers}</Text>
                <Text style={styles.detailText}>Percentage Score: {percentageScore.toFixed(2)}%</Text>
              </View>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={[styles.button, styles.certificateButton]}
                  onPress={handleCertificate}
                  activeOpacity={0.8}
                >
                  <Text style={styles.buttonText}>Go to Certificate</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.certificateButton]} onPress={handleGeneratePdf}>
                  <Text style={styles.buttonText}> Share Result </Text>
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
    fontWeight: 'normal',
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
    marginHorizontal: 20,
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
    marginHorizontal: 20,
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
    marginHorizontal: 20,
    paddingHorizontal: 20,
  },
  generateButton: {
    backgroundColor: '#00A8F3',
    borderRadius: 5,
    marginTop: 20,
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  generateButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
});

export default ResultScreen;


