export const formatDate = (date: Date): string => {
    const year = date.getFullYear();
    const month = date.getMonth() < 10 ? `${date.getMonth() + 1}` : date.getMonth() + 1
    const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()
    return `${year}.${month}.${day}`
}
//it's analog method libriry moment for better understanding how work methods moment libriry
//moment(date).format("YYYY.MM.DD")