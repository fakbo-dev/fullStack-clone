const wordCounter = (text) => {
    const words = text.toLowerCase();
    const wordMap = {};
    const charVariable = words.split(/\s+/);

    for (const word of charVariable) {
        if (word in wordMap) {
            wordMap[word]++;
        } else {
            wordMap[word] = 1;
        }
    }

    return wordMap;
};

const text = "Hello my name name name name is Fakbo";

const result = wordCounter(text);

console.log(result);