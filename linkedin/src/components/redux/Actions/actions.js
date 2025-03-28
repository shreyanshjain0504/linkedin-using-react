export const setShowMore = (value) => ({
  type: 'SET_SHOW_MORE',
  payload: value,
});

export const setInputText = (inputText) => ({
  type: 'SET_INPUT_TEXT',
  payload: inputText,
});

export const setFilterArray = (filterArray) => ({
  type: 'SET_FILTER_ARRAY',
  payload: filterArray,
});

export const setStartDate = (startDate) => ({
  type: 'SET_START_DATE',
  payload: startDate,
});

export const setEndDate = (endDate) => ({
  type: 'SET_END_DATE',
  payload: endDate,
});

export const setIsSearchListOpen = (isSearchListOpen) => ({
  type: 'SET_IS_SEARCH_LIST_OPEN',
  payload: isSearchListOpen
})

export const setSkills = (skills) => ({
  type: 'SET_SKILLS',
  payload: skills,
});

export const addSkill = (skill) => ({
  type: 'ADD_SKILL',
  payload: skill,
});