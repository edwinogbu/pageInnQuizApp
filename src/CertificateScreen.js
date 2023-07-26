
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ImageBackground, ScrollView, Share, Alert, Image } from 'react-native';

import { Icon, Header } from 'react-native-elements';
import { Ionicons, Entypo } from '@expo/vector-icons';


const CertificateScreen = ({ navigation, route }) => {
  const { username, courseName, percentageScore } = route.params;

  const handleShare = () => {
    Share.share({
      message: `Congratulations ${username}! You have successfully completed the Quiz on ${courseName} with a score of ${percentageScore.toFixed(2)}%.`,
    });
  };

  const Leaderboard = () => {
    navigation.navigate('LeaderboardScreen');
    // setRefreshed(false);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header
        leftComponent={
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Ionicons name="ios-arrow-back" size={24} color="#fff" />
            <Text style={{ color: '#fff', marginLeft: 20 }}>Back</Text>
          </TouchableOpacity>
        }
        rightComponent={
          <TouchableOpacity onPress={Leaderboard} style={styles.backButton}>
            <Ionicons name="school" size={24} color="#fff" />
            <Text style={{ color: '#fff', marginLeft: 10, fontWeight:'900' }}>Leader Board</Text>
            <Ionicons name="ios-arrow-forward" size={24} color="#fff" />
          </TouchableOpacity>
        }
      />
      <ImageBackground source={require('./../assets/images/PAGE.png')} style={styles.backgroundImage}>
        <View style={styles.container}>
          <View style={styles.content}>
          <Image source={require('./../assets/images/PAGE.png')} style={styles.logo} />
          <View style={styles.address}>
            <Text style={styles.addressText}>Office</Text>
            <Text style={styles.addressText}>Line 2</Text>
            <Text style={styles.infoText}>Office</Text>
          </View>
            <Text style={styles.heading}>Page Innovations</Text>
            {/* <Text style={styles.courseName}>{courseName}</Text> */}
            <Text style={styles.info}>This is to certify that</Text>
            <Text style={[styles.name, styles.underline]}>{username}</Text>
            <Text style={styles.info}>has successfully completed the</Text>
            <Text style={styles.info}>Quiz on {courseName}</Text>
            <View style={styles.resultContainer}>
              <Text style={styles.result}>With Percentage Score: {percentageScore.toFixed(2)}%</Text>
            </View>
            <View style={styles.signatoryContainer}>
              <View style={styles.studentSignatoryContainer}>
                <View style={styles.signatoryLine}></View>
                <Text style={styles.signatory}>Student's Sig:</Text>
              </View>
              <View style={styles.CeoSignatoryContainer}>
                <View style={styles.signatoryLine}></View>
                <Text style={styles.signatory}>CEO's Signature</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.shareButton} onPress={handleShare}>
              <Text style={styles.shareButtonText}>Share</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: '100%',
    height: '95%',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#00A8F0',
    padding: 40,
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  info: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  underline: {
    textDecorationLine: 'underline',
  },
  resultContainer: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 20,
  },
  result: {
    fontSize: 16,
    textAlign: 'center',
  },

  signatoryLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#000',
    marginHorizontal: 10,
  },
  signatory: {
    flex:1,
    fontSize: 16,
    fontWeight: 'bold',
  },
  shareButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#2196F3',
    borderRadius: 5,
    marginBottom: 10,
  },
  shareButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    borderRadius: 25,
    borderColor: '#00A8F0',
    borderWidth: 2,
    flexDirection: 'row',
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  addressContainer: {
    marginBottom: 20,
    borderWidth: 2,
    borderColor: 'blue',
    padding: 10,
  },
  addressText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  infoText: {
    fontSize: 16,
    color: 'gray',
  },
  signatoryContainer:{
    flex:1,
  },
  CeoSignatoryContainer:{
    flex:1,
  },
  studentSignatoryContainer:{
   justifyContent:'flex-start'
  }
});

export default CertificateScreen;
