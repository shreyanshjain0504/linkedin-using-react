const filterPostsByDateRange = (startTime, endTime, postArray, setPostArray) => {
    let updatedArray = [];
    postArray.forEach(post => {
        const postTime = post.time;
        if (startTime <= postTime && postTime <= endTime) {
            updatedArray.push(post);
        }
    });
    setPostArray(updatedArray);
}

export default filterPostsByDateRange