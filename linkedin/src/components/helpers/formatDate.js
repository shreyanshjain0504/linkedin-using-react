export const formatDate = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`;
}

export default formatDate