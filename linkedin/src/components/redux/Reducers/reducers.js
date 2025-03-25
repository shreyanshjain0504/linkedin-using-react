const initialState = {
  showMore: false,
  filteredArray: [],
  inputText: '',
  startDate: '',
  endDate: '',
  isSearchListOpen: false,
  skills: [],
  skill: ''
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SHOW_MORE':
      return { ...state, showMore: action.payload };
    case 'SET_START_DATE':
      return { ...state, startDate: action.payload };
    case 'SET_END_DATE':
      return { ...state, endDate: action.payload };
    case 'SET_INPUT_TEXT':
      return { ...state, inputText: action.payload };
    case 'SET_FILTER_ARRAY':
      return { ...state, filterArray: action.payload };
    case 'SET_IS_SEARCH_LIST_OPEN':
      return { ...state, isSearchListOpen: action.payload };
    case 'SET_SKILLS':
      return { ...state, skills: action.payload };
    case 'ADD_SKILL':
      return { ...state, skills: [...state.skills, action.payload] };
    default:
      return state;
  }
};

export default rootReducer;
