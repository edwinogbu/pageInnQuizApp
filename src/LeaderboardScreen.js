import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { firestore } from './../firebase';

const PAGE_SIZE = 10; // Number of quiz results per page

const LeaderboardScreen = () => {
  const navigation = useNavigation();
  const [quizResults, setQuizResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [searchResultNotFound, setSearchResultNotFound] = useState(false);

  useEffect(() => {
        // Initialize with some initial data before loading actual data
        const initialData = Array(PAGE_SIZE).fill({
          username: 'Loading...',
          percentageScore: 0,
          courseName: 'Loading...',
          userId: 'Loading...',
        });
        setQuizResults(initialData);
    retrieveQuizResults();
  }, []);

  useEffect(() => {
    handleSearch();
  }, [searchQuery]);

  const retrieveQuizResults = async () => {
    try {
      const querySnapshot = await getDocs(collection(firestore, 'quizResults'));
      const results = querySnapshot.docs.map((doc) => doc.data());
      setQuizResults(results);
      calculateTotalPages(results);
    } catch (error) {
      console.error('Error retrieving quiz results:', error);
    }
  };

  const calculateTotalPages = (results) => {
    const totalResults = results.length;
    const totalPages = Math.ceil(totalResults / PAGE_SIZE);
    setTotalPages(totalPages);
  };

  const handleSearch = () => {
    const filteredResults = quizResults.filter((result) =>
      result.username.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setTotalPages(Math.ceil(filteredResults.length / PAGE_SIZE));
    setSearchResultNotFound(filteredResults.length === 0);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleRefresh = () => {
    retrieveQuizResults();
    setSearchQuery('');
  };


  const renderLeaderboard = () => {
    const startIndex = (currentPage - 1) * PAGE_SIZE;
    const endIndex = startIndex + PAGE_SIZE;
    const leaderboardData = quizResults.slice(startIndex, endIndex);
  
    const tableHead = ['Name', 'Score', 'Course'];
    const tableData = leaderboardData.map((result) => ({
      name: result.username,
      score: result.percentageScore.toFixed(2) + '%',
      course: result.courseName,
      userId: result.userId,
    }));
  
    return (
      <View style={styles.tableContainer}>
        <View style={[styles.tableRow, styles.tableHeader]}>
          {tableHead.map((header, index) => (
            <Text key={index} style={styles.tableHeaderText}>
              {header}
            </Text>
          ))}
        </View>
        {tableData.map((rowData, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => navigation.navigate('UserProfileScreen', { userId: rowData.userId })}
          >
            <View style={[styles.tableRow, index % 2 === 0 ? styles.evenRow : styles.oddRow]}>
              <Text style={styles.tableRowText}>{rowData.name}</Text>
              <Text style={styles.tableRowText}>{rowData.score}</Text>
              <Text style={styles.tableRowText}>{rowData.course}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    );
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.homeButton} onPress={() => navigation.navigate('Home')}>
            <Text style={styles.homeButtonText}>Home</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Type Name To Search "
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
            <Text style={styles.searchButtonText}>Search</Text>
          </TouchableOpacity>
        </View>
        {searchResultNotFound && (
          <Text style={styles.suggestionText}>No results found. Try a different search term.</Text>
        )}
        {!searchResultNotFound && renderLeaderboard()}
        <View style={styles.paginationContainer}>
          {[...Array(totalPages).keys()].map((page) => (
            <TouchableOpacity
              key={page}
              style={[styles.paginationButton, currentPage === page + 1 && styles.paginationButtonActive]}
              onPress={() => handlePageChange(page + 1)}
            >
              <Text style={styles.paginationButtonText}>{page + 1}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <TouchableOpacity style={styles.refreshButton} onPress={handleRefresh}>
          <Text style={styles.refreshButtonText}>Refresh</Text>
        </TouchableOpacity>
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
  searchContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderWidth:1,
    borderColor: 'gray',
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  searchButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    marginLeft: 8,
  },
  searchButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  suggestionText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 16,
  },

  evenRow: {
    backgroundColor: '#F5F5F5',
  },
  oddRow: {
    backgroundColor: '#FFFFFF',
  },
  tableSeparator: {
    height: 1,
    backgroundColor: '#CCC',
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
  },
  paginationButton: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    marginHorizontal: 4,
    backgroundColor: '#007AFF',
  },
  paginationButtonActive: {
    backgroundColor: '#003e94',
  },
  paginationButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  refreshButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    marginTop: 16,
    alignSelf: 'center',
  },
  refreshButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  tableContainer: {
    marginTop: 16,
    borderWidth: 1,
    borderColor: '#007AFF',
    borderRadius: 8,
    overflow: 'hidden',
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 40,
    paddingHorizontal: 16,
  },
  tableHeader: {
    backgroundColor: '#007AFF',
  },
  tableHeaderText: {
    color: 'white',
    fontWeight: 'bold',
  },

  tableRowText: {
    flex: 1,
    textAlign: 'center',
  },
});

export default LeaderboardScreen;