const useCreateDate = () => {
    const dateObj = new Date();
    const monthNames = [
      'Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun',
      'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'
    ];
    const monthName = monthNames[dateObj.getMonth()];
  
    const date = `${monthName} ${dateObj.getDate()}, ${dateObj.getFullYear()} [${dateObj.getHours()}:${dateObj.getMinutes()}]`;
    return date;
  }
  
  export default useCreateDate;