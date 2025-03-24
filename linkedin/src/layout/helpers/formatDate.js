export const formatDate = (date) => {
    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    return `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`;
}

export default formatDate