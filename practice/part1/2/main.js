const getExtension = (string) => {
    return string.slice(string.lastIndexOf("."));
};


console.log(getExtension("style.css"));