import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { collection, query, where, onSnapshot } from 'firebase/firestore';
import { Header, Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { firestore } from './../firebase';
import { Ionicons } from '@expo/vector-icons';

const UserProfileScreen = ({ route, navigation }) => {
  const { userId } = route.params;
  const [userQuizData, setUserQuizData] = useState(null);

  useEffect(() => {
    const unsubscribe = fetchUserQuizResult();
    return unsubscribe;
  }, []);

  const fetchUserQuizResult = () => {
    const quizResultsRef = collection(firestore, 'quizResults');
    const querySnapshot = query(quizResultsRef, where('userId', '==', userId));

    const unsubscribe = onSnapshot(querySnapshot, (snapshot) => {
      const userQuizData = snapshot.empty ? null : snapshot.docs[0].data();
      setUserQuizData(userQuizData);
    });

    return unsubscribe;
  };

  const navigateToCertificateScreen = () => {
    navigation.navigate('CertificateScreen', {
      username: userQuizData?.username,
      courseName: userQuizData?.courseName,
      percentageScore: userQuizData?.percentageScore,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Header
          centerComponent={{ text: 'Result Details', style: { color: '#fff', fontSize: 15, fontWeight: 'bold' } }}
          leftComponent={
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerLeftComponent}>
              <Ionicons name="ios-arrow-back" size={24} color="#fff" />
              <Text style={styles.headerText}>Leader Board</Text>
            </TouchableOpacity>
          }
        />
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.card}>
          <Text style={styles.heading}>Student Result Detail</Text>
          <Text style={styles.headingText}>Name: {userQuizData?.username}</Text>
        </View>
        {userQuizData && (
          <View style={styles.card}>
            <Text style={styles.title}>User Profile</Text>
            <View style={styles.content}>
              <UserInfoItem label="User ID" value={userId} />
              <UserInfoItem label="Total Questions" value={userQuizData.totalQuestions} />
              <UserInfoItem label="Correct Answers" value={userQuizData.correctAnswers} />
              <UserInfoItem label="Wrong Answers" value={userQuizData.wrongAnswers} />
              <UserInfoItem label="Percentage Score" value={`${userQuizData.percentageScore}%`} />
              <UserInfoItem label="Course Name" value={userQuizData.courseName} />
            </View>
          </View>
        )}
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={navigateToCertificateScreen} style={styles.viewCertificateButton}>
          <Text style={styles.viewCertificateButtonText}>View Certificate</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const UserInfoItem = ({ label, value }) => (
  <View style={styles.userInfoContainer}>
    <Text style={styles.label}>{label}:</Text>
    <Text style={styles.value}>{value}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  headerContainer: {
    flex: 1,
  },
  contentContainer: {
    flex: 6,
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 20,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    elevation: 2,
    borderColor: '#00A8F0',
    borderWidth: 2,
    marginBottom: 20,
  },
  headerLeftComponent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007AFF',
    textTransform: 'uppercase',
    marginBottom: 16,
  },
  content: {
    marginBottom: 16,
  },
  userInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  headingText: {
    color: '#003e94',
    fontWeight: 'bold',
    borderColor: '#00FF00',
    borderWidth: 2,
    margin: 15,
    padding: 10,
  },
  heading: {
    color: '#003e94',
    fontWeight: 'bold',
    fontSize: 28,
  },
  label: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 8,
    textAlign: 'right',
    color: '#888888',
    textTransform: 'capitalize',
  },
  value: {
    flex: 1,
    fontSize: 16,
    color: '#007AFF',
    marginLeft: 8,
    textTransform: 'capitalize',
  },
  viewCertificateButton: {
    backgroundColor: '#00A8F3',
    borderRadius: 5,
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  viewCertificateButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
});

export default UserProfileScreen;


// import React, { useEffect, useState } from 'react';
// import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
// import { collection, query, where, onSnapshot } from 'firebase/firestore';
// import { Icon, Header } from 'react-native-elements';
// import { TouchableOpacity } from 'react-native-gesture-handler';
// import { firestore } from './../firebase';
// import { Ionicons } from '@expo/vector-icons';

// const UserProfileScreen = ({ route, navigation }) => {
//   const { userId } = route.params;
//   const [userQuizData, setUserQuizData] = useState(null);

//   useEffect(() => {
//     const unsubscribe = fetchUserQuizResult();
//     return unsubscribe;
//   }, []);

//   const fetchUserQuizResult = () => {
//     const quizResultsRef = collection(firestore, 'quizResults');
//     const querySnapshot = query(quizResultsRef, where('userId', '==', userId));

//     const unsubscribe = onSnapshot(querySnapshot, (snapshot) => {
//       const userQuizData = snapshot.empty ? null : snapshot.docs[0].data();
//       setUserQuizData(userQuizData);
//     });

//     return unsubscribe;
//   };

//   return (
//     <SafeAreaView style={{ 
//       flex: 1,
//       backgroundColor: '#FFF',
//       marginVertical:21,
//       paddingVertical:3,
//     }}>

//     <View style={{flex:1}}>

//     <Header
//         centerComponent={{ text: 'Result Details', style: { color: '#fff', fontSize: 15, fontWeight: 'bold' } }}
//         leftComponent={
//           <TouchableOpacity onPress={() => navigation.goBack()} style={{ fontWeight: 'bold', fontSize: 22 }}>
//               <Ionicons name="ios-arrow-back" size={24} color="#fff" />
//             <Text style={{ color: '#fff', fontSize: 15, fontWeight: 'bold' }}>Leader Board</Text>
//           </TouchableOpacity>
//         }
//       />
//     <View style={styles.container}>
//         <View style={{...styles.card, marginBottom:20,}}>
//           <Text style={styles.heading}>Student Result Detail</Text>
//           <Text style={styles.headingText}>Name: {userQuizData?.username}</Text>
//         </View>
//       {userQuizData && (
//         <View style={styles.card}>
//           <Text style={styles.title}>User Profile</Text>
//           <View style={styles.content}>
//             <UserInfoItem label="User ID" value={userId} />
//             <UserInfoItem label="Total Questions" value={userQuizData.totalQuestions} />
//             <UserInfoItem label="Correct Answers" value={userQuizData.correctAnswers} />
//             <UserInfoItem label="Wrong Answers" value={userQuizData.wrongAnswers} />
//             <UserInfoItem label="Percentage Score" value={`${userQuizData.percentageScore}%`} />
//             <UserInfoItem label="Course Name" value={userQuizData.courseName} />
//           </View>
//         </View>
//       )}
//     </View>
//     </View>
//     </SafeAreaView>
//   );
// };

// const UserInfoItem = ({ label, value }) => (
//   <View style={styles.userInfoContainer}>
//     <Text style={styles.label}>{label}:</Text>
//     <Text style={styles.value}>{value}</Text>
//   </View>
// );

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#F5F5F5',
//     paddingHorizontal: 20,
//   },
//   card: {
//     width: '90%',
//     backgroundColor: 'white',
//     borderRadius: 8,
//     padding: 16,
//     elevation: 2,
//     borderColor: '#00A8F0',
//     borderWidth: 2,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#007AFF',
//     textTransform: 'uppercase',
//     marginBottom: 16,
//   },
//   content: {
//     marginBottom: 16,
//   },
//   userInfoContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 12,
//   },
//   headingText: {
//     color: '#003e94',
//     flexDirection: 'row',
//     fontWeight: 'bold',
//     borderColor: '#00FF00',
//     borderWidth: 2,
//     margin:15,
//     padding:10,
//   },
//   heading: {
//     color: '#003e94',
//     flexDirection: 'row',
//     fontWeight: 'bold',
//     fontSize:28,
//   },
//   label: {
//     flex: 1,
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginRight: 8,
//     textAlign: 'right',
//     color: '#888888',
//     textTransform: 'capitalize',
//   },
//   value: {
//     flex: 1,
//     fontSize: 16,
//     color: '#007AFF',
//     marginLeft: 8,
//     textTransform: 'capitalize',
//   },
// });

// export default UserProfileScreen;
