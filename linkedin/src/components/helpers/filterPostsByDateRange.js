import saveData from "./saveData";
import _ from 'lodash'

const filterPostsByDateRange = (startTime, endTime) => {
    const postArray = localStorage.getItem('allPosts') ? JSON.parse(localStorage.getItem('allPosts')) : []
    const filteredPosts = _.filter(postArray, post => {
        return startTime <= post.time && post.time <= endTime;
    });
    saveData('filter', JSON.stringify(filteredPosts))
}

export default filterPostsByDateRange;