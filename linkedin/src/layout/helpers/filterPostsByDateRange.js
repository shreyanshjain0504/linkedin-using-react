import saveData from "./saveData";

const filterPostsByDateRange = (startTime, endTime) => {
    const postArray = localStorage.getItem('allPosts') ? JSON.parse(localStorage.getItem('allPosts')) : []
    const filteredPosts = postArray.filter(post => startTime <= post.time && post.time <= endTime);
    saveData('filter', JSON.stringify(filteredPosts))
}

export default filterPostsByDateRange;