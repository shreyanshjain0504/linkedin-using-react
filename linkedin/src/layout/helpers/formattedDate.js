const formattedDate = (date = new Date()) => {
    return new Date().toISOString().split('T')[0];
}

export default formattedDate