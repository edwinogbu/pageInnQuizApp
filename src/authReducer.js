const authReducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
        isLoading: false,
      };
    case 'SIGN_IN':
      return {
        ...state,
        user: action.payload,
        isLoading: false,
        isSignIn: true, // Set isSignIn to true
      };
    case 'SIGN_UP':
      return {
        ...state,
        user: action.payload,
        isLoading: false,
        isSignIn: true, // Set isSignIn to true
      };
    case 'SIGN_OUT':
      return {
        ...state,
        user: null,
        isLoading: false,
        isSignIn: false, // Set isSignIn to false
      };
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: action.payload,
      };
    case 'SET_QUESTIONS':
      return {
        ...state,
        questions: action.payload,
      };
    case 'SET_TOTAL_QUESTIONS':
      return {
        ...state,
        totalQuestions: action.payload,
      };
    case 'SET_CORRECT_ANSWERS':
      return {
        ...state,
        correctAnswers: action.payload,
      };
    case 'SET_WRONG_ANSWERS':
      return {
        ...state,
        wrongAnswers: action.payload,
      };
    case 'SET_PERCENTAGE_SCORE':
      return {
        ...state,
        percentageScore: action.payload,
      };
    case 'SET_USERNAME':
      return {
        ...state,
        username: action.payload,
      };
    case 'SET_USER_SCORE':
      return {
        ...state,
        userScore: action.payload,
      };
    case 'SET_COURSE_NAME':
      return {
        ...state,
        courseName: action.payload,
      };
    case 'UPDATE_LEADERBOARD_DATA':
      return {
        ...state,
        leaderboardData: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;

