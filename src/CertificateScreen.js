import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ImageBackground, ScrollView, Share, Alert, Image } from 'react-native';
import { printToFileAsync } from 'expo-print';
import { shareAsync } from 'expo-sharing';
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


  const handleGeneratePdf = async () => {
    try {
      // Create an HTML template for the PDF content with improved styling
      const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          @page {
            size: 210mm 297mm; /* Set the page size to A4 (adjust if needed) */
            margin: 0;
          }
          body {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
            text-align: center;
            margin: 0;
            padding: 0;
          }
          .certificate {
            width: 210mm; /* Set the width to match the page size */
            height: 297mm; /* Set the height to match the page size */
            background-color: #fff;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
            border-radius: 0;
            overflow: hidden; /* Hide content that exceeds page boundaries */
          }
          .header {
            background-color: #00A8F3;
            color: #fff;
            font-weight: bold;
            font-size: 24px;
            padding: 10px 0;
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
          .certificate-placeholder {
            width: 150px;
            height: 150px;
            border: 2px solid #00A8F3;
            border-radius: 50%;
            display: block;
            margin: 20px auto;
          }
          .address-container {
            margin-top: 20px;
          }
          .address-text {
            font-size: 18px;
            font-weight: bold;
          }
        </style>
      </head>
      <body>
        <div class="certificate">
          <div class="header">
            Certificate of Completion
          </div>
          <div class="certificate-placeholder"></div>
          <div class="certificate-title">
            Certificate of Achievement
          </div>
          <div class="content">
            <div class="info">
              This is to certify that
            </div>
            <div class="name">
              ${username}
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
              <div class "signatory">
                CEO's Signature
              </div>
            </div>
            <div class="address-container">
              <div class="address-text">Page Innovations</div>
              <div class="address-text">Technologies</div>
              <div class="address-text">+234 802 942 5815</div>
            </div>
          </div>
        </div>
      </body>
      </html>
      
    `;


      // Generate a PDF from the HTML template
      const file = await printToFileAsync({
        html: html,
        base64: false,
        width: 600, // Adjust to your preferred width
        height: 400, // Adjust to your preferred height
      });

      // Share the generated PDF
      await shareAsync(file.uri);
    } catch (error) {
      console.log('Error generating PDF:', error);
    }
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
            <Text style={{ color: '#fff', marginLeft: 10, fontWeight:'bold' }}>Leader Board</Text>
            <Ionicons name="ios-arrow-forward" size={24} color="#fff" />
          </TouchableOpacity>
        }
      />
      <ImageBackground source={require('./../assets/images/PAGE.png')} style={styles.backgroundImage}>
        <View style={styles.container}>
          <View style={styles.content}>
          <Image source={require('./../assets/images/PAGE.png')} style={styles.logo} />
          <View style={styles.address}>
            <Text style={styles.addressText}>Page Innovations</Text>
            <Text style={styles.addressText}>Technologies</Text>
            <Text style={styles.infoText}>+234 802 942 5815</Text>
          </View>
            <Text style={styles.heading}>Page Innovations</Text>
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
                <Text style={styles.signatory}>Student:</Text>
              </View>
              <View style={styles.CeoSignatoryContainer}>
                <View style={styles.signatoryLine}></View>
                <Text style={styles.signatory}>Page Innovations</Text>
              </View>
            </View>

            <TouchableOpacity onPress={handleGeneratePdf} style={styles.generateButton}>
              <Text style={styles.generateButtonText}>Generate & Share PDF</Text>
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
  signatoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  studentSignatoryContainer: {
    alignItems: 'center',
  },
  CeoSignatoryContainer: {
    alignItems: 'center',
  },
  signatoryLine: {
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    width: 100, // Adjust the width as needed
  },
  signatory: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 5,
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

export default CertificateScreen;
