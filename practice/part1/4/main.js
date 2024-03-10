// Write a JavaScript program to get the current 
// dates.
// Expected outup:
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

const getDate = (date = new Date()) => {
    const dd = date.getDate();
    const mm = (date.getMonth() + 1).toString().padStart(2, "0");
    const yy = date.getFullYear();

    return `${mm}-${dd}-${yy}`;
};

console.log(getDate());