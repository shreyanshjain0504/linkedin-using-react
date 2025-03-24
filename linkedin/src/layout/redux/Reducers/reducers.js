const initialState = {
  showMore: false,
  filteredArray: [],
  inputText: '',
  startDate: '',
  endDate: '',
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
    default:
      return state;
  }
};

export default rootReducer;
