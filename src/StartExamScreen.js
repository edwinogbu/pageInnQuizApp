import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  collection,
  doc,
  getDoc,
  updateDoc,
  setDoc,
  serverTimestamp,
} from 'firebase/firestore';
import { firestore } from './../firebase/index';
import questions from './constants/questions';

const StartExamScreen = () => {
  const navigation = useNavigation();
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [courseStatus, setCourseStatus] = useState({});
  const courseNames = questions.map((course) => course.courseName);

  useEffect(() => {
    retrieveExamData();
  }, [selectedCourse]);

  const retrieveExamData = async () => {
    if (selectedCourse) {
      const examDocRef = doc(firestore, 'exams', selectedCourse);
      const examSnapshot = await getDoc(examDocRef);
      if (examSnapshot.exists()) {
        const examData = examSnapshot.data();
        setCourseStatus({ ...courseStatus, [selectedCourse]: examData.startStatus });
      }
    }
  };

  const handleStartExam = async (courseName) => {
    if (!courseName) {
      Alert.alert('Error', 'Please select a course.');
      return;
    }

    const currentStatus = courseStatus[courseName];
    const newStatus = !currentStatus;

    const examData = {
      startStatus: newStatus,
    };

    try {
      const examDocRef = doc(firestore, 'exams', courseName);
      const examSnapshot = await getDoc(examDocRef);

      if (examSnapshot.exists()) {
        // Document exists, update it
        await updateDoc(examDocRef, examData);
      } else {
        // Document doesn't exist, create a new one
        await setDoc(examDocRef, examData);
      }

      // Update the course status
      setCourseStatus({ ...courseStatus, [courseName]: newStatus });
    } catch (error) {
      console.error('Error starting the exam:', error);
      Alert.alert('Error', 'Failed to start the exam. Please try again.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.homeButton}
            onPress={() => navigation.navigate('Home')}
          >
            <Text style={styles.homeButtonText}>Home</Text>
          </TouchableOpacity>
        </View>
        <ScrollView>
          <Text style={styles.title}>Start Exam</Text>
          <Text style={styles.subtitle}>Select a Course:</Text>
          {courseNames.map((courseName, index) => (
            <View style={styles.courseRow} key={index}>
              <View style={styles.courseInfo}>
                <Text style={styles.courseName}>{courseName}</Text>
                <Text style={styles.statusText}>
                  {courseStatus[courseName] ? 'Started' : 'Not Started'}
                </Text>
              </View>
              <TouchableOpacity
                style={[
                  styles.startButton,
                  courseStatus[courseName] ? styles.stopButton : null,
                ]}
                onPress={() => handleStartExam(courseName)}
              >
                <Text style={styles.startButtonText}>
                  {courseStatus[courseName] ? 'Stop Exam' : 'Start Exam'}
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  card: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    elevation: 2,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 16,
  },
  homeButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  homeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  courseRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 8,
    marginBottom: 8,
  },
  courseInfo: {
    flex: 1,
  },
  courseName: {
    fontSize: 16,
  },
  statusText: {
    fontSize: 14,
    color: '#777',
  },
  startButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  stopButton: {
    backgroundColor: 'red',
  },
  startButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default StartExamScreen;


// import React, { useEffect, useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   SafeAreaView,
//   TouchableOpacity,
//   ScrollView,
//   TextInput,
//   Alert,
// } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import {
//   collection,
//   doc,
//   getDoc,
//   updateDoc,
//   setDoc,
//   serverTimestamp,
// } from 'firebase/firestore';
// import { firestore } from './../firebase/index';
// import questions from './constants/questions';

// const StartExamScreen = () => {
//   const navigation = useNavigation();
//   const [selectedCourse, setSelectedCourse] = useState(null);
//   const [courseStatus, setCourseStatus] = useState({});
//   const courseNames = questions.map((course) => course.courseName);

//   // Sort course names alphabetically
//   const sortedCourseNames = courseNames.slice().sort();

//   useEffect(() => {
//     retrieveExamData();
//   }, [selectedCourse]);

//   const retrieveExamData = async () => {
//     if (selectedCourse) {
//       const examDocRef = doc(firestore, 'exams', selectedCourse);
//       const examSnapshot = await getDoc(examDocRef);
//       if (examSnapshot.exists()) {
//         const examData = examSnapshot.data();
//         setCourseStatus({ ...courseStatus, [selectedCourse]: examData.startStatus });
//       }
//     }
//   };

//   const handleStartExam = async (course) => {
//     const currentStatus = courseStatus[course];
//     const newStatus = !currentStatus;

//     const examData = {
//       startStatus: newStatus,
//     };

//     try {
//       const examDocRef = doc(firestore, 'exams', course);
//       const examSnapshot = await getDoc(examDocRef);

//       if (examSnapshot.exists()) {
//         // Document exists, update it
//         await updateDoc(examDocRef, examData);
//       } else {
//         // Document doesn't exist, create a new one
//         await setDoc(examDocRef, examData);
//       }

//       // Update the course status
//       setCourseStatus({ ...courseStatus, [course]: newStatus });
//     } catch (error) {
//       console.error('Error starting the exam:', error);
//       Alert.alert('Error', 'Failed to start the exam. Please try again.');
//     }
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.card}>
//         <View style={styles.header}>
//           <TouchableOpacity
//             style={styles.homeButton}
//             onPress={() => navigation.navigate('Home')}
//           >
//             <Text style={styles.homeButtonText}>Home</Text>
//           </TouchableOpacity>
//         </View>
//         <ScrollView>
//           <Text style={styles.title}>Start Exam</Text>
//           <Text style={styles.subtitle}>Select a Course:</Text>
//           {sortedCourseNames.map((course, index) => (
//             <View style={styles.courseRow} key={index}>
//               <TouchableOpacity
//                 style={[
//                   styles.courseButton,
//                   selectedCourse === course ? styles.courseButtonSelected : null,
//                 ]}
//                 onPress={() => setSelectedCourse(course)}
//               >
//                 <Text style={styles.courseButtonText}>{course}</Text>
//               </TouchableOpacity>
//               <Text style={styles.statusText}>
//                 {courseStatus[course] ? 'Started' : 'Not Started'}
//               </Text>
//               <TouchableOpacity
//                 style={styles.startButton}
//                 onPress={() => handleStartExam(course)}
//                 disabled={!selectedCourse} // Disable button if no course is selected
//               >
//                 <Text style={styles.startButtonText}>
//                   {courseStatus[course] ? 'Stop Exam' : 'Start Exam'}
//                 </Text>
//               </TouchableOpacity>
//             </View>
//           ))}
//         </ScrollView>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     backgroundColor: '#F5F5F5',
//   },
//   card: {
//     width: '90%',
//     backgroundColor: 'white',
//     borderRadius: 8,
//     padding: 16,
//     elevation: 2,
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'flex-start',
//     alignItems: 'center',
//     marginBottom: 16,
//   },
//   homeButton: {
//     backgroundColor: '#007AFF',
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//     borderRadius: 8,
//   },
//   homeButtonText: {
//     color: 'white',
//     fontWeight: 'bold',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 16,
//   },
//   subtitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 8,
//   },
//   courseRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 8,
//   },
//   courseButton: {
//     backgroundColor: '#007AFF',
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//     borderRadius: 8,
//     marginRight: 8,
//   },
//   courseButtonSelected: {
//     backgroundColor: '#003e94',
//   },
//   courseButtonText: {
//     color: 'white',
//     fontWeight: 'bold',
//   },
//   statusText: {
//     fontWeight: 'bold',
//     flex: 1,
//   },
//   startButton: {
//     backgroundColor: '#007AFF',
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//     borderRadius: 8,
//   },
//   startButtonText: {
//     color: 'white',
//     fontWeight: 'bold',
//   },
// });

// export default StartExamScreen;


// import React, { useEffect, useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   SafeAreaView,
//   TouchableOpacity,
//   ScrollView,
//   TextInput,
//   Alert,
// } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import {
//   collection,
//   doc,
//   getDoc,
//   updateDoc,
//   setDoc,
//   serverTimestamp,
// } from 'firebase/firestore';
// import { firestore } from './../firebase/index';
// import questions from './constants/questions';

// const StartExamScreen = () => {
//   const navigation = useNavigation();
//   const [selectedCourse, setSelectedCourse] = useState(null);
//   const [courseStatus, setCourseStatus] = useState({});
//   const courseNames = questions.map((course) => course.courseName);

//   // Sort course names alphabetically
//   const sortedCourseNames = courseNames.slice().sort();

//   useEffect(() => {
//     retrieveExamData();
//   }, [selectedCourse]);

//   const retrieveExamData = async () => {
//     if (selectedCourse) {
//       const examDocRef = doc(firestore, 'exams', selectedCourse);
//       const examSnapshot = await getDoc(examDocRef);
//       if (examSnapshot.exists()) {
//         const examData = examSnapshot.data();
//         setCourseStatus({ ...courseStatus, [selectedCourse]: examData.startStatus });
//       }
//     }
//   };

//   const handleStartExam = async () => {
//     if (!selectedCourse) {
//       Alert.alert('Error', 'Please select a course.');
//       return;
//     }

//     const currentStatus = courseStatus[selectedCourse];
//     const newStatus = !currentStatus;

//     const examData = {
//       startStatus: newStatus,
//     };

//     try {
//       const examDocRef = doc(firestore, 'exams', selectedCourse);
//       const examSnapshot = await getDoc(examDocRef);

//       if (examSnapshot.exists()) {
//         // Document exists, update it
//         await updateDoc(examDocRef, examData);
//       } else {
//         // Document doesn't exist, create a new one
//         await setDoc(examDocRef, examData);
//       }

//       // Update the course status
//       setCourseStatus({ ...courseStatus, [selectedCourse]: newStatus });
//     } catch (error) {
//       console.error('Error starting the exam:', error);
//       Alert.alert('Error', 'Failed to start the exam. Please try again.');
//     }
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.card}>
//         <View style={styles.header}>
//           <TouchableOpacity
//             style={styles.homeButton}
//             onPress={() => navigation.navigate('Home')}
//           >
//             <Text style={styles.homeButtonText}>Home</Text>
//           </TouchableOpacity>
//         </View>
//         <ScrollView>
//           <Text style={styles.title}>Start Exam</Text>
//           <Text style={styles.subtitle}>Select a Course:</Text>
//           <View style={styles.courseSelection}>
//             <ScrollView
//               horizontal
//               showsHorizontalScrollIndicator={false}
//               contentContainerStyle={{ flexDirection: 'row' }}
//             >
//               {sortedCourseNames.map((course, index) => (
//                 <View style={styles.courseItem} key={index}>
//                   <TouchableOpacity
//                     style={[
//                       styles.courseButton,
//                       selectedCourse === course ? styles.courseButtonSelected : null,
//                     ]}
//                     onPress={() => setSelectedCourse(course)}
//                   >
//                     <Text style={styles.courseButtonText}>{course}</Text>
//                   </TouchableOpacity>
//                   <Text style={styles.statusText}>
//                     {courseStatus[course] ? 'Started' : 'Not Started'}
//                   </Text>
//                 </View>
//               ))}
//             </ScrollView>
//           </View>
//           <TouchableOpacity
//             style={styles.startButton}
//             onPress={handleStartExam}
//             disabled={!selectedCourse} // Disable button if no course is selected
//           >
//             <Text style={styles.startButtonText}>
//               {courseStatus[selectedCourse] ? 'Stop Exam' : 'Start Exam'}
//             </Text>
//           </TouchableOpacity>
//         </ScrollView>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     backgroundColor: '#F5F5F5',
//   },
//   card: {
//     width: '90%',
//     backgroundColor: 'white',
//     borderRadius: 8,
//     padding: 16,
//     elevation: 2,
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'flex-start',
//     alignItems: 'center',
//     marginBottom: 16,
//   },
//   homeButton: {
//     backgroundColor: '#007AFF',
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//     borderRadius: 8,
//   },
//   homeButtonText: {
//     color: 'white',
//     fontWeight: 'bold',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 16,
//   },
//   subtitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 8,
//   },
//   courseSelection: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//   },
//   courseItem: {
//     margin: 8,
//   },
//   courseButton: {
//     backgroundColor: '#007AFF',
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//     borderRadius: 8,
//   },
//   courseButtonSelected: {
//     backgroundColor: '#003e94',
//   },
//   courseButtonText: {
//     color: 'white',
//     fontWeight: 'bold',
//   },
//   statusText: {
//     marginTop: 8,
//     fontWeight: 'bold',
//   },
//   startButton: {
//     backgroundColor: '#007AFF',
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//     borderRadius: 8,
//     margin: 8,
//   },
//   startButtonText: {
//     color: 'white',
//     fontWeight: 'bold',
//   },
// });

// export default StartExamScreen;


// import React, { useEffect, useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   SafeAreaView,
//   TouchableOpacity,
//   ScrollView,
//   TextInput,
//   Alert,
//   FlatList,
// } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import {
//   collection,
//   doc,
//   getDoc,
//   updateDoc,
//   setDoc,
//   serverTimestamp,
// } from 'firebase/firestore';
// import { firestore } from './../firebase/index';
// import questions from './constants/questions';

// const StartExamScreen = () => {
//   const navigation = useNavigation();
//   const [selectedCourse, setSelectedCourse] = useState(null);
//   const [startStatus, setStartStatus] = useState(false);

//   const courseNames = questions.map((course) => course.courseName);

//   // Sort course names alphabetically
//   const sortedCourseNames = courseNames.slice().sort();

//   useEffect(() => {
//     retrieveExamData();
//   }, [selectedCourse]);

//   const retrieveExamData = async () => {
//     if (selectedCourse) {
//       const examDocRef = doc(firestore, 'exams', selectedCourse);
//       const examSnapshot = await getDoc(examDocRef);
//       if (examSnapshot.exists()) {
//         const examData = examSnapshot.data();
//         setStartStatus(examData.startStatus);
//       } else {
//         setStartStatus(false);
//       }
//     }
//   };

//   const handleStartExam = async () => {
//     if (!selectedCourse) {
//       Alert.alert('Error', 'Please select a course.');
//       return;
//     }

//     // Toggle the startStatus when clicked
//     const newStatus = !startStatus;
    
//     const examData = {
//       startStatus: newStatus,
//     };

//     try {
//       const examDocRef = doc(firestore, 'exams', selectedCourse);
//       const examSnapshot = await getDoc(examDocRef);

//       if (examSnapshot.exists()) {
//         // Document exists, update it
//         await updateDoc(examDocRef, examData);
//       } else {
//         // Document doesn't exist, create a new one
//         await setDoc(examDocRef, examData);
//       }

//       // After updating or creating the document, fetch the updated data
//       const updatedExamSnapshot = await getDoc(examDocRef);
//       if (updatedExamSnapshot.exists()) {
//         const updatedExamData = updatedExamSnapshot.data();
//         setStartStatus(updatedExamData.startStatus);
//       }
//     } catch (error) {
//       console.error('Error starting the exam:', error);
//       Alert.alert('Error', 'Failed to start the exam. Please try again.');
//     }
//   };
  
//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.card}>
//         <View style={styles.header}>
//           <TouchableOpacity style={styles.homeButton} onPress={() => navigation.navigate('Home')}>
//             <Text style={styles.homeButtonText}>Home</Text>
//           </TouchableOpacity>
//         </View>
//         <ScrollView>
//           <Text style={styles.title}>Start Exam</Text>
//           <Text style={styles.subtitle}>Select a Course:</Text>
//           <View style={styles.courseSelection}>
//             <View style={styles.courseColumn}>
//               {sortedCourseNames.map((course, index) => (
//                 <TouchableOpacity
//                   key={index}
//                   style={[
//                     styles.courseButton,
//                     selectedCourse === course ? styles.courseButtonSelected : null,
//                   ]}
//                   onPress={() => setSelectedCourse(course)}
//                 >
//                   <Text style={styles.courseButtonText}>{course}</Text>
//                 </TouchableOpacity>
//               ))}
//             </View>
//             <View style={styles.statusColumn}>
//               <FlatList
//                 data={sortedCourseNames}
//                 keyExtractor={(item) => item}
//                 renderItem={({ item }) => (
//                   <View style={styles.statusContainer}>
//                     <Text style={styles.statusLabel}>{item}:</Text>
//                     <Text style={styles.status}>{startStatus ? 'Started' : 'Not Started'}</Text>
//                   </View>
//                 )}
//               />
//             </View>
//           </View>
//           <TouchableOpacity
//             style={styles.startButton}
//             onPress={handleStartExam}
//             disabled={!selectedCourse} // Disable button if no course is selected
//           >
//             <Text style={styles.startButtonText}>{startStatus ? 'Stop Exam' : 'Start Exam'}</Text>
//           </TouchableOpacity>
//         </ScrollView>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     backgroundColor: '#F5F5F5',
//   },
//   card: {
//     width: '90%',
//     backgroundColor: 'white',
//     borderRadius: 8,
//     padding: 16,
//     elevation: 2,
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'flex-start',
//     alignItems: 'center',
//     marginBottom: 16,
//   },
//   homeButton: {
//     backgroundColor: '#007AFF',
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//     borderRadius: 8,
//   },
//   homeButtonText: {
//     color: 'white',
//     fontWeight: 'bold',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 16,
//   },
//   subtitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 8,
//   },
//   courseSelection: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//   },
//   courseColumn: {
//     flex: 1,
//   },
//   statusColumn: {
//     flex: 1,
//     borderLeftWidth: 1, // Add a center border line
//     borderColor: '#ccc',
//     paddingLeft: 16,
//   },
//   courseButton: {
//     backgroundColor: '#007AFF',
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//     borderRadius: 8,
//     margin: 8,
//   },
//   courseButtonSelected: {
//     backgroundColor: '#003e94',
//   },
//   courseButtonText: {
//     color: 'white',
//     fontWeight: 'bold',
//   },
//   statusContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 8,
//   },
//   statusLabel: {
//     fontWeight: 'bold',
//   },
//   status: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   startButton: {
//     backgroundColor: '#007AFF',
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//     borderRadius: 8,
//   },
//   startButtonText: {
//     color: 'white',
//     fontWeight: 'bold',
//   },
// });

// export default StartExamScreen;


// import React, { useEffect, useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   SafeAreaView,
//   TouchableOpacity,
//   ScrollView,
//   TextInput,
//   Alert,
//   FlatList,
// } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import {
//   collection,
//   doc,
//   getDoc,
//   updateDoc,
//   setDoc,
//   serverTimestamp,
// } from 'firebase/firestore';
// import { firestore } from './../firebase/index';
// import questions from './constants/questions';

// const StartExamScreen = () => {
//   const navigation = useNavigation();
//   const [selectedCourse, setSelectedCourse] = useState(null);
//   const [startStatus, setStartStatus] = useState(false);

//   const courseNames = questions.map((course) => course.courseName);

//   useEffect(() => {
//     retrieveExamData();
//   }, [selectedCourse]);

//   const retrieveExamData = async () => {
//     if (selectedCourse) {
//       const examDocRef = doc(firestore, 'exams', selectedCourse);
//       const examSnapshot = await getDoc(examDocRef);
//       if (examSnapshot.exists()) {
//         const examData = examSnapshot.data();
//         setStartStatus(examData.startStatus);
//       } else {
//         setStartStatus(false);
//       }
//     }
//   };

//   const handleStartExam = async () => {
//     if (!selectedCourse) {
//       Alert.alert('Error', 'Please select a course.');
//       return;
//     }

//     // Toggle the startStatus when clicked
//     const newStatus = !startStatus;
    
//     const examData = {
//       startStatus: newStatus,
//     };

//     try {
//       const examDocRef = doc(firestore, 'exams', selectedCourse);
//       const examSnapshot = await getDoc(examDocRef);

//       if (examSnapshot.exists()) {
//         // Document exists, update it
//         await updateDoc(examDocRef, examData);
//       } else {
//         // Document doesn't exist, create a new one
//         await setDoc(examDocRef, examData);
//       }

//       // After updating or creating the document, fetch the updated data
//       const updatedExamSnapshot = await getDoc(examDocRef);
//       if (updatedExamSnapshot.exists()) {
//         const updatedExamData = updatedExamSnapshot.data();
//         setStartStatus(updatedExamData.startStatus);
//       }
//     } catch (error) {
//       console.error('Error starting the exam:', error);
//       Alert.alert('Error', 'Failed to start the exam. Please try again.');
//     }
//   };
  
//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.card}>
//         <View style={styles.header}>
//           <TouchableOpacity style={styles.homeButton} onPress={() => navigation.navigate('Home')}>
//             <Text style={styles.homeButtonText}>Home</Text>
//           </TouchableOpacity>
//         </View>
//         <ScrollView>
//           <Text style={styles.title}>Start Exam</Text>
//           <Text style={styles.subtitle}>Select a Course:</Text>
//           <View style={styles.courseSelection}>
//             {courseNames.map((course, index) => (
//               <TouchableOpacity
//                 key={index}
//                 style={[
//                   styles.courseButton,
//                   selectedCourse === course ? styles.courseButtonSelected : null,
//                 ]}
//                 onPress={() => setSelectedCourse(course)}
//               >
//                 <Text style={styles.courseButtonText}>{course}</Text>
//               </TouchableOpacity>
//             ))}
//           </View>
//           <Text style={styles.subtitle}>Exam Status:</Text>
//           <FlatList
//             data={[{ label: 'Start Exam', value: 'Started' }, { label: 'Stop Exam', value: 'Not Started' }]}
//             numColumns={2}
//             keyExtractor={(item) => item.label}
//             renderItem={({ item }) => (
//               <View style={styles.statusContainer}>
//                 <Text style={styles.statusLabel}>{item.label}:</Text>
//                 <Text style={styles.status}>{item.value}</Text>
//               </View>
//             )}
//           />
//           <TouchableOpacity
//             style={styles.startButton}
//             onPress={handleStartExam}
//             disabled={!selectedCourse} // Disable button if no course is selected
//           >
//             <Text style={styles.startButtonText}>{startStatus ? 'Stop Exam' : 'Start Exam'}</Text>
//           </TouchableOpacity>
//         </ScrollView>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     backgroundColor: '#F5F5F5',
//   },
//   card: {
//     width: '90%',
//     backgroundColor: 'white',
//     borderRadius: 8,
//     padding: 16,
//     elevation: 2,
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'flex-start',
//     alignItems: 'center',
//     marginBottom: 16,
//   },
//   homeButton: {
//     backgroundColor: '#007AFF',
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//     borderRadius: 8,
//   },
//   homeButtonText: {
//     color: 'white',
//     fontWeight: 'bold',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 16,
//   },
//   subtitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 8,
//   },
//   courseSelection: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//   },
//   courseButton: {
//     backgroundColor: '#007AFF',
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//     borderRadius: 8,
//     margin: 8,
//   },
//   courseButtonSelected: {
//     backgroundColor: '#003e94',
//   },
//   courseButtonText: {
//     color: 'white',
//     fontWeight: 'bold',
//   },
//   statusContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 8,
//   },
//   statusLabel: {
//     fontWeight: 'bold',
//   },
//   status: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   startButton: {
//     backgroundColor: '#007AFF',
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//     borderRadius: 8,
//   },
//   startButtonText: {
//     color: 'white',
//     fontWeight: 'bold',
//   },
// });

// export default StartExamScreen;



// import React, { useEffect, useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   SafeAreaView,
//   TouchableOpacity,
//   ScrollView,
//   TextInput,
//   Alert,
// } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import {
//   collection,
//   doc,
//   getDoc,
//   updateDoc,
//   setDoc,
//   serverTimestamp,
// } from 'firebase/firestore';
// import { firestore } from './../firebase/index';
// import questions from './constants/questions';

// const StartExamScreen = () => {
//   const navigation = useNavigation();
//   const [selectedCourse, setSelectedCourse] = useState(null);
//   const [startStatus, setStartStatus] = useState(false);

//   const courseNames = questions.map((course) => course.courseName);

//   useEffect(() => {
//     retrieveExamData();
//   }, [selectedCourse]);

//   const retrieveExamData = async () => {
//     if (selectedCourse) {
//       const examDocRef = doc(firestore, 'exams', selectedCourse);
//       const examSnapshot = await getDoc(examDocRef);
//       if (examSnapshot.exists()) {
//         const examData = examSnapshot.data();
//         setStartStatus(examData.startStatus);
//       } else {
//         setStartStatus(false);
//       }
//     }
//   };

//   const handleStartExam = async () => {
//     if (!selectedCourse) {
//       Alert.alert('Error', 'Please select a course.');
//       return;
//     }

//     // Toggle the startStatus when clicked
//     const newStatus = !startStatus;
    
//     const examData = {
//       startStatus: newStatus,
//     };

//     try {
//       const examDocRef = doc(firestore, 'exams', selectedCourse);
//       const examSnapshot = await getDoc(examDocRef);

//       if (examSnapshot.exists()) {
//         // Document exists, update it
//         await updateDoc(examDocRef, examData);
//       } else {
//         // Document doesn't exist, create a new one
//         await setDoc(examDocRef, examData);
//       }

//       // After updating or creating the document, fetch the updated data
//       const updatedExamSnapshot = await getDoc(examDocRef);
//       if (updatedExamSnapshot.exists()) {
//         const updatedExamData = updatedExamSnapshot.data();
//         setStartStatus(updatedExamData.startStatus);
//       }
//     } catch (error) {
//       console.error('Error starting the exam:', error);
//       Alert.alert('Error', 'Failed to start the exam. Please try again.');
//     }
//   };
  
//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.card}>
//         <View style={styles.header}>
//           <TouchableOpacity style={styles.homeButton} onPress={() => navigation.navigate('Home')}>
//             <Text style={styles.homeButtonText}>Home</Text>
//           </TouchableOpacity>
//         </View>
//         <ScrollView>
//           <Text style={styles.title}>Start Exam</Text>
//           <Text style={styles.subtitle}>Select a Course:</Text>
//           <View style={styles.courseSelection}>
//             {courseNames.map((course, index) => (
//               <TouchableOpacity
//                 key={index}
//                 style={[
//                   styles.courseButton,
//                   selectedCourse === course ? styles.courseButtonSelected : null,
//                 ]}
//                 onPress={() => setSelectedCourse(course)}
//               >
//                 <Text style={styles.courseButtonText}>{course}</Text>
//               </TouchableOpacity>
//             ))}
//           </View>
//           <Text style={styles.subtitle}>Exam Status:</Text>
//           <Text style={styles.status}>{startStatus ? 'Started' : 'Not Started'}</Text>
//           <TouchableOpacity
//             style={styles.startButton}
//             onPress={handleStartExam}
//             disabled={!selectedCourse} // Disable button if no course is selected
//           >
//             <Text style={styles.startButtonText}>{startStatus ? 'Stop Exam' : 'Start Exam'}</Text>
//           </TouchableOpacity>
//         </ScrollView>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     backgroundColor: '#F5F5F5',
//   },
//   card: {
//     width: '90%',
//     backgroundColor: 'white',
//     borderRadius: 8,
//     padding: 16,
//     elevation: 2,
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'flex-start',
//     alignItems: 'center',
//     marginBottom: 16,
//   },
//   homeButton: {
//     backgroundColor: '#007AFF',
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//     borderRadius: 8,
//   },
//   homeButtonText: {
//     color: 'white',
//     fontWeight: 'bold',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 16,
//   },
//   subtitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 8,
//   },
//   courseSelection: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//   },
//   courseButton: {
//     backgroundColor: '#007AFF',
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//     borderRadius: 8,
//     margin: 8,
//   },
//   courseButtonSelected: {
//     backgroundColor: '#003e94',
//   },
//   courseButtonText: {
//     color: 'white',
//     fontWeight: 'bold',
//   },
//   status: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   startButton: {
//     backgroundColor: '#007AFF',
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//     borderRadius: 8,
//   },
//   startButtonText: {
//     color: 'white',
//     fontWeight: 'bold',
//   },
// });

// export default StartExamScreen;


// import React, { useEffect, useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   SafeAreaView,
//   TouchableOpacity,
//   ScrollView,
//   TextInput,
//   Alert,
// } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import {
//   collection,
//   doc,
//   getDoc,
//   updateDoc,
//   setDoc,
//   serverTimestamp,
// } from 'firebase/firestore';
// import { firestore } from './../firebase/index';
// import questions from './constants/questions';

// const StartExamScreen = () => {
//   const navigation = useNavigation();
//   const [selectedCourse, setSelectedCourse] = useState(null);
//   const [startStatus, setStartStatus] = useState(false);

//   const courseNames = questions.map((course) => course.courseName);

//   useEffect(() => {
//     retrieveExamData();
//   }, [selectedCourse]);

//   const retrieveExamData = async () => {
//     if (selectedCourse) {
//       const examDocRef = doc(firestore, 'exams', selectedCourse);
//       const examSnapshot = await getDoc(examDocRef);
//       if (examSnapshot.exists()) {
//         const examData = examSnapshot.data();
//         setStartStatus(examData.startStatus);
//       } else {
//         setStartStatus(false);
//       }
//     }
//   };

//   const handleStartExam = async () => {
//     if (!selectedCourse) {
//       Alert.alert('Error', 'Please select a course.');
//       return;
//     }
  
//     const examData = {
//       startStatus: true,
//     };
  
//     try {
//       const examDocRef = doc(firestore, 'exams', selectedCourse);
//       const examSnapshot = await getDoc(examDocRef);
  
//       if (examSnapshot.exists()) {
//         // Document exists, update it
//         await updateDoc(examDocRef, examData);
//       } else {
//         // Document doesn't exist, create a new one
//         await setDoc(examDocRef, examData);
//       }
  
//       // After updating or creating the document, fetch the updated data
//       const updatedExamSnapshot = await getDoc(examDocRef);
//       if (updatedExamSnapshot.exists()) {
//         const updatedExamData = updatedExamSnapshot.data();
//         setStartStatus(updatedExamData.startStatus);
//       }
//     } catch (error) {
//       console.error('Error starting the exam:', error);
//       Alert.alert('Error', 'Failed to start the exam. Please try again.');
//     }
//   };
  
//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.card}>
//         <View style={styles.header}>
//           <TouchableOpacity style={styles.homeButton} onPress={() => navigation.navigate('Home')}>
//             <Text style={styles.homeButtonText}>Home</Text>
//           </TouchableOpacity>
//         </View>
//         <ScrollView>
//           <Text style={styles.title}>Start Exam</Text>
//           <Text style={styles.subtitle}>Select a Course:</Text>
//           <View style={styles.courseSelection}>
//             {courseNames.map((course, index) => (
//               <TouchableOpacity
//                 key={index}
//                 style={[
//                   styles.courseButton,
//                   selectedCourse === course ? styles.courseButtonSelected : null,
//                 ]}
//                 onPress={() => setSelectedCourse(course)}
//               >
//                 <Text style={styles.courseButtonText}>{course}</Text>
//               </TouchableOpacity>
//             ))}
//           </View>
//           <Text style={styles.subtitle}>Exam Status:</Text>
//           <Text style={styles.status}>{startStatus ? 'Started' : 'Not Started'}</Text>
//           <TouchableOpacity
//             style={styles.startButton}
//             onPress={handleStartExam}
//             disabled={startStatus}
//           >
//             <Text style={styles.startButtonText}>Start Exam</Text>
//           </TouchableOpacity>
//         </ScrollView>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     backgroundColor: '#F5F5F5',
//   },
//   card: {
//     width: '90%',
//     backgroundColor: 'white',
//     borderRadius: 8,
//     padding: 16,
//     elevation: 2,
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'flex-start',
//     alignItems: 'center',
//     marginBottom: 16,
//   },
//   homeButton: {
//     backgroundColor: '#007AFF',
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//     borderRadius: 8,
//   },
//   homeButtonText: {
//     color: 'white',
//     fontWeight: 'bold',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 16,
//   },
//   subtitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 8,
//   },
//   courseSelection: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//   },
//   courseButton: {
//     backgroundColor: '#007AFF',
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//     borderRadius: 8,
//     margin: 8,
//   },
//   courseButtonSelected: {
//     backgroundColor: '#003e94',
//   },
//   courseButtonText: {
//     color: 'white',
//     fontWeight: 'bold',
//   },
//   status: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   startButton: {
//     backgroundColor: '#007AFF',
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//     borderRadius: 8,
//   },
//   startButtonText: {
//     color: 'white',
//     fontWeight: 'bold',
//   },
// });

// export default StartExamScreen;


// import React, { useEffect, useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   SafeAreaView,
//   TouchableOpacity,
//   ScrollView,
//   TextInput,
//   Alert,
// } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import {
//   collection,
//   doc,
//   getDoc,
//   updateDoc,
//   setDoc,
//   serverTimestamp,
// } from 'firebase/firestore';
// import { firestore } from './../firebase/index';
// import questions from './constants/questions';

// const StartExamScreen = () => {
//   const navigation = useNavigation();
//   const [selectedCourse, setSelectedCourse] = useState(null);
//   const [startStatus, setStartStatus] = useState(false);
//   const [startTime, setStartTime] = useState(null);

//   const courseNames = questions.map((course) => course.courseName);

//   useEffect(() => {
//     retrieveExamData();
//   }, [selectedCourse]);

//   const retrieveExamData = async () => {
//     if (selectedCourse) {
//       const examDocRef = doc(firestore, 'exams', selectedCourse);
//       const examSnapshot = await getDoc(examDocRef);
//       if (examSnapshot.exists()) {
//         const examData = examSnapshot.data();
//         setStartStatus(examData.startStatus);
//         setStartTime(examData.startTime ? examData.startTime.toDate() : null);
//       } else {
//         setStartStatus(false);
//         setStartTime(null);
//       }
//     }
//   };

//   const handleStartExam = async () => {
//     if (!selectedCourse) {
//       Alert.alert('Error', 'Please select a course.');
//       return;
//     }
  
//     const examData = {
//       startStatus: true,
//       startTime: serverTimestamp(),
//     };
  
//     try {
//       const examDocRef = doc(firestore, 'exams', selectedCourse);
//       const examSnapshot = await getDoc(examDocRef);
  
//       if (examSnapshot.exists()) {
//         // Document exists, update it
//         await updateDoc(examDocRef, examData);
//       } else {
//         // Document doesn't exist, create a new one
//         await setDoc(examDocRef, examData);
//       }
  
//       // After updating or creating the document, fetch the updated data
//       const updatedExamSnapshot = await getDoc(examDocRef);
//       if (updatedExamSnapshot.exists()) {
//         const updatedExamData = updatedExamSnapshot.data();
//         setStartStatus(updatedExamData.startStatus);
//         setStartTime(updatedExamData.startTime ? updatedExamData.startTime.toDate() : null);
//       }
//     } catch (error) {
//       console.error('Error starting the exam:', error);
//       Alert.alert('Error', 'Failed to start the exam. Please try again.');
//     }
//   };
  
  
//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.card}>
//         <View style={styles.header}>
//           <TouchableOpacity style={styles.homeButton} onPress={() => navigation.navigate('Home')}>
//             <Text style={styles.homeButtonText}>Home</Text>
//           </TouchableOpacity>
//         </View>
//         <ScrollView>
//           <Text style={styles.title}>Start Exam</Text>
//           <Text style={styles.subtitle}>Select a Course:</Text>
//           <View style={styles.courseSelection}>
//             {courseNames.map((course, index) => (
//               <TouchableOpacity
//                 key={index}
//                 style={[
//                   styles.courseButton,
//                   selectedCourse === course ? styles.courseButtonSelected : null,
//                 ]}
//                 onPress={() => setSelectedCourse(course)}
//               >
//                 <Text style={styles.courseButtonText}>{course}</Text>
//               </TouchableOpacity>
//             ))}
//           </View>
//           <Text style={styles.subtitle}>Exam Status:</Text>
//           <Text style={styles.status}>{startStatus ? 'Started' : 'Not Started'}</Text>
//           {startStatus && (
//             <Text style={styles.startTime}>Start Time: {startTime.toLocaleString()}</Text>
//           )}
//           <TouchableOpacity
//             style={styles.startButton}
//             onPress={handleStartExam}
//             disabled={startStatus}
//           >
//             <Text style={styles.startButtonText}>Start Exam</Text>
//           </TouchableOpacity>
//         </ScrollView>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     backgroundColor: '#F5F5F5',
//   },
//   card: {
//     width: '90%',
//     backgroundColor: 'white',
//     borderRadius: 8,
//     padding: 16,
//     elevation: 2,
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'flex-start',
//     alignItems: 'center',
//     marginBottom: 16,
//   },
//   homeButton: {
//     backgroundColor: '#007AFF',
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//     borderRadius: 8,
//   },
//   homeButtonText: {
//     color: 'white',
//     fontWeight: 'bold',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 16,
//   },
//   subtitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 8,
//   },
//   courseSelection: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//   },
//   courseButton: {
//     backgroundColor: '#007AFF',
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//     borderRadius: 8,
//     margin: 8,
//   },
//   courseButtonSelected: {
//     backgroundColor: '#003e94',
//   },
//   courseButtonText: {
//     color: 'white',
//     fontWeight: 'bold',
//   },
//   status: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   startTime: {
//     fontSize: 16,
//     marginBottom: 16,
//   },
//   startButton: {
//     backgroundColor: '#007AFF',
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//     borderRadius: 8,
//   },
//   startButtonText: {
//     color: 'white',
//     fontWeight: 'bold',
//   },
// });

// export default StartExamScreen;



// import React, { useEffect, useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   SafeAreaView,
//   TouchableOpacity,
//   ScrollView,
//   TextInput,
// } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import {
//   collection,
//   doc,
//   getDoc,
//   updateDoc,
//   serverTimestamp,
// } from 'firebase/firestore';
// import { firestore } from './../firebase/index';
// import questions from './constants/questions';

// const StartExamScreen = () => {
//   const navigation = useNavigation();
//   const [selectedCourse, setSelectedCourse] = useState(null);
//   const [startStatus, setStartStatus] = useState(false);
//   const [startTime, setStartTime] = useState(null);

//   const courseNames = questions.map((course) => course.courseName);

//   useEffect(() => {
//     retrieveExamData();
//   }, [selectedCourse]);

//   const retrieveExamData = async () => {
//     if (selectedCourse) {
//       const examDocRef = doc(firestore, 'exams', selectedCourse);
//       const examSnapshot = await getDoc(examDocRef);
//       if (examSnapshot.exists()) {
//         const examData = examSnapshot.data();
//         setStartStatus(examData.startStatus);
//         setStartTime(examData.startTime ? examData.startTime.toDate() : null);
//       } else {
//         setStartStatus(false);
//         setStartTime(null);
//       }
//     }
//   };

//   const handleStartExam = async () => {
//     if (!selectedCourse) {
//       Alert.alert('Error', 'Please select a course.');
//       return;
//     }

//     const examData = {
//       startStatus: true,
//       startTime: serverTimestamp(),
//     };

//     try {
//       const examDocRef = doc(firestore, 'exams', selectedCourse);
//       await updateDoc(examDocRef, examData);
//       setStartStatus(true);
//       setStartTime(new Date());
//     } catch (error) {
//       console.error('Error starting the exam:', error);
//       Alert.alert('Error', 'Failed to start the exam. Please try again.');
//     }
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.card}>
//         <View style={styles.header}>
//           <TouchableOpacity style={styles.homeButton} onPress={() => navigation.navigate('Home')}>
//             <Text style={styles.homeButtonText}>Home</Text>
//           </TouchableOpacity>
//         </View>
//         <ScrollView>
//           <Text style={styles.title}>Start Exam</Text>
//           <Text style={styles.subtitle}>Select a Course:</Text>
//           <View style={styles.courseSelection}>
//             {courseNames.map((course, index) => (
//               <TouchableOpacity
//                 key={index}
//                 style={[
//                   styles.courseButton,
//                   selectedCourse === course ? styles.courseButtonSelected : null,
//                 ]}
//                 onPress={() => setSelectedCourse(course)}
//               >
//                 <Text style={styles.courseButtonText}>{course}</Text>
//               </TouchableOpacity>
//             ))}
//           </View>
//           <Text style={styles.subtitle}>Exam Status:</Text>
//           <Text style={styles.status}>{startStatus ? 'Started' : 'Not Started'}</Text>
//           {startStatus && (
//             <Text style={styles.startTime}>Start Time: {startTime.toLocaleString()}</Text>
//           )}
//           <TouchableOpacity
//             style={styles.startButton}
//             onPress={handleStartExam}
//             disabled={startStatus}
//           >
//             <Text style={styles.startButtonText}>Start Exam</Text>
//           </TouchableOpacity>
//         </ScrollView>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     backgroundColor: '#F5F5F5',
//   },
//   card: {
//     width: '90%',
//     backgroundColor: 'white',
//     borderRadius: 8,
//     padding: 16,
//     elevation: 2,
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'flex-start',
//     alignItems: 'center',
//     marginBottom: 16,
//   },
//   homeButton: {
//     backgroundColor: '#007AFF',
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//     borderRadius: 8,
//   },
//   homeButtonText: {
//     color: 'white',
//     fontWeight: 'bold',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 16,
//   },
//   subtitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 8,
//   },
//   courseSelection: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//   },
//   courseButton: {
//     backgroundColor: '#007AFF',
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//     borderRadius: 8,
//     margin: 8,
//   },
//   courseButtonSelected: {
//     backgroundColor: '#003e94',
//   },
//   courseButtonText: {
//     color: 'white',
//     fontWeight: 'bold',
//   },
//   status: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   startTime: {
//     fontSize: 16,
//     marginBottom: 16,
//   },
//   startButton: {
//     backgroundColor: '#007AFF',
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//     borderRadius: 8,
//   },
//   startButtonText: {
//     color: 'white',
//     fontWeight: 'bold',
//   },
// });

// export default StartExamScreen;


// import React, { useEffect, useState } from 'react';
// import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import { collection, doc, getDoc, updateDoc, serverTimestamp } from 'firebase/firestore';
// import { firestore } from './../firebase';
// import questions from './constants/questions';

// const StartExamScreen = () => {
//   const navigation = useNavigation();
//   const [selectedCourse, setSelectedCourse] = useState(null);
//   const [examData, setExamData] = useState({ startStatus: false, startTime: null });
//   const [searchQuery, setSearchQuery] = useState('');

//   useEffect(() => {
//     retrieveExamData();
//   }, [selectedCourse]);

//   const retrieveExamData = async () => {
//     if (selectedCourse) {
//       try {
//         const examDocRef = doc(firestore, 'exams', selectedCourse);
//         const examSnapshot = await getDoc(examDocRef);
//         if (examSnapshot.exists()) {
//           const examData = examSnapshot.data();
//           setExamData({
//             startStatus: examData.startStatus || false,
//             startTime: examData.startTime ? examData.startTime.toDate() : null,
//           });
//         } else {
//           setExamData({ startStatus: false, startTime: null });
//         }
//       } catch (error) {
//         console.error('Error retrieving exam data:', error);
//       }
//     }
//   };

//   const handleStartExam = async () => {
//     if (!selectedCourse) {
//       Alert.alert('Error', 'Please select a course.');
//       return;
//     }

//     const examData = {
//       startStatus: true,
//       startTime: serverTimestamp(),
//     };

//     try {
//       const examDocRef = doc(firestore, 'exams', selectedCourse);
//       await updateDoc(examDocRef, examData);
//       setExamData({ startStatus: true, startTime: new Date() });
//     } catch (error) {
//       console.error('Error starting the exam:', error);
//       Alert.alert('Error', 'Failed to start the exam. Please try again.');
//     }
//   };

//   const renderCourseList = () => {
//     return questions.map((course) => (
//       <TouchableOpacity
//         key={course.courseName}
//         style={styles.courseItem}
//         onPress={() => setSelectedCourse(course.courseName)}
//       >
//         <Text style={styles.courseText}>{course.courseName}</Text>
//       </TouchableOpacity>
//     ));
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.card}>
//         <View style={styles.header}>
//           <TouchableOpacity style={styles.homeButton} onPress={() => navigation.navigate('Home')}>
//             <Text style={styles.homeButtonText}>Home</Text>
//           </TouchableOpacity>
//         </View>
//         <View style={styles.searchContainer}>
//           <TextInput
//             style={styles.searchInput}
//             placeholder="Select a Course"
//             value={searchQuery}
//             onChangeText={setSearchQuery}
//           />
//         </View>
//         <ScrollView style={styles.courseList}>
//           {renderCourseList()}
//         </ScrollView>
//         {selectedCourse && (
//           <View style={styles.examInfo}>
//             <Text style={styles.examStatus}>Start Status: {examData.startStatus ? 'Started' : 'Not Started'}</Text>
//             <Text style={styles.startTime}>Start Time: {examData.startTime ? examData.startTime.toLocaleString() : 'N/A'}</Text>
//           </View>
//         )}
//         <TouchableOpacity
//           style={styles.startButton}
//           onPress={handleStartExam}
//           disabled={examData.startStatus}
//         >
//           <Text style={styles.startButtonText}>Start Exam</Text>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     backgroundColor: '#F5F5F5',
//   },
//   card: {
//     width: '90%',
//     backgroundColor: 'white',
//     borderRadius: 8,
//     padding: 16,
//     elevation: 2,
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'flex-start',
//     alignItems: 'center',
//     marginBottom: 16,
//   },
//   homeButton: {
//     backgroundColor: '#007AFF',
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//     borderRadius: 8,
//   },
//   homeButtonText: {
//     color: 'white',
//     fontWeight: 'bold',
//   },
//   searchContainer: {
//     flexDirection: 'row',
//     marginBottom: 16,
//   },
//   searchInput: {
//     flex: 1,
//     height: 40,
//     borderWidth: 1,
//     borderColor: 'gray',
//     borderRadius: 8,
//     paddingHorizontal: 8,
//   },
//   courseList: {
//     marginBottom: 16,
//   },
//   courseItem: {
//     backgroundColor: '#007AFF',
//     padding: 8,
//     borderRadius: 8,
//     marginBottom: 8,
//   },
//   courseText: {
//     color: 'white',
//     fontWeight: 'bold',
//   },
//   examInfo: {
//     marginBottom: 16,
//   },
//   examStatus: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   startTime: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   startButton: {
//     backgroundColor: '#007AFF',
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//     borderRadius: 8,
//   },
//   startButtonText: {
//     color: 'white',
//     fontWeight: 'bold',
//   },
// });

// export default StartExamScreen;



// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   ScrollView,
//   Alert,
//   TouchableOpacity,
// } from 'react-native';
// import {
//   collection,
//   doc,
//   getDoc,
//   updateDoc,
//   serverTimestamp,
// } from 'firebase/firestore';
// import { firestore } from './../firebase/index';
// import questions from './constants/questions';

// const StartExamScreen = () => {
//   const [selectedCourse, setSelectedCourse] = useState(null);
//   const [startStatus, setStartStatus] = useState(false);
//   const [startTime, setStartTime] = useState(null);

//   const courseNames = questions.map((course) => course.courseName);

//   useEffect(() => {
//     if (selectedCourse) {
//       // Fetch the initial exam status and start time for the selected course.
//       const fetchExamData = async () => {
//         const examDocRef = doc(firestore, 'exams', selectedCourse);
//         const examSnapshot = await getDoc(examDocRef);
//         if (examSnapshot.exists()) {
//           const examData = examSnapshot.data();
//           setStartStatus(examData.startStatus);
//           setStartTime(examData.startTime.toDate());
//         } else {
//           // Exam data not found, reset status and time.
//           setStartStatus(false);
//           setStartTime(null);
//         }
//       };
//       fetchExamData();
//     }
//   }, [selectedCourse]);

//   const handleStartExam = async () => {
//     if (!selectedCourse) {
//       Alert.alert('Error', 'Please select a course.');
//       return;
//     }

//     const examData = {
//       startStatus: true,
//       startTime: serverTimestamp(),
//     };

//     try {
//       const examDocRef = doc(firestore, 'exams', selectedCourse);
//       await updateDoc(examDocRef, examData);
//       setStartStatus(true);
//       setStartTime(new Date());
//     } catch (error) {
//       console.error('Error starting the exam:', error);
//       Alert.alert('Error', 'Failed to start the exam. Please try again.');
//     }
//   };

//   const handleUpdateStatus = async (course, isCourseSelected) => {
//     if (!isCourseSelected) {
//       Alert.alert('Error', 'Please select a course.');
//       return;
//     }

//     // Toggle the exam status and update the state and Firestore.
//     const newStatus = !startStatus;
//     setStartStatus(newStatus);

//     const examData = {
//       startStatus: newStatus,
//       startTime: newStatus ? serverTimestamp() : null,
//     };

//     try {
//       const examDocRef = doc(firestore, 'exams', course);
//       await updateDoc(examDocRef, examData);
//     } catch (error) {
//       console.error('Error updating exam status:', error);
//       Alert.alert('Error', 'Failed to update exam status. Please try again.');
//     }
//   };

//   const handleCourseSelection = (course) => {
//     setSelectedCourse(course);
//   };

//   const renderTableHeader = () => {
//     return (
//       <View style={styles.row}>
//         <Text style={styles.header}>Course Name</Text>
//         <Text style={styles.header}>Start Status</Text>
//         <Text style={styles.header}>Start Time</Text>
//         <Text style={styles.header}>Update</Text>
//       </View>
//     );
//   };

//   const renderTableRow = (course, isCourseSelected, startStatus, startTime) => {
//     return (
//       <View style={styles.row} key={course}>
//         <Text>{course}</Text>
//         <Text>{isCourseSelected ? startStatus.toString() : 'N/A'}</Text>
//         <Text>
//           {isCourseSelected && startStatus
//             ? startTime.toLocaleString()
//             : 'N/A'}
//         </Text>
//         <TouchableOpacity
//           onPress={() => handleUpdateStatus(course, isCourseSelected)}
//           disabled={!isCourseSelected}
//         >
//           <Text style={styles.updateButton}>Update</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Start Exam</Text>
//       <ScrollView horizontal>
//         <View>
//           {renderTableHeader()}
//           {courseNames.map((course) => {
//             const isCourseSelected = course === selectedCourse;
//             return renderTableRow(course, isCourseSelected, startStatus, startTime);
//           })}
//         </View>
//       </ScrollView>
//       <TouchableOpacity
//         style={styles.startButton}
//         onPress={handleStartExam}
//         disabled={startStatus}
//       >
//         <Text style={styles.startButtonText}>Start Exam</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 16,
//   },
//   header: {
//     fontWeight: 'bold',
//   },
//   row: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginVertical: 8,
//   },
//   updateButton: {
//     color: 'blue',
//   },
//   startButton: {
//     backgroundColor: 'blue',
//     padding: 10,
//     borderRadius: 5,
//     marginTop: 20,
//   },
//   startButtonText: {
//     color: 'white',
//     textAlign: 'center',
//   },
// });

// export default StartExamScreen;


// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   ScrollView,
//   Alert,
//   TouchableOpacity,
// } from 'react-native';
// import {
//   collection,
//   doc,
//   getDoc,
//   updateDoc,
//   serverTimestamp,
// } from 'firebase/firestore';
// import { firestore } from './../firebase/index';
// import questions from './constants/questions';

// const StartExamScreen = () => {
//   const [selectedCourse, setSelectedCourse] = useState(null);
//   const [startStatus, setStartStatus] = useState(false);
//   const [startTime, setStartTime] = useState(null);

//   const courseNames = questions.map((course) => course.courseName);

//   useEffect(() => {
//     if (selectedCourse) {
//       // Fetch the initial exam status and start time for the selected course.
//       const fetchExamData = async () => {
//         const examDocRef = doc(firestore, 'exams', selectedCourse);
//         const examSnapshot = await getDoc(examDocRef);
//         if (examSnapshot.exists()) {
//           const examData = examSnapshot.data();
//           setStartStatus(examData.startStatus);
//           setStartTime(examData.startTime.toDate());
//         } else {
//           // Exam data not found, reset status and time.
//           setStartStatus(false);
//           setStartTime(null);
//         }
//       };
//       fetchExamData();
//     }
//   }, [selectedCourse]);

//   const handleStartExam = async () => {
//     if (!selectedCourse) {
//       Alert.alert('Error', 'Please select a course.');
//       return;
//     }

//     const examData = {
//       startStatus: true,
//       startTime: serverTimestamp(),
//     };

//     try {
//       const examDocRef = doc(firestore, 'exams', selectedCourse);
//       await updateDoc(examDocRef, examData);
//       setStartStatus(true);
//       setStartTime(new Date());
//     } catch (error) {
//       console.error('Error starting the exam:', error);
//       Alert.alert('Error', 'Failed to start the exam. Please try again.');
//     }
//   };

//   const handleUpdateStatus = async () => {
//     if (!selectedCourse) {
//       Alert.alert('Error', 'Please select a course.');
//       return;
//     }

//     // Update the exam status and start time for the selected course.
//     const examData = {
//       startStatus: true,
//       startTime: serverTimestamp(),
//     };

//     try {
//       const examDocRef = doc(firestore, 'exams', selectedCourse);
//       await updateDoc(examDocRef, examData);
//       setStartStatus(true);
//       setStartTime(new Date());
//     } catch (error) {
//       console.error('Error updating exam status:', error);
//       Alert.alert('Error', 'Failed to update exam status. Please try again.');
//     }
//   };

//   const handleCourseSelection = (course) => {
//     setSelectedCourse(course);
//   };

//   const renderTableHeader = () => {
//     return (
//       <View style={styles.row}>
//         <Text style={styles.header}>Course Name</Text>
//         <Text style={styles.header}>Start Status</Text>
//         <Text style={styles.header}>Start Time</Text>
//         <Text style={styles.header}>Update</Text>
//       </View>
//     );
//   };

//   const renderTableRow = (course, isCourseSelected, startStatus, startTime) => {
//     return (
//       <View style={styles.row} key={course}>
//         <Text>{course}</Text>
//         <Text>{isCourseSelected ? startStatus.toString() : 'N/A'}</Text>
//         <Text>
//           {isCourseSelected && startStatus
//             ? startTime.toLocaleString()
//             : 'N/A'}
//         </Text>
//         <TouchableOpacity
//           onPress={handleUpdateStatus}
//           disabled={!isCourseSelected || startStatus}
//         >
//           <Text style={styles.updateButton}>Update</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Start Exam</Text>
//       <ScrollView horizontal>
//         <View>
//           {renderTableHeader()}
//           {courseNames.map((course) => {
//             const isCourseSelected = course === selectedCourse;
//             return renderTableRow(course, isCourseSelected, startStatus, startTime);
//           })}
//         </View>
//       </ScrollView>
//       <TouchableOpacity
//         style={styles.startButton}
//         onPress={handleStartExam}
//         disabled={startStatus}
//       >
//         <Text style={styles.startButtonText}>Start Exam</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 16,
//   },
//   header: {
//     fontWeight: 'bold',
//   },
//   row: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginVertical: 8,
//   },
//   updateButton: {
//     color: 'blue',
//   },
//   startButton: {
//     backgroundColor: 'blue',
//     padding: 10,
//     borderRadius: 5,
//     marginTop: 20,
//   },
//   startButtonText: {
//     color: 'white',
//     textAlign: 'center',
//   },
// });

// export default StartExamScreen;

// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   Button,
//   ScrollView,
//   Alert,
// } from 'react-native';
// import {
//   collection,
//   addDoc,
//   serverTimestamp,
//   updateDoc,
//   doc,
//   getDoc,
// } from 'firebase/firestore';
// import { firestore } from './../firebase/index';
// import questions from './constants/questions';

// const StartExamScreen = () => {
//   const [startStatus, setStartStatus] = useState(false);
//   const [startTime, setStartTime] = useState(null);
//   const [selectedCourse, setSelectedCourse] = useState(null);

//   const courseNames = questions.map(course => course.courseName);

//   useEffect(() => {
//     if (selectedCourse) {
//       // Fetch the initial exam status and start time for the selected course.
//       const fetchExamData = async () => {
//         const examDocRef = doc(firestore, 'exams', selectedCourse);
//         const examSnapshot = await getDoc(examDocRef);
//         if (examSnapshot.exists()) {
//           const examData = examSnapshot.data();
//           setStartStatus(examData.startStatus);
//           setStartTime(examData.startTime.toDate());
//         } else {
//           // Exam data not found, reset status and time.
//           setStartStatus(false);
//           setStartTime(null);
//         }
//       };
//       fetchExamData();
//     }
//   }, [selectedCourse]);

//   const handleStartExam = async () => {
//     if (!selectedCourse) {
//       Alert.alert('Error', 'Please select a course.');
//       return;
//     }

//     const examData = {
//       startStatus: true,
//       startTime: serverTimestamp(),
//     };

//     try {
//       const examDocRef = doc(firestore, 'exams', selectedCourse);
//       await updateDoc(examDocRef, examData);
//       setStartStatus(true);
//       setStartTime(new Date());
//     } catch (error) {
//       console.error('Error starting the exam:', error);
//       Alert.alert('Error', 'Failed to start the exam. Please try again.');
//     }
//   };

//   const handleUpdateStatus = async () => {
//     if (!selectedCourse) {
//       Alert.alert('Error', 'Please select a course.');
//       return;
//     }

//     // Update the exam status and start time for the selected course.

//     const examData = {
//       startStatus: true,
//       startTime: serverTimestamp(),
//     };

//     try {
//       const examDocRef = doc(firestore, 'exams', selectedCourse);
//       await updateDoc(examDocRef, examData);
//       setStartStatus(true);
//       setStartTime(new Date());
//     } catch (error) {
//       console.error('Error updating exam status:', error);
//       Alert.alert('Error', 'Failed to update exam status. Please try again.');
//     }
//   };

//   const handleCourseSelection = course => {
//     setSelectedCourse(course);
//   };

//   const renderTableHeader = () => {
//     return (
//       <View style={styles.row}>
//         <Text style={styles.header}>Course Name</Text>
//         <Text style={styles.header}>Start Status</Text>
//         <Text style={styles.header}>Start Time</Text>
//         <Text style={styles.header}>Update</Text>
//       </View>
//     );
//   };

//   const renderTableRow = (course, isCourseSelected, startStatus, startTime) => {
//     return (
//       <View style={styles.row} key={course}>
//         <Text>{course}</Text>
//         <Text>{isCourseSelected ? startStatus.toString() : 'N/A'}</Text>
//         <Text>
//           {isCourseSelected && startStatus
//             ? startTime.toLocaleString()
//             : 'N/A'}
//         </Text>
//         <Button
//           title="Update"
//           onPress={handleUpdateStatus}
//           disabled={!isCourseSelected || startStatus}
//         />
//       </View>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Start Exam</Text>
//       <ScrollView horizontal>
//         <View>
//           {renderTableHeader()}
//           {courseNames.map(course => {
//             const isCourseSelected = course === selectedCourse;
//             return renderTableRow(course, isCourseSelected, startStatus, startTime);
//           })}
//         </View>
//       </ScrollView>
//       <Button title="Start Exam" onPress={handleStartExam} disabled={startStatus} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 16,
//   },
//   header: {
//     fontWeight: 'bold',
//   },
//   row: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginVertical: 8,
//   },
// });

// export default StartExamScreen;


// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   Button,
//   ScrollView,
//   Alert,
// } from 'react-native';
// import {
//   collection,
//   addDoc,
//   serverTimestamp,
//   updateDoc,
//   doc,
// } from 'firebase/firestore';
// import { firestore } from './../firebase/index';
// import questions from './constants/questions'; // Import the questions data.

// const StartExamScreen = () => {
//   const [startStatus, setStartStatus] = useState(false);
//   const [startTime, setStartTime] = useState(null);
//   const [selectedCourse, setSelectedCourse] = useState(null);

//   // Extract course names from the imported questions data.
//   const courseNames = questions.map(question => question.courseName);

//   const handleStartExam = async () => {
//     if (!selectedCourse) {
//       Alert.alert('Error', 'Please select a course.');
//       return;
//     }

//     const examData = {
//       courseName: selectedCourse,
//       startTime: serverTimestamp(),
//       startStatus: false,
//     };

//     try {
//       const docRef = await addDoc(collection(firestore, 'exams'), examData);
//       console.log('Exam data saved to Firestore with ID:', docRef.id);
//       setStartStatus(true);
//       setStartTime(new Date());
//     } catch (error) {
//       console.error('Error saving exam data to Firestore:', error);
//       Alert.alert('Error', 'Failed to start the exam. Please try again.');
//     }
//   };

//   const handleUpdateStatus = async () => {
//     if (!selectedCourse) {
//       Alert.alert('Error', 'Please select a course.');
//       return;
//     }

//     const examCollectionRef = collection(firestore, 'exams');
//     const query = collection(firestore, 'exams', doc => doc.where('courseName', '==', selectedCourse));
//     const querySnapshot = await query.get();

//     if (querySnapshot.empty) {
//       Alert.alert('Error', 'No exam found for the selected course.');
//       return;
//     }

//     querySnapshot.forEach(async doc => {
//       try {
//         await updateDoc(doc.ref, {
//           startStatus: true,
//           startTime: serverTimestamp(),
//         });
//         setStartStatus(true);
//         setStartTime(new Date());
//       } catch (error) {
//         console.error('Error updating exam status:', error);
//         Alert.alert('Error', 'Failed to update exam status. Please try again.');
//       }
//     });
//   };

//   const handleCourseSelection = course => {
//     setSelectedCourse(course);
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Start Exam</Text>
//       <ScrollView horizontal>
//         <View>
//           <Text style={styles.header}>Course Name</Text>
//           <Text style={styles.header}>Start Status</Text>
//           <Text style={styles.header}>Start Time</Text>
//           {courseNames.map(course => {
//             const isCourseSelected = course === selectedCourse;
//             return (
//               <View key={course}>
//                 <Text>{course}</Text>
//                 <Text>{isCourseSelected ? startStatus.toString() : 'N/A'}</Text>
//                 <Text>
//                   {isCourseSelected && startStatus
//                     ? startTime.toLocaleString()
//                     : 'N/A'}
//                 </Text>
//                 <Button title="Select" onPress={() => handleCourseSelection(course)} />
//               </View>
//             );
//           })}
//         </View>
//       </ScrollView>
//       <Button title="Start Exam" onPress={handleStartExam} />
//       <Button title="Update Status" onPress={handleUpdateStatus} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 16,
//   },
//   header: {
//     fontWeight: 'bold',
//   },
// });

// export default StartExamScreen;

// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   Button,
//   ScrollView,
//   Alert,
// } from 'react-native';
// import {
//   collection,
//   addDoc,
//   serverTimestamp,
//   updateDoc,
//   doc,
// } from 'firebase/firestore';
// import { firestore } from './../firebase/index';
// import { courseName } from './constants/questions';
// import CustomTable from './CustomTable';

// const StartExamScreen = () => {
//   const [startStatus, setStartStatus] = useState(false);
//   const [startTime, setStartTime] = useState(null);
//   const [courseNames, setCourseNames] = useState([]);
//   const [selectedCourse, setSelectedCourse] = useState(null);

//   useEffect(() => {
//     // Initialize course names from your data source
//     const courseNamesFromData = [
//       'Course 1',
//       'Course 2',
//       'Course 3',
//       // Add more course names as needed
//     ];
//     setCourseNames(courseNamesFromData);
//   }, []);

//   const handleStartExam = async () => {
//     if (!selectedCourse) {
//       Alert.alert('Error', 'Please select a course.');
//       return;
//     }

//     const examData = {
//       courseName: selectedCourse,
//       startTime: serverTimestamp(),
//       startStatus: false,
//     };

//     try {
//       const docRef = await addDoc(collection(firestore, 'exams'), examData);
//       console.log('Exam data saved to Firestore with ID:', docRef.id);
//       setStartStatus(true);
//       setStartTime(new Date());
//     } catch (error) {
//       console.error('Error saving exam data to Firestore:', error);
//       Alert.alert('Error', 'Failed to start the exam. Please try again.');
//     }
//   };

//   const handleUpdateStatus = async () => {
//     if (!selectedCourse) {
//       Alert.alert('Error', 'Please select a course.');
//       return;
//     }

//     const examCollectionRef = collection(firestore, 'exams');
//     const query = collection(firestore, 'exams', doc => doc.where('courseName', '==', selectedCourse));
//     const querySnapshot = await query.get();

//     if (querySnapshot.empty) {
//       Alert.alert('Error', 'No exam found for the selected course.');
//       return;
//     }

//     querySnapshot.forEach(async doc => {
//       try {
//         await updateDoc(doc.ref, {
//           startStatus: true,
//           startTime: serverTimestamp(),
//         });
//         setStartStatus(true);
//         setStartTime(new Date());
//       } catch (error) {
//         console.error('Error updating exam status:', error);
//         Alert.alert('Error', 'Failed to update exam status. Please try again.');
//       }
//     });
//   };

//   const handleCourseSelection = course => {
//     setSelectedCourse(course);
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Start Exam</Text>
//       <ScrollView horizontal>
//         <CustomTable
//           headers={['Course Name', 'Start Status', 'Start Time']}
//           data={courseNames.map(course => {
//             const isCourseSelected = course === selectedCourse;
//             return {
//               values: [
//                 course,
//                 isCourseSelected ? startStatus.toString() : 'N/A',
//                 isCourseSelected && startStatus ? startTime.toLocaleString() : 'N/A',
//               ],
//               onSelect: () => handleCourseSelection(course),
//             };
//           })}
//         />
//       </ScrollView>
//       <Button title="Start Exam" onPress={handleStartExam} />
//       <Button title="Update Status" onPress={handleUpdateStatus} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 16,
//   },
// });

// export default StartExamScreen;


// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TextInput, Button, Alert } from 'react-native';
// import { collection, addDoc } from 'firebase/firestore';
// import { firestore } from './../firebase/index';

// const StartExamScreen = () => {
//   const [courseName, setCourseName] = useState('');
//   const [startTime, setStartTime] = useState(null);
//   const [startStatus, setStartStatus] = useState(false);

//   const startExam = async () => {
//     if (!courseName) {
//       Alert.alert('Error', 'Course name is required.');
//       return;
//     }

//     const examData = {
//       courseName,
//       startTime: new Date(),
//       startStatus: false, // Set to default false
//     };

//     try {
//       const docRef = await addDoc(collection(firestore, 'exams'), examData);
//       console.log('Exam data saved to Firestore with ID:', docRef.id);
//       // Optionally, you can navigate to the actual exam using React Navigation.
//     } catch (error) {
//       console.error('Error saving exam data to Firestore:', error);
//       Alert.alert('Error', 'Failed to start the exam. Please try again.');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Start Exam</Text>

//       <TextInput
//         style={styles.input}
//         placeholder="Course Name"
//         value={courseName}
//         onChangeText={setCourseName}
//       />

//       <Button title="Start Exam" onPress={startExam} />

//       {startTime && (
//         <Text style={styles.startTime}>
//           Exam started at: {startTime.toLocaleString()}
//         </Text>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     padding: 16,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 16,
//   },
//   input: {
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 16,
//     padding: 8,
//   },
//   startTime: {
//     fontSize: 16,
//     marginTop: 16,
//   },
// });

// export default StartExamScreen;
